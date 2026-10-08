"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getDb } from "@/lib/firebase";
import { formatDate } from "@/lib/posts";

type Row = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
};

export default function AdminPostsListPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      const db = getDb();
      const snap = await getDocs(collection(db, "posts"));
      const list: Row[] = snap.docs.map((d) => {
        const data = d.data();
        return {
          slug: d.id,
          title: data.title ?? "",
          category: data.category ?? "",
          date: data.date ?? "",
          image: data.image ?? "",
        };
      });
      list.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setRows(list);
    } catch (err) {
      console.error(err);
      alert("Could not load posts. Check the console for details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (slug: string, title: string) => {
    if (
      !confirm(
        `Delete "${title}"?\n\nThis cannot be undone. If the post is linked elsewhere, those links will 404.`
      )
    )
      return;
    setDeleting(slug);
    try {
      const db = getDb();
      await deleteDoc(doc(db, "posts", slug));
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
          <h1 className="text-2xl font-bold text-purple">Blog Posts</h1>
          <p className="text-gray-500 text-sm">
            {rows.length} {rows.length === 1 ? "post" : "posts"}
          </p>
        </div>
        <Link
          href="/admin/posts/new"
          className="bg-purple text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-purple-dark transition"
        >
          + New Post
        </Link>
      </div>

      {loading ? (
        <p className="text-gray-500 text-sm">Loading…</p>
      ) : rows.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
          <p className="text-gray-500 text-sm mb-3">No posts yet.</p>
          <Link
            href="/admin/posts/new"
            className="text-purple underline text-sm font-semibold"
          >
            Create the first one
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr className="text-left text-xs uppercase tracking-wide text-gray-500">
                <th className="px-4 py-3 font-semibold w-16"></th>
                <th className="px-4 py-3 font-semibold">Title</th>
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold">Date</th>
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
                      {r.title}
                    </p>
                    <p className="text-[11px] text-gray-400 font-mono truncate max-w-xs">
                      {r.slug}
                    </p>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{r.category}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">
                    {r.date ? formatDate(r.date) : "—"}
                  </td>
                  <td className="px-4 py-3 text-right whitespace-nowrap">
                    <Link
                      href={`/admin/posts/${r.slug}`}
                      className="text-purple font-semibold text-xs hover:underline mr-3"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(r.slug, r.title)}
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
      )}
    </div>
  );
}