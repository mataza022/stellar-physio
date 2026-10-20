"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
import { getDb } from "@/lib/firebase";

type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
};

const CATEGORIES = [
  "Appointments & Visits",
  "Pricing",
  "Insurance & Billing",
  "Services & Care",
  "Clinic Hours & Locations",
  "Homecare",
];

export default function AdminFAQsPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<FAQ> | null>(null);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    setLoading(true);
    const db = getDb();
    const snap = await getDocs(collection(db, "faqs"));
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() } as FAQ));
    list.sort((a, b) => a.category.localeCompare(b.category) || a.order - b.order);
    setFaqs(list);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing?.question || !editing?.answer || !editing?.category) return;
    setSaving(true);
    
    const db = getDb();
    const id = editing.id || editing.question.toLowerCase().replace(/[^a-z0-9]/g, "-").slice(0, 50);
    
    await setDoc(doc(db, "faqs", id), {
      question: editing.question,
      answer: editing.answer,
      category: editing.category,
      order: editing.order || 99,
    }, { merge: true });

    setEditing(null);
    setSaving(false);
    load();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this FAQ?")) return;
    const db = getDb();
    await deleteDoc(doc(db, "faqs", id));
    load();
  };

  return (
    <div className="max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-purple">Manage FAQs</h1>
        <button onClick={() => setEditing({ category: CATEGORIES[0], order: 99 })} className="bg-purple text-white px-4 py-2 rounded-lg text-sm font-semibold">
          + Add FAQ
        </button>
      </div>

      {editing && (
        <form onSubmit={handleSave} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8 space-y-4">
          <h2 className="font-bold text-lg">{editing.id ? "Edit FAQ" : "New FAQ"}</h2>
          <div>
            <label className="block text-xs font-semibold mb-1">Category</label>
            <select value={editing.category} onChange={e => setEditing({...editing, category: e.target.value})} className="w-full px-3 py-2 border rounded-lg text-sm bg-white">
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Question</label>
            <input type="text" value={editing.question || ""} onChange={e => setEditing({...editing, question: e.target.value})} className="w-full px-3 py-2 border rounded-lg text-sm" required />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Answer</label>
            <textarea value={editing.answer || ""} onChange={e => setEditing({...editing, answer: e.target.value})} rows={4} className="w-full px-3 py-2 border rounded-lg text-sm resize-y" required />
          </div>
          <div className="flex gap-3">
            <button type="submit" disabled={saving} className="bg-green text-white px-4 py-2 rounded-lg text-sm font-semibold">{saving ? "Saving..." : "Save FAQ"}</button>
            <button type="button" onClick={() => setEditing(null)} className="text-gray-500 text-sm font-semibold">Cancel</button>
          </div>
        </form>
      )}

      {loading ? <p className="text-sm text-gray-500">Loading...</p> : (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr className="text-left text-xs uppercase text-gray-500">
                <th className="px-4 py-3">Question</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {faqs.map(f => (
                <tr key={f.id} className="border-b last:border-0 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-purple">{f.question}</td>
                  <td className="px-4 py-3 text-gray-500">{f.category}</td>
                  <td className="px-4 py-3 text-right">
                    <button onClick={() => setEditing(f)} className="text-purple text-xs font-semibold hover:underline mr-3">Edit</button>
                    <button onClick={() => handleDelete(f.id)} className="text-red-600 text-xs font-semibold hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
