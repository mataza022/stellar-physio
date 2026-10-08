"use client";

import { useState } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { getDb } from "@/lib/firebase";
import { posts } from "@/lib/posts";

export default function SeedPage() {
  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const append = (line: string) =>
    setLog((prev) => [...prev, line]);

  const seed = async () => {
    setBusy(true);
    setLog([]);
    setDone(false);

    try {
      const db = getDb();
      let count = 0;

      for (const post of posts) {
        const { slug, ...data } = post;
        await setDoc(doc(db, "posts", slug), {
          ...data,
          createdAt: serverTimestamp(),
        });
        count++;
        append(`✓ ${slug}`);
      }

      append(`\nDone. Seeded ${count} posts.`);
      setDone(true);
    } catch (err) {
      console.error(err);
      append(
        `✗ Failed: ${err instanceof Error ? err.message : "Unknown error"}`
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-purple mb-2">Seed Posts</h1>
      <p className="text-gray-500 text-sm mb-6">
        One-time tool. Writes the static posts from <code>lib/posts.ts</code>{" "}
        into the Firestore <code>posts</code> collection, using each post&apos;s
        slug as the document ID. Re-running is safe — it overwrites existing
        docs.
      </p>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-xs text-yellow-900 mb-6">
        <p className="font-semibold mb-1">Delete this page after use.</p>
        <p>
          Once posts are migrated to Firestore, this seed page isn&apos;t needed
          anymore. Delete <code>app/admin/(protected)/seed/</code> when done.
        </p>
      </div>

      <button
        onClick={seed}
        disabled={busy}
        className="bg-purple text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-purple-dark transition disabled:opacity-60"
      >
        {busy ? "Seeding…" : done ? "Re-seed Posts" : "Seed Posts"}
      </button>

      {log.length > 0 && (
        <pre className="mt-6 bg-gray-900 text-green-400 text-xs p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
          {log.join("\n")}
        </pre>
      )}

      {done && (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-900">
          <p className="font-semibold mb-1">Next step</p>
          <p className="text-xs leading-relaxed">
            Open Firebase Console → Firestore → <code>posts</code> collection.
            You should see 4 documents, one per post. If they&apos;re there,
            tell me and we&apos;ll move on to Stage 2.
          </p>
        </div>
      )}
    </div>
  );
}