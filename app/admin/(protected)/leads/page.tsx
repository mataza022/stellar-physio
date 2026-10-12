"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, updateDoc, doc, serverTimestamp } from "firebase/firestore";
import { getDb } from "@/lib/firebase";

type Lead = {
  id: string;
  type: string;
  source: string;
  phone: string;
  email: string;
  label: string;
  status: string;
  createdAt: Date | null;
};

const TYPE_STYLES: Record<string, { label: string; cls: string }> = {
  call: { label: "Call", cls: "bg-green-50 text-green-700 border-green-200" },
  whatsapp: { label: "WhatsApp", cls: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  email: { label: "Email", cls: "bg-blue-50 text-blue-700 border-blue-200" },
  directions: { label: "Directions", cls: "bg-amber-50 text-amber-700 border-amber-200" },
  other: { label: "Other", cls: "bg-gray-50 text-gray-700 border-gray-200" },
};

const STATUS_STYLES: Record<string, string> = {
  new: "bg-yellow-100 text-yellow-800 border-yellow-200",
  contacted: "bg-blue-100 text-blue-800 border-blue-200",
  won: "bg-green-100 text-green-800 border-green-200",
  lost: "bg-gray-100 text-gray-700 border-gray-200",
};

function relTime(d: Date | null): string {
  if (!d) return "—";
  const diff = Date.now() - d.getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function formatPhone(p: string): string {
  if (!p) return "";
  if (p.startsWith("+")) return p;
  if (p.startsWith("0")) return `+254${p.slice(1)}`;
  if (p.startsWith("254")) return `+${p}`;
  return p;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [busyId, setBusyId] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "new" | "contacted" | "won" | "lost">("all");

  const load = async () => {
    setLoading(true);
    try {
      const db = getDb();
      const snap = await getDocs(collection(db, "leads"));
      const list: Lead[] = snap.docs.map((d) => {
        const data = d.data();
        return {
          id: d.id,
          type: data.type ?? "other",
          source: data.source ?? "",
          phone: data.phone ?? "",
          email: data.email ?? "",
          label: data.label ?? "",
          status: data.status ?? "new",
          createdAt: data.createdAt?.toDate?.() ?? null,
        };
      });
      list.sort((a, b) => (b.createdAt?.getTime() ?? 0) - (a.createdAt?.getTime() ?? 0));
      setLeads(list);
    } catch (err) {
      console.error(err);
      alert("Could not load leads.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const updateStatus = async (lead: Lead, newStatus: string) => {
    setBusyId(lead.id);
    try {
      const db = getDb();
      await updateDoc(doc(db, "leads", lead.id), {
        status: newStatus,
        updatedAt: serverTimestamp(),
      });
      setLeads((prev) =>
        prev.map((l) => (l.id === lead.id ? { ...l, status: newStatus } : l))
      );
    } catch (err) {
      console.error(err);
      alert("Update failed: " + (err instanceof Error ? err.message : "Unknown"));
    } finally {
      setBusyId(null);
    }
  };

  const handleDelete = async (lead: Lead) => {
    if (!confirm("Delete this lead? This cannot be undone.")) return;
    setBusyId(lead.id);
    try {
      const db = getDb();
      await deleteDoc(doc(db, "leads", lead.id));
      setLeads((prev) => prev.filter((l) => l.id !== lead.id));
    } catch (err) {
      console.error(err);
      alert("Delete failed: " + (err instanceof Error ? err.message : "Unknown"));
    } finally {
      setBusyId(null);
    }
  };

  const counts = {
    all: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    won: leads.filter((l) => l.status === "won").length,
    lost: leads.filter((l) => l.status === "lost").length,
  };

  const typeCounts = {
    call: leads.filter((l) => l.type === "call").length,
    whatsapp: leads.filter((l) => l.type === "whatsapp").length,
    email: leads.filter((l) => l.type === "email").length,
    directions: leads.filter((l) => l.type === "directions").length,
  };

  const filtered = leads.filter((l) => {
    if (filter !== "all" && l.status !== filter) return false;
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return [l.type, l.source, l.phone, l.email, l.label, l.status]
      .join(" ")
      .toLowerCase()
      .includes(q);
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-purple">Leads</h1>
        <p className="text-gray-500 text-sm">
          Every time someone clicks Call, WhatsApp, Email, or Directions — captured here.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <StatCard label="Total" value={counts.all} />
        <StatCard label="Calls" value={typeCounts.call} accent="green" />
        <StatCard label="WhatsApp" value={typeCounts.whatsapp} accent="emerald" />
        <StatCard label="Emails" value={typeCounts.email} accent="blue" />
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        {(["all", "new", "contacted", "won", "lost"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
              filter === f
                ? "bg-purple text-white border-purple"
                : "bg-white text-gray-700 border-gray-200 hover:border-purple"
            }`}
          >
            {f[0].toUpperCase() + f.slice(1)} ({counts[f]})
          </button>
        ))}
        <input
          type="search"
          placeholder="Search…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ml-auto px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm w-full sm:w-56"
        />
      </div>

      {loading ? (
        <p className="text-gray-500 text-sm">Loading…</p>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
          <p className="text-gray-500 text-sm">
            {leads.length === 0
              ? "No leads yet. When visitors click Call or WhatsApp on the public site, they'll appear here."
              : "No leads match this filter."}
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[760px]">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr className="text-left text-xs uppercase tracking-wide text-gray-500">
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">Type</th>
                  <th className="px-4 py-3 font-semibold">From page</th>
                  <th className="px-4 py-3 font-semibold">Contact</th>
                  <th className="px-4 py-3 font-semibold">Button</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">When</th>
                  <th className="px-4 py-3 font-semibold text-right whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((l) => {
                  const typeInfo = TYPE_STYLES[l.type] ?? TYPE_STYLES.other;
                  const statusCls = STATUS_STYLES[l.status] ?? STATUS_STYLES.new;
                  const busy = busyId === l.id;
                  return (
                    <tr
                      key={l.id}
                      className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50"
                    >
                      <td className="px-4 py-3 align-top">
                        <span
                          className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wide ${typeInfo.cls}`}
                        >
                          {typeInfo.label}
                        </span>
                      </td>
                      <td className="px-4 py-3 align-top">
                        <a
                          href={l.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple text-xs font-mono hover:underline"
                        >
                          {l.source || "—"}
                        </a>
                      </td>
                      <td className="px-4 py-3 align-top text-xs">
                        {l.phone && (
                          <a
                            href={`tel:${l.phone}`}
                            className="text-gray-700 hover:text-purple font-mono block"
                          >
                            {formatPhone(l.phone)}
                          </a>
                        )}
                        {l.email && (
                          <a
                            href={`mailto:${l.email}`}
                            className="text-gray-700 hover:text-purple font-mono block"
                          >
                            {l.email}
                          </a>
                        )}
                        {!l.phone && !l.email && l.type === "directions" && (
                          <span className="text-gray-500">Google Maps</span>
                        )}
                        {!l.phone && !l.email && l.type !== "directions" && (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 align-top text-xs text-gray-600 max-w-xs">
                        <span className="line-clamp-2">{l.label || "—"}</span>
                      </td>
                      <td className="px-4 py-3 align-top">
                        <span
                          className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wide ${statusCls}`}
                        >
                          {l.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 align-top text-xs text-gray-500 whitespace-nowrap">
                        {relTime(l.createdAt)}
                      </td>
                      <td className="px-4 py-3 align-top text-right whitespace-nowrap">
                        {l.status === "new" && (
                          <button
                            onClick={() => updateStatus(l, "contacted")}
                            disabled={busy}
                            className="text-blue-600 font-semibold text-xs hover:underline mr-3 disabled:opacity-50"
                          >
                            Mark contacted
                          </button>
                        )}
                        {l.status === "contacted" && (
                          <>
                            <button
                              onClick={() => updateStatus(l, "won")}
                              disabled={busy}
                              className="text-green-700 font-semibold text-xs hover:underline mr-3 disabled:opacity-50"
                            >
                              Won
                            </button>
                            <button
                              onClick={() => updateStatus(l, "lost")}
                              disabled={busy}
                              className="text-orange-600 font-semibold text-xs hover:underline mr-3 disabled:opacity-50"
                            >
                              Lost
                            </button>
                          </>
                        )}
                        {(l.status === "won" || l.status === "lost") && (
                          <button
                            onClick={() => updateStatus(l, "new")}
                            disabled={busy}
                            className="text-gray-500 font-semibold text-xs hover:underline mr-3 disabled:opacity-50"
                          >
                            Reset
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(l)}
                          disabled={busy}
                          className="text-red-600 font-semibold text-xs hover:underline disabled:opacity-50"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent?: "green" | "emerald" | "blue";
}) {
  const accentCls =
    accent === "green"
      ? "text-green-700"
      : accent === "emerald"
      ? "text-emerald-700"
      : accent === "blue"
      ? "text-blue-700"
      : "text-purple";
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4">
      <p className="text-[11px] uppercase tracking-wide text-gray-400 font-semibold">
        {label}
      </p>
      <p className={`text-2xl font-bold mt-1 ${accentCls}`}>{value}</p>
    </div>
  );
}