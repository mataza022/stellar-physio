"use client";

import { Fragment, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { getDb } from "@/lib/firebase";

type Row = {
  id: string;
  realId: string;
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
  branchSlug: "Branch slug",
  location: "Location",
  source: "Source",
  status: "Status",
  details: "Details",
  customServiceDescription: "Custom service",
  serviceIsCustom: "Custom service?",
  wasPreselected: "Was preselected",
  isHomeBased: "Home based?",
  time: "Time",
  timeReadable: "Time",
  date: "Booking date",
  dateReadable: "Booking date",
  preferredDate: "Booking date",
  appointmentDate: "Booking date",
  selectedDate: "Booking date",
  bookingDate: "Booking date",
  submitted: "Submitted",
  createdAt: "Submitted",
  updatedAt: "Updated",
  approvedAt: "Approved",
  cancelledAt: "Cancelled",
  postSlug: "Post",
  text: "Comment",
};

function labelFor(key: string): string {
  if (LABELS[key]) return LABELS[key];
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}

const COLLECTION_LABELS: Record<string, string> = {
  contact: "Contact",
  branch_messages: "Branch",
};

const COLLECTION_STYLES: Record<string, string> = {
  contact: "bg-blue-50 text-blue-700 border-blue-200",
  branch_messages: "bg-purple-50 text-purple-700 border-purple-200",
};

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
  for (const k of ["submitted", "createdAt", "date", "timestamp"]) {
    if (data[k]?.toDate) return data[k].toDate().getTime();
  }
  return 0;
}

function StatusBadge({ status }: { status: string }) {
  const s = (status || "pending").toLowerCase();
  const styles: Record<string, string> = {
    approved: "bg-green-100 text-green-800 border-green-200",
    pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
    cancelled: "bg-red-100 text-red-800 border-red-200",
    new: "bg-blue-100 text-blue-800 border-blue-200",
  };
  const cls = styles[s] ?? "bg-gray-100 text-gray-700 border-gray-200";
  return (
    <span
      className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wide ${cls}`}
    >
      {s}
    </span>
  );
}

function SourceBadge({ collectionName }: { collectionName: string }) {
  const label = COLLECTION_LABELS[collectionName] ?? collectionName;
  const cls =
    COLLECTION_STYLES[collectionName] ??
    "bg-gray-50 text-gray-700 border-gray-200";
  return (
    <span
      className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wide ${cls}`}
    >
      {label}
    </span>
  );
}

type Props = {
  title: string;
  description?: string;
  collections: string[];
  primaryFields: string[];
  dateField?: string;
  searchable?: string[];
  allowDelete?: boolean;
  statusField?: string;
};

