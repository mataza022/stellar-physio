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
type Faq = { question: string; answer: string };

type FormState = {
  title: string;
  slug: string;
  shortDescription: string;
  heroImage: string;
  heroImageMobile: string;
  introTitle: string;
  introText: string;
  introImage: string;
  offeringsTitle: string;
  offeringsList: string;
  offeringsImage: string;
  whyChooseTitle: string;
  whyChooseList: string;
  pricingTitle: string;
  pricingText: string;
  ctaTitle: string;
  ctaText: string;
  ctaButtonText: string;
  faqs: Faq[];
  videos: Video[];
};

const emptyForm = (): FormState => ({
  title: "",
  slug: "",
  shortDescription: "",
  heroImage: "",
  heroImageMobile: "",
  introTitle: "",
  introText: "",
  introImage: "",
  offeringsTitle: "",
  offeringsList: "",
  offeringsImage: "",
  whyChooseTitle: "",
  whyChooseList: "",
  pricingTitle: "",
  pricingText: "",
  ctaTitle: "",
  ctaText: "",
  ctaButtonText: "Book Appointment Today!",
  faqs: [],
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

export default function AdminServiceEditorPage() {
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
        const snap = await getDoc(doc(db, "services", params.slug));
        if (!snap.exists()) {
          setError(`Service "${params.slug}" not found.`);
          setLoading(false);
          return;
        }
        const d = snap.data();
        setForm({
          title: d.title ?? "",
          slug: snap.id,
          shortDescription: d.shortDescription ?? "",
          heroImage: d.heroImage ?? "",
          heroImageMobile: d.heroImageMobile ?? "",
          introTitle: d.introTitle ?? "",
          introText: d.introText ?? "",
          introImage: d.introImage ?? "",
          offeringsTitle: d.offeringsTitle ?? "",
          offeringsList: (d.offeringsList ?? []).join("\n"),
          offeringsImage: d.offeringsImage ?? "",
          whyChooseTitle: d.whyChooseTitle ?? "",
          whyChooseList: (d.whyChooseList ?? []).join("\n"),
          pricingTitle: d.pricingTitle ?? "",
          pricingText: d.pricingText ?? "",
          ctaTitle: d.ctaTitle ?? "",
          ctaText: d.ctaText ?? "",
          ctaButtonText: d.ctaButtonText ?? "",
          faqs: d.faqs ?? [],
          videos: d.videos ?? [],
        });
      } catch (err) {
        console.error(err);
        setError("Could not load service.");
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
      const ref = doc(db, "services", form.slug);

      if (!isNew && params.slug !== form.slug) {
        const existing = await getDoc(ref);
        if (existing.exists()) {
          setError(`A service with slug "${form.slug}" already exists.`);
          setSaving(false);
          return;
        }
        await deleteDoc(doc(db, "services", params.slug));
      }

      const payload: Record<string, any> = {
        title: form.title.trim(),
        shortDescription: form.shortDescription.trim(),
        heroImage: form.heroImage.trim(),
        introTitle: form.introTitle.trim(),
        introText: form.introText,
        introImage: form.introImage.trim(),
        offeringsTitle: form.offeringsTitle.trim(),
        offeringsList: linesToArray(form.offeringsList),
        offeringsImage: form.offeringsImage.trim(),
        whyChooseTitle: form.whyChooseTitle.trim(),
        whyChooseList: linesToArray(form.whyChooseList),
        pricingTitle: form.pricingTitle.trim(),
        pricingText: form.pricingText,
        ctaTitle: form.ctaTitle.trim(),
        ctaText: form.ctaText,
        ctaButtonText: form.ctaButtonText.trim(),
        updatedAt: serverTimestamp(),
        ...(isNew ? { createdAt: serverTimestamp() } : {}),
      };
      if (form.heroImageMobile.trim())
        payload.heroImageMobile = form.heroImageMobile.trim();
      if (form.faqs.length > 0) payload.faqs = form.faqs;
      if (form.videos.length > 0) payload.videos = form.videos;

      await setDoc(ref, payload, { merge: true });
      router.push("/admin/services");
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
      await deleteDoc(doc(db, "services", params.slug));
      router.push("/admin/services");
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
            href="/admin/services"
            className="text-purple text-xs font-semibold hover:underline"
          >
            ← Back to services
          </Link>
          <h1 className="text-2xl font-bold text-purple mt-1">
            {isNew ? "New Service" : "Edit Service"}
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
            {saving ? "Saving…" : isNew ? "Create Service" : "Save Changes"}
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
          <Field label="Slug" required hint="URL path. e.g. physiotherapy">
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
          <Field label="Short description" hint="One-liner for cards and listings.">
            <textarea
              value={form.shortDescription}
              onChange={(e) => update("shortDescription", e.target.value)}
              rows={2}
              className={`${inputCls} resize-none`}
            />
          </Field>
        </Card>

        <Card title="Hero">
          <Field label="Hero image path" hint="e.g. /images/hero2.JPG">
            <input
              type="text"
              value={form.heroImage}
              onChange={(e) => update("heroImage", e.target.value)}
              className={`${inputCls} font-mono`}
            />
          </Field>
          <Field label="Mobile hero image path" hint="Optional. Falls back to desktop image.">
            <input
              type="text"
              value={form.heroImageMobile}
              onChange={(e) => update("heroImageMobile", e.target.value)}
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

        <Card title="Offerings">
          <Field label="Offerings section title">
            <input
              type="text"
              value={form.offeringsTitle}
              onChange={(e) => update("offeringsTitle", e.target.value)}
              className={inputCls}
            />
          </Field>
          <Field label="Offerings list" hint="One item per line.">
            <textarea
              value={form.offeringsList}
              onChange={(e) => update("offeringsList", e.target.value)}
              rows={8}
              className={`${inputCls} resize-y font-mono text-xs`}
            />
          </Field>
          <Field label="Offerings image path">
            <input
              type="text"
              value={form.offeringsImage}
              onChange={(e) => update("offeringsImage", e.target.value)}
              className={`${inputCls} font-mono`}
            />
          </Field>
        </Card>

        <Card title="Why Choose Us">
          <Field label="Why-choose section title">
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
        </Card>

        <Card title="Pricing / Benefits">
          <Field label="Pricing title">
            <input
              type="text"
              value={form.pricingTitle}
              onChange={(e) => update("pricingTitle", e.target.value)}
              className={inputCls}
            />
          </Field>
          <Field label="Pricing text">
            <textarea
              value={form.pricingText}
              onChange={(e) => update("pricingText", e.target.value)}
              rows={5}
              className={`${inputCls} resize-y`}
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

        <Card title={`FAQs (${form.faqs.length})`}>
          {form.faqs.map((f, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-3 space-y-2 bg-gray-50"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500">
                  FAQ {i + 1}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    update(
                      "faqs",
                      form.faqs.filter((_, idx) => idx !== i)
                    )
                  }
                  className="text-red-600 text-xs font-semibold hover:underline"
                >
                  Remove
                </button>
              </div>
              <input
                type="text"
                placeholder="Question"
                value={f.question}
                onChange={(e) =>
                  update(
                    "faqs",
                    form.faqs.map((x, idx) =>
                      idx === i ? { ...x, question: e.target.value } : x
                    )
                  )
                }
                className={`${inputCls} bg-white`}
              />
              <textarea
                placeholder="Answer"
                rows={3}
                value={f.answer}
                onChange={(e) =>
                  update(
                    "faqs",
                    form.faqs.map((x, idx) =>
                      idx === i ? { ...x, answer: e.target.value } : x
                    )
                  )
                }
                className={`${inputCls} resize-y bg-white`}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => update("faqs", [...form.faqs, { question: "", answer: "" }])}
            className="text-purple text-xs font-semibold hover:underline"
          >
            + Add FAQ
          </button>
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