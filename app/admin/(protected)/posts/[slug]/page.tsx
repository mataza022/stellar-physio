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

const CATEGORIES = [
  "Health & Wellness",
  "Sports Injury",
  "Therapy",
  "Mental Health",
  "Nutrition",
];

type FormState = {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  image: string;
  category: string;
  tags: string;
  relatedServices: string;
  date: string;
  views: number;
};

const emptyForm = (): FormState => ({
  title: "",
  slug: "",
  excerpt: "",
  body: "",
  image: "",
  category: CATEGORIES[0],
  tags: "",
  relatedServices: "",
  date: new Date().toISOString().slice(0, 10),
  views: 0,
});

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function AdminPostEditorPage() {
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
        const snap = await getDoc(doc(db, "posts", params.slug));
        if (!snap.exists()) {
          setError(`Post "${params.slug}" not found.`);
          setLoading(false);
          return;
        }
        const data = snap.data();
        setForm({
          title: data.title ?? "",
          slug: snap.id,
          excerpt: data.excerpt ?? "",
          body: data.body ?? "",
          image: data.image ?? "",
          category: data.category ?? CATEGORIES[0],
          tags: (data.tags ?? []).join(", "),
          relatedServices: (data.relatedServices ?? []).join(", "),
          date: data.date ?? "",
          views: data.views ?? 0,
        });
      } catch (err) {
        console.error(err);
        setError("Could not load post.");
      } finally {
        setLoading(false);
      }
    })();
  }, [isNew, params.slug]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => {
      const next = { ...f, [key]: value };
      if (key === "title" && isNew && !slugTouched) {
        next.slug = slugify(String(value));
      }
      return next;
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.title.trim()) return setError("Title is required.");
    if (!form.slug.trim()) return setError("Slug is required.");
    if (!/^[a-z0-9-]+$/.test(form.slug))
      return setError(
        "Slug may only contain lowercase letters, numbers, and hyphens."
      );

    setSaving(true);
    try {
      const db = getDb();
      const ref = doc(db, "posts", form.slug);

      if (!isNew && params.slug !== form.slug) {
        const oldSnap = await getDoc(ref);
        if (oldSnap.exists()) {
          setError(`A post with slug "${form.slug}" already exists.`);
          setSaving(false);
          return;
        }
        await deleteDoc(doc(db, "posts", params.slug));
      }

      await setDoc(
        ref,
        {
          title: form.title.trim(),
          excerpt: form.excerpt.trim(),
          body: form.body,
          image: form.image.trim(),
          category: form.category,
          tags: form.tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean),
          relatedServices: form.relatedServices
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean),
          date: form.date,
          views: Number(form.views) || 0,
          updatedAt: serverTimestamp(),
          ...(isNew ? { createdAt: serverTimestamp() } : {}),
        },
        { merge: true }
      );

      router.push("/admin/posts");
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
    if (!confirm(`Delete "${form.title}"? This cannot be undone.`)) return;
    setDeleting(true);
    try {
      const db = getDb();
      await deleteDoc(doc(db, "posts", params.slug));
      router.push("/admin/posts");
    } catch (err) {
      console.error(err);
      setError(
        "Delete failed: " + (err instanceof Error ? err.message : "Unknown")
      );
      setDeleting(false);
    }
  };

  if (loading) {
    return <p className="text-gray-500 text-sm">Loading…</p>;
  }

  return (
    <form onSubmit={handleSave} className="max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <Link
            href="/admin/posts"
            className="text-purple text-xs font-semibold hover:underline"
          >
            ← Back to posts
          </Link>
          <h1 className="text-2xl font-bold text-purple mt-1">
            {isNew ? "New Post" : "Edit Post"}
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
            {saving ? "Saving…" : isNew ? "Create Post" : "Save Changes"}
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-5 bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-5">
        <Field label="Title" required>
          <input
            type="text"
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm"
          />
        </Field>

        <Field
          label="Slug"
          required
          hint="URL-friendly ID. Lowercase letters, numbers, hyphens only."
        >
          <input
            type="text"
            value={form.slug}
            onChange={(e) => {
              setSlugTouched(true);
              update("slug", e.target.value);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm font-mono"
          />
        </Field>

        <Field label="Excerpt" hint="Short summary shown on cards and search results.">
          <textarea
            value={form.excerpt}
            onChange={(e) => update("excerpt", e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm resize-none"
          />
        </Field>

        <Field
          label="Body"
          hint="Markdown-ish: ### for headings, - for bullets, blank line between paragraphs."
        >
          <textarea
            value={form.body}
            onChange={(e) => update("body", e.target.value)}
            rows={20}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm font-mono resize-y"
          />
        </Field>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field
            label="Image path"
            hint="e.g. /images/heelpain-tips.jpeg — file must exist in public/images/"
          >
            <input
              type="text"
              value={form.image}
              onChange={(e) => update("image", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm font-mono"
            />
          </Field>

          <Field label="Category">
            <select
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm bg-white"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Date">
            <input
              type="date"
              value={form.date}
              onChange={(e) => update("date", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm"
            />
          </Field>

          <Field label="Views" hint="Read-only counter — safe to leave alone.">
            <input
              type="number"
              value={form.views}
              onChange={(e) => update("views", Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm"
            />
          </Field>
        </div>

        {form.image && (
          <div>
            <p className="text-xs font-semibold text-gray-700 mb-2">
              Image preview
            </p>
            <img
              src={form.image}
              alt="preview"
              className="max-h-48 rounded border border-gray-200 bg-gray-50"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
              onLoad={(e) => {
                (e.target as HTMLImageElement).style.display = "block";
              }}
            />
          </div>
        )}

        <Field
          label="Tags"
          hint="Comma-separated. e.g. Heel Pain, Plantar Fasciitis, Physiotherapy"
        >
          <input
            type="text"
            value={form.tags}
            onChange={(e) => update("tags", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm"
          />
        </Field>

        <Field
          label="Related services"
          hint="Comma-separated service paths. e.g. /services/physiotherapy, /services/reflexology"
        >
          <input
            type="text"
            value={form.relatedServices}
            onChange={(e) => update("relatedServices", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm font-mono"
          />
        </Field>
      </div>
    </form>
  );
}

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {hint && <p className="text-[11px] text-gray-400 mb-1.5">{hint}</p>}
      {children}
    </div>
  );
}