export default function AdminCollectionView({
  title,
  description,
  collections,
  primaryFields,
  dateField = "createdAt",
  searchable,
  allowDelete = true,
  statusField,
}: Props) {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  const collectionsKey = collections.join(",");
  const showSource = collections.length > 1;

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
              realId: d.id,
              collection: name,
              data: d.data(),
            })
          );
        }
        all.sort(
          (a, b) => sortTime(b.data, dateField) - sortTime(a.data, dateField)
        );
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

  const updateStatus = async (
    row: Row,
    newStatus: "approved" | "cancelled" | "pending"
  ) => {
    if (!statusField) return;
    const verb =
      newStatus === "approved"
        ? "Approve"
        : newStatus === "cancelled"
        ? "Cancel"
        : "Reset";
    if (!confirm(`${verb} this entry?`)) return;
    setBusyId(row.id);
    try {
      const db = getDb();
      const updates: Record<string, any> = {
        [statusField]: newStatus,
        updatedAt: serverTimestamp(),
      };
      if (newStatus === "approved") updates.approvedAt = serverTimestamp();
      if (newStatus === "cancelled") updates.cancelledAt = serverTimestamp();

      await updateDoc(doc(db, row.collection, row.realId), updates);
      setRows((prev) =>
        prev.map((r) =>
          r.id === row.id ? { ...r, data: { ...r.data, ...updates } } : r
        )
      );
    } catch (err) {
      console.error(err);
      alert(
        "Update failed: " + (err instanceof Error ? err.message : "Unknown")
      );
    } finally {
      setBusyId(null);
    }
  };

  const handleDelete = async (row: Row) => {
    if (!confirm("Delete this entry? This cannot be undone.")) return;
    setBusyId(row.id);
    try {
      const db = getDb();
      await deleteDoc(doc(db, row.collection, row.realId));
      setRows((prev) => prev.filter((r) => r.id !== row.id));
      if (openId === row.id) setOpenId(null);
    } catch (err) {
      console.error(err);
      alert(
        "Delete failed: " + (err instanceof Error ? err.message : "Unknown")
      );
    } finally {
      setBusyId(null);
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

  const extraCols = (statusField ? 1 : 0) + (showSource ? 1 : 0);

  return (
    <div>
      <div className="flex items-start justify-between mb-6 gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-purple">{title}</h1>
          <p className="text-gray-500 text-sm">
            {description ??
              `${rows.length} ${rows.length === 1 ? "entry" : "entries"}`}
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
            {rows.length === 0
              ? "Nothing here yet."
              : "No matches for that search."}
          </p>
        </div>
      )}

      {!loading && !error && filtered.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr className="text-left text-xs uppercase tracking-wide text-gray-500">
                  {statusField && (
                    <th className="px-4 py-3 font-semibold w-24 whitespace-nowrap">
                      Status
                    </th>
                  )}
                  {showSource && (
                    <th className="px-4 py-3 font-semibold w-24 whitespace-nowrap">
                      Source
                    </th>
                  )}
                  {primaryFields.map((f) => (
                    <th
                      key={f}
                      className="px-4 py-3 font-semibold whitespace-nowrap"
                    >
                      {labelFor(f)}
                    </th>
                  ))}
                  <th className="px-4 py-3 font-semibold text-right whitespace-nowrap">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r) => {
                  const isOpen = openId === r.id;
                  const busy = busyId === r.id;
                  const status = (r.data[statusField ?? ""] ??
                    "pending") as string;
                  return (
                    <Fragment key={r.id}>
                      <tr
                        className="border-b border-gray-100 hover:bg-gray-50/50 cursor-pointer"
                        onClick={() => setOpenId(isOpen ? null : r.id)}
                      >
                        {statusField && (
                          <td className="px-4 py-3 align-top whitespace-nowrap">
                            <StatusBadge status={status} />
                          </td>
                        )}
                        {showSource && (
                          <td className="px-4 py-3 align-top whitespace-nowrap">
                            <SourceBadge collectionName={r.collection} />
                          </td>
                        )}
                        {primaryFields.map((f) => (
                          <td
                            key={f}
                            className="px-4 py-3 text-gray-700 align-top"
                          >
                            <span className="line-clamp-2">
                              {formatValue(r.data[f])}
                            </span>
                          </td>
                        ))}
                        <td className="px-4 py-3 text-right whitespace-nowrap align-top">
                          {statusField && status !== "approved" && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                updateStatus(r, "approved");
                              }}
                              disabled={busy}
                              className="text-green-700 font-semibold text-xs hover:underline mr-3 disabled:opacity-50"
                            >
                              {busy ? "…" : "Approve"}
                            </button>
                          )}
                          {statusField && status !== "cancelled" && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                updateStatus(r, "cancelled");
                              }}
                              disabled={busy}
                              className="text-orange-600 font-semibold text-xs hover:underline mr-3 disabled:opacity-50"
                            >
                              {busy ? "…" : "Cancel"}
                            </button>
                          )}
                          {statusField && status !== "pending" && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                updateStatus(r, "pending");
                              }}
                              disabled={busy}
                              className="text-gray-500 font-semibold text-xs hover:underline mr-3 disabled:opacity-50"
                            >
                              {busy ? "…" : "Reset"}
                            </button>
                          )}
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
                              disabled={busy}
                              className="text-red-600 font-semibold text-xs hover:underline disabled:opacity-50"
                            >
                              Delete
                            </button>
                          )}
                        </td>
                      </tr>
                      {isOpen && (
                        <tr className="bg-gray-50 border-b border-gray-100">
                          <td
                            colSpan={primaryFields.length + extraCols + 1}
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
        </div>
      )}
    </div>
  );
}