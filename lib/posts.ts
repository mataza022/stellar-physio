import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getDb } from "./firebase";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
  relatedServices?: string[];
  views?: number;
  videos?: { url: string; title?: string }[];
};

function mapDoc(id: string, data: any): Post {
  return {
    slug: id,
    title: data.title,
    excerpt: data.excerpt,
    body: data.body,
    date: data.date,
    image: data.image,
    category: data.category,
    tags: data.tags ?? [],
    relatedServices: data.relatedServices ?? [],
    views: data.views ?? 0,
    videos: data.videos ?? [],
  };
}

export async function getPosts(): Promise<Post[]> {
  const db = getDb();
  const snapshot = await getDocs(collection(db, "posts"));
  const posts = snapshot.docs.map((d) => mapDoc(d.id, d.data()));
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const db = getDb();
  const snap = await getDoc(doc(db, "posts", slug));
  if (!snap.exists()) return undefined;
  return mapDoc(snap.id, snap.data());
}

export async function getRecentPosts(count: number): Promise<Post[]> {
  const all = await getPosts();
  return all.slice(0, count);
}

export async function getPostsByService(servicePath: string): Promise<Post[]> {
  const all = await getPosts();
  return all.filter((p) => p.relatedServices?.includes(servicePath));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}