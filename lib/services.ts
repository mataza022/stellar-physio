import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getDb } from "./firebase";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  heroImageMobile?: string;
  introTitle: string;
  introText: string;
  introImage: string;
  offeringsTitle: string;
  offeringsList: string[];
  offeringsImage: string;
  whyChooseTitle: string;
  whyChooseList: string[];
  pricingTitle: string;
  pricingText: string;
  ctaTitle: string;
  ctaText: string;
  ctaButtonText: string;
  faqs?: { question: string; answer: string }[];
  videos?: { url: string; title?: string }[];
};

function mapDoc(id: string, data: any): Service {
  return {
    slug: id,
    title: data.title ?? "",
    shortDescription: data.shortDescription ?? "",
    heroImage: data.heroImage ?? "",
    heroImageMobile: data.heroImageMobile ?? undefined,
    introTitle: data.introTitle ?? "",
    introText: data.introText ?? "",
    introImage: data.introImage ?? "",
    offeringsTitle: data.offeringsTitle ?? "",
    offeringsList: data.offeringsList ?? [],
    offeringsImage: data.offeringsImage ?? "",
    whyChooseTitle: data.whyChooseTitle ?? "",
    whyChooseList: data.whyChooseList ?? [],
    pricingTitle: data.pricingTitle ?? "",
    pricingText: data.pricingText ?? "",
    ctaTitle: data.ctaTitle ?? "",
    ctaText: data.ctaText ?? "",
    ctaButtonText: data.ctaButtonText ?? "",
    faqs: data.faqs ?? [],
    videos: data.videos ?? [],
  };
}

export async function getServices(): Promise<Service[]> {
  const db = getDb();
  const snap = await getDocs(collection(db, "services"));
  return snap.docs.map((d) => mapDoc(d.id, d.data()));
}

export async function getServiceBySlug(
  slug: string
): Promise<Service | undefined> {
  const db = getDb();
  const snap = await getDoc(doc(db, "services", slug));
  if (!snap.exists()) return undefined;
  return mapDoc(snap.id, snap.data());
}