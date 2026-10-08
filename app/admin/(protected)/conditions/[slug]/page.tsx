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

type Video = { url: string; title?: string };

type FormState = {
  title: string;
  slug: string;
  shortDescription: string;
  heroImage: string;
  introTitle: string;
  introText: string;
  introImage: string;
  understandingTitle: string;
  understandingText: string;
  understandingList: string;
  symptomsList: string;
  treatmentTitle: string;
  treatmentList: string;
  whyChooseTitle: string;
  whyChooseList: string;
  whyChooseImage: string;
  ctaTitle: string;
  ctaText: string;
  ctaButtonText: string;
  videos: Video[];
};

const emptyForm = (): FormState => ({
  title: "",
  slug: "",
  shortDescription: "",
  heroImage: "",
  introTitle: "",
  introText: "",
  introImage: "",
  understandingTitle: "",
  understandingText: "",
  understandingList: "",
  symptomsList: "",
  treatmentTitle: "",
  treatmentList: "",
  whyChooseTitle: "",
  whyChooseList: "",
  whyChooseImage: "",
  ctaTitle: "",
  ctaText: "",
  ctaButtonText: "Book Appointment",
  videos: [],
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

export default function AdminConditionEditorPage() {
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
        const snap = await getDoc(doc(db, "conditions", params.slug));
        if (!snap.exists()) {
          setError(`Condition "${params.slug}" not found.`);
          setLoading(false);
          return;
        }
        const d = snap.data();
        setForm({
          title: d.title ?? "",
          slug: snap.id,
          shortDescription: d.shortDescription ?? "",
          heroImage: d.heroImage ?? "",
          introTitle: d.introTitle ?? "",
          introText: d.introText ?? "",
          introImage: d.introImage ?? "",
          understandingTitle: d.understandingTitle ?? "",
          understandingText: d.understandingText ?? "",
          understandingList: (d.understandingList ?? []).join("\n"),
          symptomsList: (d.symptomsList ?? []).join("\n"),
          treatmentTitle: d.treatmentTitle ?? "",
          treatmentList: (d.treatmentList ?? []).join("\n"),
          whyChooseTitle: d.whyChooseTitle ?? "",
          whyChooseList: (d.whyChooseList ?? []).join("\n"),
          whyChooseImage: d.whyChooseImage ?? "",
          ctaTitle: d.ctaTitle ?? "",
          ctaText: d.ctaText ?? "",
          ctaButtonText: d.ctaButtonText ?? "",
          videos: d.videos ?? [],
        });
      } catch (err) {
        console.error(err);
        setError("Could not load condition.");
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
      const ref = doc(db, "conditions", form.slug);

      if (!isNew && params.slug !== form.slug) {
        const existing = await getDoc(ref);
        if (existing.exists()) {
          setError(`A condition with slug "${form.slug}" already exists.`);
          setSaving(false);
          return;
        }
        await deleteDoc(doc(db, "conditions", params.slug));
      }

      const payload: Record<string, any> = {
        title: form.title.trim(),
        shortDescription: form.shortDescription.trim(),
        heroImage: form.heroImage.trim(),
        introTitle: form.introTitle.trim(),
        introText: form.introText,
        introImage: form.introImage.trim(),
        understandingTitle: form.understandingTitle.trim(),
        understandingText: form.understandingText,
        understandingList: linesToArray(form.understandingList),
        symptomsList: linesToArray(form.symptomsList),
        treatmentTitle: form.treatmentTitle.trim(),
        treatmentList: linesToArray(form.treatmentList),
        whyChooseTitle: form.whyChooseTitle.trim(),
        whyChooseList: linesToArray(form.whyChooseList),
        whyChooseImage: form.whyChooseImage.trim(),
        ctaTitle: form.ctaTitle.trim(),
        ctaText: form.ctaText,
        ctaButtonText: form.ctaButtonText.trim(),
        updatedAt: serverTimestamp(),
        ...(isNew ? { createdAt: serverTimestamp() } : {}),
      };
      if (form.videos.length > 0) payload.videos = form.videos;

      await setDoc(ref, payload, { merge: true });
      router.push("/admin/conditions");
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
      await deleteDoc(doc(db, "conditions", params.slug));
      router.push("/admin/conditions");
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
            href="/admin/conditions"
            className="text-purple text-xs font-semibold hover:underline"
          >
            ← Back to conditions
          </Link>
          <h1 className="text-2xl font-bold text-purple mt-1">
            {isNew ? "New Condition" : "Edit Condition"}
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
            {saving ? "Saving…" : isNew ? "Create Condition" : "Save Changes"}
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-5 bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="space-y-6">
        <Card title="Basics">
          <Field label="Title" required>
            <input
              type="text"
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              className={inputCls}
            />
          </Field>
          <Field label="Slug" required hint="URL path. e.g. stroke-rehabilitation">
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
          <Field label="Short description">
            <textarea
              value={form.shortDescription}
              onChange={(e) => update("shortDescription", e.target.value)}
              rows={2}
              className={`${inputCls} resize-none`}
            />
          </Field>
        </Card>

        <Card title="Hero">
          <Field label="Hero image path">
            <input
              type="text"
              value={form.heroImage}
              onChange={(e) => update("heroImage", e.target.value)}
              className={`${inputCls} font-mono`}
            />
          </Field>
          {form.heroImage && (
            <img
              src={form.heroImage}
              alt="Hero preview"
              className="max-h-48 rounded border border-gray-200 bg-gray-50"
            />
          )}
        </Card>

        <Card title="Intro">
          <Field label="Intro title">
            <input
              type="text"
              value={form.introTitle}
              onChange={(e) => update("introTitle", e.target.value)}
              className={inputCls}
            />
          </Field>
          <Field label="Intro text">
            <textarea
              value={form.introText}
              onChange={(e) => update("introText", e.target.value)}
              rows={5}
              className={`${inputCls} resize-y`}
            />
          </Field>
          <Field label="Intro image path">
            <input
              type="text"
              value={form.introImage}
              onChange={(e) => update("introImage", e.target.value)}
              className={`${inputCls} font-mono`}
            />
          </Field>
        </Card>

        <Card title="Understanding">
          <Field label="Understanding title">
            <input
              type="text"
              value={form.understandingTitle}
              onChange={(e) => update("understandingTitle", e.target.value)}
              className={inputCls}
            />
          </Field>
          <Field label="Understanding text">
            <textarea
              value={form.understandingText}
              onChange={(e) => update("understandingText", e.target.value)}
              rows={5}
              className={`${inputCls} resize-y`}
            />
          </Field>
          <Field label="Understanding list" hint="One item per line. Optional.">
            <textarea
              value={form.understandingList}
              onChange={(e) => update("understandingList", e.target.value)}
              rows={5}
              className={`${inputCls} resize-y font-mono text-xs`}
            />
          </Field>
          <Field label="Symptoms list" hint="One item per line. Optional.">
            <textarea
              value={form.symptomsList}
              onChange={(e) => update("symptomsList", e.target.value)}
              rows={5}
              className={`${inputCls} resize-y font-mono text-xs`}
            />
          </Field>
        </Card>

        <Card title="Treatment">
          <Field label="Treatment title">
            <input
              type="text"
              value={form.treatmentTitle}
              onChange={(e) => update("treatmentTitle", e.target.value)}
              className={inputCls}
            />
          </Field>
          <Field label="Treatment list" hint="One item per line.">
            <textarea
              value={form.treatmentList}
              onChange={(e) => update("treatmentList", e.target.value)}
              rows={8}
              className={`${inputCls} resize-y font-mono text-xs`}
            />
          </Field>
        </Card>

        <Card title="Why Choose Us">
          <Field label="Why-choose title">
            <input
              type="text"
              value={form.whyChooseTitle}
              onChange={(e) => update("whyChooseTitle", e.target.value)}
              className={inputCls}
            />
          </Field>
          <Field label="Why-choose list" hint="One item per line.">
            <textarea
              value={form.whyChooseList}
              onChange={(e) => update("whyChooseList", e.target.value)}
              rows={6}
              className={`${inputCls} resize-y font-mono text-xs`}
            />
          </Field>
          <Field label="Why-choose image path">
            <input
              type="text"
              value={form.whyChooseImage}
              onChange={(e) => update("whyChooseImage", e.target.value)}
              className={`${inputCls} font-mono`}
            />
          </Field>
        </Card>

        <Card title="Call to Action">
          <Field label="CTA title">
            <input
              type="text"
              value={form.ctaTitle}
              onChange={(e) => update("ctaTitle", e.target.value)}
              className={inputCls}
            />
          </Field>
          <Field label="CTA text">
            <textarea
              value={form.ctaText}
              onChange={(e) => update("ctaText", e.target.value)}
              rows={3}
              className={`${inputCls} resize-y`}
            />
          </Field>
          <Field label="CTA button text">
            <input
              type="text"
              value={form.ctaButtonText}
              onChange={(e) => update("ctaButtonText", e.target.value)}
              className={inputCls}
            />
          </Field>
        </Card>

        <Card title={`Videos (${form.videos.length})`}>
          {form.videos.map((v, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-3 space-y-2 bg-gray-50"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500">
                  Video {i + 1}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    update(
                      "videos",
                      form.videos.filter((_, idx) => idx !== i)
                    )
                  }
                  className="text-red-600 text-xs font-semibold hover:underline"
                >
                  Remove
                </button>
              </div>
              <input
                type="text"
                placeholder="YouTube URL"
                value={v.url}
                onChange={(e) =>
                  update(
                    "videos",
                    form.videos.map((x, idx) =>
                      idx === i ? { ...x, url: e.target.value } : x
                    )
                  )
                }
                className={`${inputCls} font-mono text-xs bg-white`}
              />
              <input
                type="text"
                placeholder="Title (optional)"
                value={v.title ?? ""}
                onChange={(e) =>
                  update(
                    "videos",
                    form.videos.map((x, idx) =>
                      idx === i ? { ...x, title: e.target.value } : x
                    )
                  )
                }
                className={`${inputCls} bg-white`}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => update("videos", [...form.videos, { url: "", title: "" }])}
            className="text-purple text-xs font-semibold hover:underline"
          >
            + Add Video
          </button>
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