"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getDb } from "@/lib/firebase";

type Row = {
  slug: string;
  name: string;
  category: string;
  price: number;
  image: string;
  inStock: boolean;
  active: boolean;
};

export default function AdminShopListPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      const db = getDb();
      const snap = await getDocs(collection(db, "shop_items"));
      const list: Row[] = snap.docs.map((d) => {
        const data = d.data();
        return {
          slug: d.id,
          name: data.name ?? "",
          category: data.category ?? "",
          price: Number(data.price) || 0,
          image: data.image ?? "",
          inStock: data.inStock ?? true,
          active: data.active ?? true,
        };
      });
      list.sort((a, b) => a.name.localeCompare(b.name));
      setRows(list);
    } catch (err) {
      console.error(err);
      alert("Could not load shop items.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (slug: string, name: string) => {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return;
    setDeleting(slug);
    try {
      const db = getDb();
      await deleteDoc(doc(db, "shop_items", slug));
      setRows((prev) => prev.filter((r) => r.slug !== slug));
    } catch (err) {
      console.error(err);
      alert("Delete failed: " + (err instanceof Error ? err.message : "Unknown"));
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-purple">Shop Items</h1>
          <p className="text-gray-500 text-sm">
            {rows.length} {rows.length === 1 ? "item" : "items"} in the Physio Shop
          </p>
        </div>
        <Link
          href="/admin/shop/new"
          className="bg-purple text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-purple-dark transition"
        >
          + New Item
        </Link>
      </div>

      {loading ? (
        <p className="text-gray-500 text-sm">Loading…</p>
      ) : rows.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
          <p className="text-gray-500 text-sm mb-3">No items yet.</p>
          <Link
            href="/admin/shop/new"
            className="text-purple underline text-sm font-semibold"
          >
            Add the first product
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr className="text-left text-xs uppercase tracking-wide text-gray-500">
                  <th className="px-4 py-3 font-semibold w-16"></th>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Category</th>
                  <th className="px-4 py-3 font-semibold">Price</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr
                    key={r.slug}
                    className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50"
                  >
                    <td className="px-4 py-3">
                      {r.image ? (
                        <img
                          src={r.image}
                          alt=""
                          className="w-12 h-12 rounded object-cover bg-gray-100"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded bg-gray-100" />
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-semibold text-purple leading-tight">
                        {r.name}
                      </p>
                      <p className="text-[11px] text-gray-400 font-mono truncate max-w-xs">
                        {r.slug}
                      </p>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{r.category || "—"}</td>
                    <td className="px-4 py-3 text-gray-800 font-semibold">
                      KES {r.price.toLocaleString()}
                    </td>
                    <td className="px-4 py-3">
                      {!r.active ? (
                        <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wide bg-gray-100 text-gray-700 border-gray-200">
                          Hidden
                        </span>
                      ) : r.inStock ? (
                        <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wide bg-green-100 text-green-800 border-green-200">
                          In stock
                        </span>
                      ) : (
                        <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wide bg-red-100 text-red-800 border-red-200">
                          Out of stock
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <Link
                        href={`/admin/shop/${r.slug}`}
                        className="text-purple font-semibold text-xs hover:underline mr-3"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(r.slug, r.name)}
                        disabled={deleting === r.slug}
                        className="text-red-600 font-semibold text-xs hover:underline disabled:opacity-50"
                      >
                        {deleting === r.slug ? "Deleting…" : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
