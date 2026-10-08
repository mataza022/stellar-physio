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

const TYPES = ["Full-time", "Part-time", "Contract", "Internship"] as const;

type FormState = {
  title: string;
  slug: string;
  department: string;
  location: string;
  type: (typeof TYPES)[number];
  description: string;
  responsibilities: string;
  requirements: string;
  salaryRange: string;
  deadline: string;
  postedAt: string;
  status: "open" | "closed";
  applyEmail: string;
};

const emptyForm = (): FormState => ({
  title: "",
  slug: "",
  department: "",
  location: "Nairobi, Kenya",
  type: "Full-time",
  description: "",
  responsibilities: "",
  requirements: "",
  salaryRange: "",
  deadline: "",
  postedAt: new Date().toISOString().slice(0, 10),
  status: "open",
  applyEmail: "hr@stellarphysio.co.ke",
});

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function linesToArray(s: string): string[] {
  return s
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
}

export default function AdminJobEditorPage() {
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
        const snap = await getDoc(doc(db, "jobs", params.slug));
        if (!snap.exists()) {
          setError(`Job "${params.slug}" not found.`);
          setLoading(false);
          return;
        }
        const d = snap.data();
        setForm({
          title: d.title ?? "",
          slug: snap.id,
          department: d.department ?? "",
          location: d.location ?? "",
          type: d.type ?? "Full-time",
          description: d.description ?? "",
          responsibilities: (d.responsibilities ?? []).join("\n"),
          requirements: (d.requirements ?? []).join("\n"),
          salaryRange: d.salaryRange ?? "",
          deadline: d.deadline ?? "",
          postedAt: d.postedAt ?? "",
          status: d.status ?? "open",
          applyEmail: d.applyEmail ?? "hr@stellarphysio.co.ke",
        });
      } catch (err) {
        console.error(err);
        setError("Could not load job.");
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
      return setError("Slug may only contain lowercase letters, numbers, and hyphens.");

    setSaving(true);
    try {
      const db = getDb();
      const ref = doc(db, "jobs", form.slug);

      if (!isNew && params.slug !== form.slug) {
        const existing = await getDoc(ref);
        if (existing.exists()) {
          setError(`A job with slug "${form.slug}" already exists.`);
          setSaving(false);
          return;
        }
        await deleteDoc(doc(db, "jobs", params.slug));
      }

      await setDoc(
        ref,
        {
          title: form.title.trim(),
          department: form.department.trim(),
          location: form.location.trim(),
          type: form.type,
          description: form.description,
          responsibilities: linesToArray(form.responsibilities),
          requirements: linesToArray(form.requirements),
          salaryRange: form.salaryRange.trim(),
          deadline: form.deadline,
          postedAt: form.postedAt,
          status: form.status,
          applyEmail: form.applyEmail.trim() || "hr@stellarphysio.co.ke",
          updatedAt: serverTimestamp(),
          ...(isNew ? { createdAt: serverTimestamp() } : {}),
        },
        { merge: true }
      );

      router.push("/admin/jobs");
    } catch (err) {
      console.error(err);
      setError("Save failed: " + (err instanceof Error ? err.message : "Unknown"));
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
      await deleteDoc(doc(db, "jobs", params.slug));
      router.push("/admin/jobs");
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
            href="/admin/jobs"
            className="text-purple text-xs font-semibold hover:underline"
          >
            ← Back to jobs
          </Link>
          <h1 className="text-2xl font-bold text-purple mt-1">
            {isNew ? "New Job Posting" : "Edit Job Posting"}
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
            {saving ? "Saving…" : isNew ? "Publish Job" : "Save Changes"}
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-5 bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="space-y-6">
        <Card title="Position">
          <Field label="Job title" required>
            <input
              type="text"
              placeholder="e.g. Senior Physiotherapist"
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              className={inputCls}
            />
          </Field>
          <Field label="Slug" required hint="URL path. Auto-fills from title.">
            <input
              type="text"
              value={form.slug}
              onChange={(e) => {
                setSlugTouched(true);
                update("slug", e.target.value);
              }}
              className={`${inputCls} font-mono`}
            />
          </Field>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Department" hint="e.g. Clinical, Admin, Wellness">
              <input
                type="text"
                value={form.department}
                onChange={(e) => update("department", e.target.value)}
                className={inputCls}
              />
            </Field>
            <Field label="Location">
              <input
                type="text"
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
                className={inputCls}
              />
            </Field>
            <Field label="Type">
              <select
                value={form.type}
                onChange={(e) =>
                  update("type", e.target.value as FormState["type"])
                }
                className={`${inputCls} bg-white`}
              >
                {TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Status">
              <select
                value={form.status}
                onChange={(e) =>
                  update("status", e.target.value as FormState["status"])
                }
                className={`${inputCls} bg-white`}
              >
                <option value="open">Open (visible on careers page)</option>
                <option value="closed">Closed (hidden from candidates)</option>
              </select>
            </Field>
          </div>
          <Field
            label="Salary range"
            hint="Optional. e.g. KES 80,000 – 120,000 / month"
          >
            <input
              type="text"
              value={form.salaryRange}
              onChange={(e) => update("salaryRange", e.target.value)}
              className={inputCls}
            />
          </Field>
          <Field
            label="Application deadline"
            hint="Optional. Job will still show after this date but you can close it manually."
          >
            <input
              type="date"
              value={form.deadline}
              onChange={(e) => update("deadline", e.target.value)}
              className={inputCls}
            />
          </Field>
        </Card>

        <Card title="Description">
          <Field label="Role overview" hint="Short intro paragraph about the role.">
            <textarea
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              rows={4}
              className={`${inputCls} resize-y`}
            />
          </Field>
        </Card>

        <Card title="Responsibilities">
          <Field label="Responsibilities" hint="One per line.">
            <textarea
              value={form.responsibilities}
              onChange={(e) => update("responsibilities", e.target.value)}
              rows={6}
              className={`${inputCls} resize-y font-mono text-xs`}
            />
          </Field>
        </Card>

        <Card title="Requirements">
          <Field label="Requirements & qualifications" hint="One per line.">
            <textarea
              value={form.requirements}
              onChange={(e) => update("requirements", e.target.value)}
              rows={6}
              className={`${inputCls} resize-y font-mono text-xs`}
            />
          </Field>
        </Card>

        <Card title="How to Apply">
          <Field label="Application email">
            <input
              type="email"
              value={form.applyEmail}
              onChange={(e) => update("applyEmail", e.target.value)}
              className={inputCls}
            />
          </Field>
          <Field label="Posted on" hint="Date shown on the careers page.">
            <input
              type="date"
              value={form.postedAt}
              onChange={(e) => update("postedAt", e.target.value)}
              className={inputCls}
            />
          </Field>
        </Card>
      </div>
    </form>
  );
}

const inputCls =
  "w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm";

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4">
      <h2 className="text-sm font-bold text-purple uppercase tracking-wide border-b border-gray-100 pb-2">
        {title}
      </h2>
      {children}
    </div>
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