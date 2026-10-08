"use client";

import { Fragment, useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getDb } from "@/lib/firebase";

type Row = {
  id: string;
  collection: string;
  data: Record<string, any>;
};

const LABELS: Record<string, string> = {
  name: "Name",
  fullName: "Name",
  firstName: "First name",
  lastName: "Last name",
  email: "Email",
  phone: "Phone",
  phoneNumber: "Phone",
  message: "Message",
  subject: "Subject",
  notes: "Notes",
  service: "Service",
  branch: "Branch",
  source: "Source",
  status: "Status",
  createdAt: "Submitted",
  updatedAt: "Updated",
  date: "Date",
  preferredDate: "Preferred date",
  preferredTime: "Preferred time",
};

function labelFor(key: string): string {
  if (LABELS[key]) return LABELS[key];
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}

function formatValue(v: any): string {
  if (v === null || v === undefined || v === "") return "—";
  if (typeof v === "string") return v;
  if (typeof v === "number" || typeof v === "boolean") return String(v);
  if (v?.toDate) {
    try {
      return v.toDate().toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return String(v);
    }
  }
  if (Array.isArray(v)) return v.join(", ");
  if (typeof v === "object") return JSON.stringify(v);
  return String(v);
}

function sortTime(data: Record<string, any>, dateField?: string): number {
  if (dateField && data[dateField]?.toDate) {
    return data[dateField].toDate().getTime();
  }
  for (const k of ["createdAt", "submittedAt", "date", "timestamp"]) {
    if (data[k]?.toDate) return data[k].toDate().getTime();
  }
  return 0;
}

type Props = {
  title: string;
  description?: string;
  collections: string[];
  primaryFields: string[];
  dateField?: string;
  searchable?: string[];
  allowDelete?: boolean;
};

export default function AdminCollectionView({
  title,
  description,
  collections,
  primaryFields,
  dateField = "createdAt",
  searchable,
  allowDelete = true,
}: Props) {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const collectionsKey = collections.join(",");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const db = getDb();
        const all: Row[] = [];
        for (const name of collections) {
          const snap = await getDocs(collection(db, name));
          snap.docs.forEach((d) =>
            all.push({
              id: `${name}::${d.id}`,
              collection: name,
              data: d.data(),
            })
          );
        }
        all.sort((a, b) => sortTime(b.data, dateField) - sortTime(a.data, dateField));
        if (!cancelled) setRows(all);
      } catch (err) {
        console.error(err);
        if (!cancelled)
          setError(err instanceof Error ? err.message : "Failed to load");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [collectionsKey, dateField]);

  const handleDelete = async (row: Row) => {
    if (!confirm("Delete this entry? This cannot be undone.")) return;
    setDeletingId(row.id);
    try {
      const db = getDb();
      const realId = row.id.split("::")[1];
      await deleteDoc(doc(db, row.collection, realId));
      setRows((prev) => prev.filter((r) => r.id !== row.id));
      if (openId === row.id) setOpenId(null);
    } catch (err) {
      console.error(err);
      alert("Delete failed: " + (err instanceof Error ? err.message : "Unknown"));
    } finally {
      setDeletingId(null);
    }
  };

  const filtered = search.trim()
    ? rows.filter((r) => {
        const keys = searchable ?? Object.keys(r.data);
        return keys
          .map((k) => formatValue(r.data[k]))
          .join(" ")
          .toLowerCase()
          .includes(search.trim().toLowerCase());
      })
    : rows;

  return (
    <div>
      <div className="flex items-start justify-between mb-6 gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-purple">{title}</h1>
          <p className="text-gray-500 text-sm">
            {description ?? `${rows.length} ${rows.length === 1 ? "entry" : "entries"}`}
          </p>
        </div>
        <input
          type="search"
          placeholder="Search…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm w-full sm:w-64"
        />
      </div>

      {loading && <p className="text-gray-500 text-sm">Loading…</p>}

      {!loading && error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
          <p className="text-gray-500 text-sm">
            {rows.length === 0 ? "Nothing here yet." : "No matches for that search."}
          </p>
        </div>
      )}

      {!loading && !error && filtered.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr className="text-left text-xs uppercase tracking-wide text-gray-500">
                {primaryFields.map((f) => (
                  <th key={f} className="px-4 py-3 font-semibold">
                    {labelFor(f)}
                  </th>
                ))}
                <th className="px-4 py-3 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => {
                const isOpen = openId === r.id;
                return (
                  <Fragment key={r.id}>
                    <tr
                      className="border-b border-gray-100 hover:bg-gray-50/50 cursor-pointer"
                      onClick={() => setOpenId(isOpen ? null : r.id)}
                    >
                      {primaryFields.map((f) => (
                        <td key={f} className="px-4 py-3 text-gray-700 align-top">
                          <span className="line-clamp-2">{formatValue(r.data[f])}</span>
                        </td>
                      ))}
                      <td className="px-4 py-3 text-right whitespace-nowrap align-top">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenId(isOpen ? null : r.id);
                          }}
                          className="text-purple font-semibold text-xs hover:underline mr-3"
                        >
                          {isOpen ? "Close" : "View"}
                        </button>
                        {allowDelete && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(r);
                            }}
                            disabled={deletingId === r.id}
                            className="text-red-600 font-semibold text-xs hover:underline disabled:opacity-50"
                          >
                            {deletingId === r.id ? "Deleting…" : "Delete"}
                          </button>
                        )}
                      </td>
                    </tr>
                    {isOpen && (
                      <tr className="bg-gray-50 border-b border-gray-100">
                        <td
                          colSpan={primaryFields.length + 1}
                          className="px-4 py-5"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                            {Object.entries(r.data).map(([k, v]) => (
                              <div key={k}>
                                <p className="text-[11px] uppercase tracking-wide text-gray-400 font-semibold mb-0.5">
                                  {labelFor(k)}
                                </p>
                                <p className="text-sm text-gray-700 whitespace-pre-wrap break-words">
                                  {formatValue(v)}
                                </p>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}