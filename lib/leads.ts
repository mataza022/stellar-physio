import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDb } from "./firebase";

export type LeadType =
  | "call"
  | "whatsapp"
  | "email"
  | "directions"
  | "other";

export type Lead = {
  id?: string;
  type: LeadType;
  source: string;
  phone: string;
  email: string;
  label: string;
  status: string;
  createdAt?: unknown;
};

export async function trackLead(input: {
  type: LeadType;
  source: string;
  phone?: string;
  email?: string;
  label?: string;
}): Promise<void> {
  const db = getDb();
  await addDoc(collection(db, "leads"), {
    type: input.type,
    source: input.source,
    phone: (input.phone ?? "").trim(),
    email: (input.email ?? "").trim(),
    label: (input.label ?? "").trim().slice(0, 120),
    status: "new",
    createdAt: serverTimestamp(),
  });
}