import { collection, getDocs } from "firebase/firestore";
import { getDb } from "./firebase";

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
};

export async function getFAQs(): Promise<FAQ[]> {
  const db = getDb();
  const snap = await getDocs(collection(db, "faqs"));
  return snap.docs
    .map((d) => ({ id: d.id, ...d.data() } as FAQ))
    .sort((a, b) => a.category.localeCompare(b.category) || a.order - b.order);
}
