"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getDb } from "@/lib/firebase";
import { formatDate } from "@/lib/posts";
import { detectPlatform, getVideoThumbnail } from "@/lib/videos";

type Row = {
  slug: string;
  url: string;
  title: string;
  platform: string;
  active: boolean;
  postedAt: string;
};

const PLATFORM_STYLES: Record<string, string> = {
  youtube: "bg-red-50 text-red-700 border-red-200",
  instagram: "bg-pink-50 text-pink-700 border-pink-200",
  tiktok: "bg-gray-100 text-gray-800 border-gray-300",
  facebook: "bg-blue-50 text-blue-700 border-blue-200",
  other: "bg-gray-50 text-gray-700 border-gray-200",
};

export default function AdminVideosListPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      const db = getDb();
      const snap = await getDocs(collection(db, "videos"));
      const list: Row[] = snap.docs.map((d) => {
        const data = d.data();
        return {
          slug: d.id,
          url: data.url ?? "",
          title: data.title ?? "",
          platform: data.platform ?? detectPlatform(data.url ?? ""),
          active: data.active ?? true,
          postedAt: data.postedAt ?? "",
        };
      });
      list.sort(
        (a, b) =>
          new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
      );
      setRows(list);
    } catch (err) {
      console.error(err);
      alert("Could not load videos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (slug: string, title: string) => {
    if (!confirm(`Delete "${title || slug}"? This cannot be undone.`)) return;
    setDeleting(slug);
    try {
      const db = getDb();
      await deleteDoc(doc(db, "videos", slug));
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
          <h1 className="text-2xl font-bold text-purple">Videos</h1>
          <p className="text-gray-500 text-sm">
            {rows.length} {rows.length === 1 ? "video" : "videos"} · shown on
            the blog page
          </p>
        </div>
        <Link
          href="/admin/videos/new"
          className="bg-purple text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-purple-dark transition"
        >
          + New Video
        </Link>
      </div>

      {loading ? (
        <p className="text-gray-500 text-sm">Loading…</p>
      ) : rows.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
          <p className="text-gray-500 text-sm mb-3">No videos yet.</p>
          <Link
            href="/admin/videos/new"
            className="text-purple underline text-sm font-semibold"
          >
            Add the first one
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr className="text-left text-xs uppercase tracking-wide text-gray-500">
                  <th className="px-4 py-3 font-semibold w-16"></th>
                  <th className="px-4 py-3 font-semibold">Title</th>
                  <th className="px-4 py-3 font-semibold">Platform</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Posted</th>
                  <th className="px-4 py-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => {
                  const thumb = getVideoThumbnail(r.url);
                  const platformCls =
                    PLATFORM_STYLES[r.platform] ?? PLATFORM_STYLES.other;
                  return (
                    <tr
                      key={r.slug}
                      className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50"
                    >
                      <td className="px-4 py-3">
                        {thumb ? (
                          <img
                            src={thumb}
                            alt=""
                            className="w-16 h-12 rounded object-cover bg-gray-100"
                          />
                        ) : (
                          <div className="w-16 h-12 rounded bg-gray-100 flex items-center justify-center text-[10px] text-gray-400 uppercase">
                            {r.platform}
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <p className="font-semibold text-purple leading-tight">
                          {r.title || "(no title)"}
                        </p>
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-gray-400 font-mono truncate max-w-xs block hover:text-purple"
                        >
                          {r.url}
                        </a>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wide ${platformCls}`}
                        >
                          {r.platform}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wide ${
                            r.active
                              ? "bg-green-100 text-green-800 border-green-200"
                              : "bg-gray-100 text-gray-700 border-gray-200"
                          }`}
                        >
                          {r.active ? "Active" : "Hidden"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-xs">
                        {r.postedAt ? formatDate(r.postedAt) : "—"}
                      </td>
                      <td className="px-4 py-3 text-right whitespace-nowrap">
                        <Link
                          href={`/admin/videos/${r.slug}`}
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