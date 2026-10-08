"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, onAuthChange } from "@/lib/auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // If already signed in, skip login.
  useEffect(() => {
    const unsub = onAuthChange((user) => {
      if (user) router.replace("/admin");
    });
    return () => unsub();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      setSubmitting(true);
      await signIn(email.trim(), password);
      router.replace("/admin");
    } catch (err: unknown) {
      console.error(err);
      const msg = err instanceof Error ? err.message : "";
      if (
        msg.includes("invalid-credential") ||
        msg.includes("wrong-password") ||
        msg.includes("user-not-found") ||
        msg.includes("invalid-email")
      ) {
        setError("Incorrect email or password.");
      } else if (msg.includes("too-many-requests")) {
        setError("Too many attempts. Try again in a few minutes.");
      } else {
        setError("Sign in failed. Check your details and try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-xl font-bold text-purple mb-1">Admin Sign In</h1>
        <p className="text-gray-500 text-xs mb-6">
          Stellar Physio content management
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm"
            />
          </div>

          {error && <p className="text-red-600 text-xs">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-purple text-white py-2.5 rounded-lg font-semibold hover:bg-purple-dark transition text-sm disabled:opacity-60"
          >
            {submitting ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}