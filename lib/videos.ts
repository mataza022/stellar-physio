import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getDb } from "./firebase";

export type VideoPlatform =
  | "youtube"
  | "instagram"
  | "tiktok"
  | "facebook"
  | "other";

export type SocialVideo = {
  slug: string;
  url: string;
  title?: string;
  platform: VideoPlatform;
  active: boolean;
  postedAt: string;
};

/** Auto-detect platform from a pasted URL. */
export function detectPlatform(url: string): VideoPlatform {
  if (/youtube\.com|youtu\.be/i.test(url)) return "youtube";
  if (/instagram\.com/i.test(url)) return "instagram";
  if (/tiktok\.com/i.test(url)) return "tiktok";
  if (/facebook\.com|fb\.watch/i.test(url)) return "facebook";
  return "other";
}

/** Pull a YouTube thumbnail URL when we can — empty string otherwise. */
export function getVideoThumbnail(url: string): string {
  const yt = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (yt) return `https://img.youtube.com/vi/${yt[1]}/mqdefault.jpg`;
  return "";
}

function mapDoc(id: string, data: any): SocialVideo {
  return {
    slug: id,
    url: data.url ?? "",
    title: data.title ?? "",
    platform: data.platform ?? detectPlatform(data.url ?? ""),
    active: data.active ?? true,
    postedAt: data.postedAt ?? "",
  };
}

export async function getVideos(): Promise<SocialVideo[]> {
  const db = getDb();
  const snap = await getDocs(collection(db, "videos"));
  const videos = snap.docs.map((d) => mapDoc(d.id, d.data()));
  return videos.sort(
    (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
  );
}

export async function getActiveVideos(): Promise<SocialVideo[]> {
  const all = await getVideos();
  return all.filter((v) => v.active);
}

export async function getVideoBySlug(slug: string): Promise<SocialVideo | undefined> {
  const db = getDb();
  const snap = await getDoc(doc(db, "videos", slug));
  if (!snap.exists()) return undefined;
  return mapDoc(snap.id, snap.data());
}