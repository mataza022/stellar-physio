"use client";

import { useState } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { getDb } from "@/lib/firebase";
import { services } from "@/lib/services";
import { conditions } from "@/lib/conditions";

type Status = "idle" | "running" | "done" | "error";

export default function SeedPage() {
  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  const append = (line: string) => setLog((prev) => [...prev, line]);

  const seed = async () => {
    setBusy(true);
    setLog([]);
    setStatus("running");

    try {
      const db = getDb();
      let ok = 0;
      let fail = 0;

      append("── Conditions ──");
      for (const c of conditions) {
        try {
          const { slug, ...data } = c;
          await setDoc(doc(db, "conditions", slug), {
            ...data,
            createdAt: serverTimestamp(),
          });
          append(`  ✓ conditions/${slug}`);
          ok++;
        } catch (err) {
          append(
            `  ✗ conditions/${c.slug} → ${
              err instanceof Error ? err.message : "unknown"
            }`
          );
          fail++;
        }
      }

      append("");
      append("── Services ──");
      for (const s of services) {
        try {
          const { slug, ...data } = s;
          await setDoc(doc(db, "services", slug), {
            ...data,
            createdAt: serverTimestamp(),
          });
          append(`  ✓ services/${slug}`);
          ok++;
        } catch (err) {
          append(
            `  ✗ services/${s.slug} → ${
              err instanceof Error ? err.message : "unknown"
            }`
          );
          fail++;
        }
      }

      append("");
      append(`Done. Wrote ${ok}, failed ${fail}.`);
      setStatus(fail === 0 ? "done" : "error");
    } catch (err) {
      console.error(err);
      append(
        `✗ Fatal: ${err instanceof Error ? err.message : "Unknown error"}`
      );
      setStatus("error");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-purple mb-2">
        Seed Services &amp; Conditions
      </h1>
      <p className="text-gray-500 text-sm mb-6">
        One-time tool. Copies the static arrays from <code>lib/services.ts</code>{" "}
        and <code>lib/conditions.ts</code> into the Firestore{" "}
        <code>services</code> and <code>conditions</code> collections, keyed by
        slug. Safe to re-run — it overwrites existing docs.
      </p>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-xs text-yellow-900 mb-6">
        <p className="font-semibold mb-1">Delete this page after use.</p>
        <p>
          Once the data is in Firestore, delete{" "}
          <code>app/admin/(protected)/seed/</code>.
        </p>
      </div>

      <button
        onClick={seed}
        disabled={busy}
        className="bg-purple text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-purple-dark transition disabled:opacity-60"
      >
        {busy ? "Seeding…" : status === "done" ? "Re-seed" : "Seed Now"}
      </button>

      {log.length > 0 && (
        <pre className="mt-6 bg-gray-900 text-green-400 text-xs p-4 rounded-lg overflow-x-auto whitespace-pre-wrap max-h-[500px]">
          {log.join("\n")}
        </pre>
      )}

      {status === "done" && (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-900">
          <p className="font-semibold mb-1">Success</p>
          <p className="text-xs leading-relaxed">
            Open Firebase Console → Firestore → verify the{" "}
            <code>conditions</code> and <code>services</code> collections. You
            should see 7 and 12 documents. Reply &quot;seeded&quot; and
            we&apos;ll continue.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-900">
          <p className="font-semibold mb-1">Some writes failed</p>
          <p className="text-xs leading-relaxed">
            Check the log above for the exact errors. Common cause: Firestore
            rules blocking writes on <code>services</code> or{" "}
            <code>conditions</code>.
          </p>
        </div>
      )}
    </div>
  );
}