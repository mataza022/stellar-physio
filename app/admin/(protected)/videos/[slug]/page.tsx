"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { getDb } from "@/lib/firebase";
import VideoEmbed from "@/app/components/VideoEmbed";
import { detectPlatform } from "@/lib/videos";

type FormState = {
  title: string;
  slug: string;
  url: string;
  platform: string;
  active: boolean;
  postedAt: string;
};

function emptyForm(): FormState {
  return {
    title: "",
    slug: "",
    url: "",
    platform: "other",
    active: true,
    postedAt: new Date().toISOString().slice(0, 10),
  };
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function autoSlugFromUrl(url: string, platform: string): string {
  if (platform === "youtube") {
    const m = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    if (m) return `youtube-${m[1]}`;
  }
  if (platform === "instagram") {
    const m = url.match(/instagram\.com\/(?:p|reel|tv)\/([a-zA-Z0-9_-]+)/);
    if (m) return `instagram-${m[1]}`;
  }
  if (platform === "tiktok") {
    const m = url.match(/tiktok\.com\/@[^/]+\/(?:video|photo)\/(\d+)/);
    if (m) return `tiktok-${m[1]}`;
  }
  return `video-${Date.now()}`;
}

export default function AdminVideoEditorPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const isNew = params.slug === "new";

  const [form, setForm] = useState<FormState>(emptyForm());
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [slugTouched, setSlugTouched] = useState(!isNew);

  useEffect(() => {
    if (isNew) return;
    (async () => {
      try {
        const db = getDb();
        const snap = await getDoc(doc(db, "videos", params.slug));
        if (!snap.exists()) {
          setError(`Video "${params.slug}" not found.`);
          setLoading(false);
          return;
        }
        const d = snap.data();
        setForm({
          title: d.title ?? "",
          slug: snap.id,
          url: d.url ?? "",
          platform: d.platform ?? detectPlatform(d.url ?? ""),
          active: d.active ?? true,
          postedAt: d.postedAt ?? "",
        });
      } catch (err) {
        console.error(err);
        setError("Could not load video.");
      } finally {
        setLoading(false);
      }
    })();
  }, [isNew, params.slug]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => {
      const next = { ...f, [key]: value };

      // Auto-detect platform whenever the URL changes
      if (key === "url") {
        const detected = detectPlatform(String(value));
        next.platform = detected;
        if (isNew && !slugTouched) {
          next.slug = autoSlugFromUrl(String(value), detected);
        }
      }
      if (key === "title" && isNew && !slugTouched && String(value).trim()) {
        next.slug = slugify(String(value));
      }
      return next;
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.url.trim()) return setError("Video URL is required.");
    if (!form.slug.trim()) return setError("Slug is required.");
    if (!/^[a-z0-9-]+$/.test(form.slug))
      return setError(
        "Slug may only contain lowercase letters, numbers, and hyphens."
      );
    if (form.platform === "other") {
      const proceed = confirm(
        "We couldn't recognise this URL as YouTube, Instagram, TikTok, or Facebook. It may not render on the public site. Save anyway?"
      );
      if (!proceed) return;
    }

    setSaving(true);
    try {
      const db = getDb();
      const ref = doc(db, "videos", form.slug);

      if (!isNew && params.slug !== form.slug) {
        const existing = await getDoc(ref);
        if (existing.exists()) {
          setError(`A video with slug "${form.slug}" already exists.`);
          setSaving(false);
          return;
        }
        await deleteDoc(doc(db, "videos", params.slug));
      }

      await setDoc(
        ref,
        {
          url: form.url.trim(),
          title: form.title.trim(),
          platform: form.platform,
          active: form.active,
          postedAt: form.postedAt,
          updatedAt: serverTimestamp(),
          ...(isNew ? { createdAt: serverTimestamp() } : {}),
        },
        { merge: true }
      );

      router.push("/admin/videos");
    } catch (err) {
      console.error(err);
      setError(
        "Save failed: " + (err instanceof Error ? err.message : "Unknown")
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (isNew) return;
    if (!confirm(`Delete "${form.title || form.slug}"? This cannot be undone.`))
      return;
    setDeleting(true);
    try {
      const db = getDb();
      await deleteDoc(doc(db, "videos", params.slug));
      router.push("/admin/videos");
    } catch (err) {
      console.error(err);
      setError(
        "Delete failed: " + (err instanceof Error ? err.message : "Unknown")
      );
      setDeleting(false);
    }
  };

  if (loading) return <p className="text-gray-500 text-sm">Loading…</p>;

  return (
    <form onSubmit={handleSave} className="max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <Link
            href="/admin/videos"
            className="text-purple text-xs font-semibold hover:underline"
          >
            ← Back to videos
          </Link>
          <h1 className="text-2xl font-bold text-purple mt-1">
            {isNew ? "New Video" : "Edit Video"}
          </h1>
        </div>
        <div className="flex items-center gap-3">
          {!isNew && (
            <button
              type="button"
              onClick={handleDelete}
              disabled={deleting || saving}
              className="text-red-600 text-sm font-semibold hover:underline disabled:opacity-50"
            >
              {deleting ? "Deleting…" : "Delete"}
            </button>
          )}
          <button
            type="submit"
            disabled={saving || deleting}
            className="bg-purple text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-purple-dark transition disabled:opacity-60"
          >
            {saving ? "Saving…" : isNew ? "Add Video" : "Save Changes"}
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-5 bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4">
          <h2 className="text-sm font-bold text-purple uppercase tracking-wide border-b border-gray-100 pb-2">
            Video
          </h2>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Video URL <span className="text-red-500">*</span>
            </label>
            <p className="text-[11px] text-gray-400 mb-1.5">
              Paste any YouTube, Instagram, TikTok, or Facebook video URL.
            </p>
            <input
              type="url"
              required
              placeholder="https://www.youtube.com/watch?v=..."
              value={form.url}
              onChange={(e) => update("url", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm font-mono"
            />
            {form.url && (
              <div className="mt-2 flex items-center gap-2">
                <span className="text-[11px] text-gray-500">
                  Detected platform:
                </span>
                <span
                  className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wide ${
                    form.platform === "other"
                      ? "bg-amber-50 text-amber-700 border-amber-200"
                      : "bg-green-50 text-green-700 border-green-200"
                  }`}
                >
                  {form.platform}
                </span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Title (optional)
            </label>
            <p className="text-[11px] text-gray-400 mb-1.5">
              Shown as a caption below the video on the blog page.
            </p>
            <input
              type="text"
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              placeholder="e.g. Inside Stellar Physio"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Slug <span className="text-red-500">*</span>
            </label>
            <p className="text-[11px] text-gray-400 mb-1.5">
              Internal ID. Auto-fills from the URL or title.
            </p>
            <input
              type="text"
              value={form.slug}
              onChange={(e) => {
                setSlugTouched(true);
                update("slug", e.target.value);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm font-mono"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Posted on
              </label>
              <input
                type="date"
                value={form.postedAt}
                onChange={(e) => update("postedAt", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm"
              />
            </div>
            <div className="flex items-end">
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={form.active}
                  onChange={(e) => update("active", e.target.checked)}
                  className="w-4 h-4 accent-purple"
                />
                Active (visible on blog page)
              </label>
            </div>
          </div>
        </div>

        {form.url && (
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-sm font-bold text-purple uppercase tracking-wide border-b border-gray-100 pb-2 mb-4">
              Preview
            </h2>
            <VideoEmbed video={{ url: form.url, title: form.title }} />
          </div>
        )}
      </div>
    </form>
  );
}