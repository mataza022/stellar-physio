import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getDb } from "./firebase";

export type Condition = {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  introTitle: string;
  introText: string;
  introImage: string;
  understandingTitle: string;
  understandingText: string;
  understandingList?: string[];
  symptomsList?: string[];
  treatmentTitle: string;
  treatmentList: string[];
  whyChooseTitle: string;
  whyChooseList: string[];
  whyChooseImage: string;
  ctaTitle: string;
  ctaText: string;
  ctaButtonText: string;
  videos?: { url: string; title?: string }[];
};

function mapDoc(id: string, data: any): Condition {
  return {
    slug: id,
    title: data.title ?? "",
    shortDescription: data.shortDescription ?? "",
    heroImage: data.heroImage ?? "",
    introTitle: data.introTitle ?? "",
    introText: data.introText ?? "",
    introImage: data.introImage ?? "",
    understandingTitle: data.understandingTitle ?? "",
    understandingText: data.understandingText ?? "",
    understandingList: data.understandingList ?? [],
    symptomsList: data.symptomsList ?? [],
    treatmentTitle: data.treatmentTitle ?? "",
    treatmentList: data.treatmentList ?? [],
    whyChooseTitle: data.whyChooseTitle ?? "",
    whyChooseList: data.whyChooseList ?? [],
    whyChooseImage: data.whyChooseImage ?? "",
    ctaTitle: data.ctaTitle ?? "",
    ctaText: data.ctaText ?? "",
    ctaButtonText: data.ctaButtonText ?? "",
    videos: data.videos ?? [],
  };
}

export async function getConditions(): Promise<Condition[]> {
  const db = getDb();
  const snap = await getDocs(collection(db, "conditions"));
  return snap.docs.map((d) => mapDoc(d.id, d.data()));
}

export async function getConditionBySlug(
  slug: string
): Promise<Condition | undefined> {
  const db = getDb();
  const snap = await getDoc(doc(db, "conditions", slug));
  if (!snap.exists()) return undefined;
  return mapDoc(snap.id, snap.data());
}