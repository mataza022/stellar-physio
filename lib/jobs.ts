import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getDb } from "./firebase";

export type Job = {
  slug: string;
  title: string;
  department?: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  description: string;
  responsibilities: string[];
  requirements: string[];
  salaryRange?: string;
  deadline?: string;
  postedAt: string;
  status: "open" | "closed";
  applyEmail: string;
};

function mapDoc(id: string, data: any): Job {
  return {
    slug: id,
    title: data.title ?? "",
    department: data.department ?? "",
    location: data.location ?? "",
    type: data.type ?? "Full-time",
    description: data.description ?? "",
    responsibilities: data.responsibilities ?? [],
    requirements: data.requirements ?? [],
    salaryRange: data.salaryRange ?? "",
    deadline: data.deadline ?? "",
    postedAt: data.postedAt ?? "",
    status: data.status ?? "open",
    applyEmail: data.applyEmail ?? "hr@stellarphysio.co.ke",
  };
}

export async function getJobs(): Promise<Job[]> {
  const db = getDb();
  const snap = await getDocs(collection(db, "jobs"));
  const jobs = snap.docs.map((d) => mapDoc(d.id, d.data()));
  return jobs.sort(
    (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
  );
}

export async function getOpenJobs(): Promise<Job[]> {
  const all = await getJobs();
  return all.filter((j) => j.status === "open");
}

export async function getJobBySlug(slug: string): Promise<Job | undefined> {
  const db = getDb();
  const snap = await getDoc(doc(db, "jobs", slug));
  if (!snap.exists()) return undefined;
  return mapDoc(snap.id, snap.data());
}