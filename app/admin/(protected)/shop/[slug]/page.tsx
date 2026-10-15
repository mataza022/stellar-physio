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

type FormState = {
  name: string;
  slug: string;
  description: string;
  price: string;
  category: string;
  image: string;
  inStock: boolean;
  active: boolean;
};

const emptyForm = (): FormState => ({
  name: "",
  slug: "",
  description: "",
  price: "",
  category: "Supplements",
  image: "",
  inStock: true,
  active: true,
});

const CATEGORIES = [
  "Supplements",
  "Equipment",
  "Home Care",
  "Wellness",
  "Other",
];

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function AdminShopEditorPage() {
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
        const snap = await getDoc(doc(db, "shop_items", params.slug));
        if (!snap.exists()) {
          setError(`Item "${params.slug}" not found.`);
          setLoading(false);
          return;
        }
        const d = snap.data();
        setForm({
          name: d.name ?? "",
          slug: snap.id,
          description: d.description ?? "",
          price: String(d.price ?? ""),
          category: d.category ?? "Supplements",
          image: d.image ?? "",
          inStock: d.inStock ?? true,
          active: d.active ?? true,
        });
      } catch (err) {
        console.error(err);
        setError("Could not load item.");
      } finally {
        setLoading(false);
      }
    })();
  }, [isNew, params.slug]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => {
      const next = { ...f, [key]: value };
      if (key === "name" && isNew && !slugTouched) {
        next.slug = slugify(String(value));
      }
      return next;
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name.trim()) return setError("Name is required.");
    if (!form.slug.trim()) return setError("Slug is required.");
    if (!/^[a-z0-9-]+$/.test(form.slug))
      return setError("Slug may only contain lowercase letters, numbers, and hyphens.");

    const price = parseFloat(form.price);
    if (isNaN(price) || price < 0) return setError("Price must be a positive number.");

    setSaving(true);
    try {
      const db = getDb();
      const ref = doc(db, "shop_items", form.slug);

      if (!isNew && params.slug !== form.slug) {
        const existing = await getDoc(ref);
        if (existing.exists()) {
          setError(`An item with slug "${form.slug}" already exists.`);
          setSaving(false);
          return;
        }
        await deleteDoc(doc(db, "shop_items", params.slug));
      }

      await setDoc(
        ref,
        {
          name: form.name.trim(),
          description: form.description.trim(),
          price,
          category: form.category,
          image: form.image.trim(),
          inStock: form.inStock,
          active: form.active,
          updatedAt: serverTimestamp(),
          ...(isNew ? { createdAt: serverTimestamp() } : {}),
        },
        { merge: true }
      );

      router.push("/admin/shop");
    } catch (err) {
      console.error(err);
      setError("Save failed: " + (err instanceof Error ? err.message : "Unknown"));
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (isNew) return;
    if (!confirm(`Delete "${form.name}"? This cannot be undone.`)) return;
    setDeleting(true);
    try {
      const db = getDb();
      await deleteDoc(doc(db, "shop_items", params.slug));
      router.push("/admin/shop");
    } catch (err) {
      console.error(err);
      setError("Delete failed: " + (err instanceof Error ? err.message : "Unknown"));
      setDeleting(false);
    }
  };

  if (loading) return <p className="text-gray-500 text-sm">Loading…</p>;

  return (
    <form onSubmit={handleSave} className="max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <Link
            href="/admin/shop"
            className="text-purple text-xs font-semibold hover:underline"
          >
            ← Back to shop
          </Link>
          <h1 className="text-2xl font-bold text-purple mt-1">
            {isNew ? "New Shop Item" : "Edit Shop Item"}
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
            {saving ? "Saving…" : isNew ? "Create Item" : "Save Changes"}
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-5 bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-5">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="e.g. Omega-3 Fish Oil"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Slug <span className="text-red-500">*</span>
          </label>
          <p className="text-[11px] text-gray-400 mb-1.5">
            Internal ID. Auto-fills from name.
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

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Description
          </label>
          <textarea
            value={form.description}
            onChange={(e) => update("description", e.target.value)}
            rows={3}
            placeholder="Short description shown on the shop page..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm resize-y"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Price (KES) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              min="0"
              step="1"
              value={form.price}
              onChange={(e) => update("price", e.target.value)}
              placeholder="1500"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Category
            </label>
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
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Image path
          </label>
          <p className="text-[11px] text-gray-400 mb-1.5">
            e.g. /images/omega3.jpeg — file must exist in public/images/
          </p>
          <input
            type="text"
            value={form.image}
            onChange={(e) => update("image", e.target.value)}
            placeholder="/images/your-image.jpeg"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm font-mono"
          />
          {form.image && (
            <img
              src={form.image}
              alt="Preview"
              className="mt-3 max-h-48 rounded border border-gray-200 bg-gray-50"
            />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={form.inStock}
              onChange={(e) => update("inStock", e.target.checked)}
              className="w-4 h-4 accent-purple"
            />
            In stock
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={form.active}
              onChange={(e) => update("active", e.target.checked)}
              className="w-4 h-4 accent-purple"
            />
            Active (visible on shop page)
          </label>
        </div>
      </div>
    </form>
  );
}
