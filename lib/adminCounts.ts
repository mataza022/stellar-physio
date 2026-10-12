import {
  collection,
  getCountFromServer,
  query,
  where,
} from "firebase/firestore";
import { getDb } from "./firebase";

async function countAll(coll: string): Promise<number> {
  try {
    const db = getDb();
    const snap = await getCountFromServer(collection(db, coll));
    return snap.data().count;
  } catch (err) {
    console.error(`countAll(${coll}) failed:`, err);
    return 0;
  }
}

async function countWhere(
  coll: string,
  field: string,
  value: string
): Promise<number> {
  try {
    const db = getDb();
    const q = query(collection(db, coll), where(field, "==", value));
    const snap = await getCountFromServer(q);
    return snap.data().count;
  } catch (err) {
    console.error(`countWhere(${coll}, ${field}=${value}) failed:`, err);
    return 0;
  }
}

export type AdminCounts = {
  bookings: number;      // pending
  messages: number;      // contact + branch_messages with status "new"
  comments: number;      // total (no read/unread state yet)
  leads: number;         // status "new"
  subscribers: number;   // total
};

export async function getAdminCounts(): Promise<AdminCounts> {
  const [
    bookings,
    contactNew,
    branchNew,
    comments,
    leads,
    subscribers,
  ] = await Promise.all([
    countWhere("bookings", "status", "pending"),
    countWhere("contact", "status", "new"),
    countWhere("branch_messages", "status", "new"),
    countAll("comments"),
    countWhere("leads", "status", "new"),
    countAll("newsletter_subscribers"),
  ]);

  return {
    bookings,
    messages: contactNew + branchNew,
    comments,
    leads,
    subscribers,
  };
}