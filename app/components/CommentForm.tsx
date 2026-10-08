"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase"; // ← match your existing path

export default function CommentForm({ postSlug }: { postSlug: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (!name.trim() || !text.trim()) {
      setError("Please add your name and a comment.");
      return;
    }

    try {
      setSubmitting(true);
      await addDoc(collection(db, "comments"), {
        postSlug,
        name: name.trim(),
        email: email.trim(),
        text: text.trim(),
        createdAt: serverTimestamp(),
      });
      setName("");
      setEmail("");
      setText("");
      setMessage("Thanks — your comment has been submitted.");
    } catch (err) {
      console.error(err);
      setError("Could not post your comment. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
      <h3 className="text-xl font-bold text-purple mb-4">Leave a Comment</h3>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Your Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm bg-white"
          />
          <input
            type="email"
            placeholder="Your Email (not published)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm bg-white"
          />
        </div>
        <textarea
          placeholder="Write Your Comment *"
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple resize-none text-sm bg-white"
        ></textarea>

        {error && <p className="text-red-600 text-xs">{error}</p>}
        {message && <p className="text-green-600 text-xs">{message}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="bg-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-dark transition text-sm disabled:opacity-60"
        >
          {submitting ? "Posting…" : "Post Comment →"}
        </button>
      </form>
    </div>
  );
}