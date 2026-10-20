import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import SiteChrome from "./components/SiteChrome";
import LeadTracker from "./components/LeadTracker";

const BASE_URL = "https://stellarphysio.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Stellar Physio | Best Physiotherapy Clinic in Nairobi",
    template: "%s | Stellar Physio",
  },
  description:
    "Leading physiotherapy clinic in Nairobi with over 12 years of experience. Expert care for back pain, sports injuries, joint pain, and rehabilitation across our Ngong Road, Karen, and Parklands branches.",
  keywords: [
    "physiotherapy Nairobi", "physiotherapist Kenya", "back pain clinic",
    "sports injuries Nairobi", "chiropractor Nairobi", "reflexology", "cupping therapy",
  ],
  authors: [{ name: "Stellar Physio" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: BASE_URL,
    siteName: "Stellar Physio",
    title: "Stellar Physio | Best Physiotherapy Clinic in Nairobi",
    description: "Leading physiotherapy clinic in Nairobi with over 12 years of experience.",
    images: [{ url: "/images/Stellarphysio_NEW_logo.png", width: 1200, height: 630, alt: "Stellar Physio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stellar Physio | Best Physiotherapy Clinic in Nairobi",
    description: "Leading physiotherapy clinic in Nairobi with over 12 years of experience.",
    images: ["/images/Stellarphysio_NEW_logo.png"],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "MedicalClinic",
  name: "Stellar Physio Health & Wellness", url: BASE_URL,
  logo: `${BASE_URL}/images/Stellarphysio_NEW_logo.png`,
  image: `${BASE_URL}/images/Stellarphysio_NEW_logo.png`,
  description: "Leading physiotherapy clinic in Nairobi with over 12 years of experience in pain relief, injury rehabilitation, and movement recovery.",
  telephone: "+254719881291", email: "info@stellarphysio.com",
  address: { "@type": "PostalAddress", streetAddress: "Kenital Plaza, Ngong Road", addressLocality: "Nairobi", addressCountry: "KE" },
  geo: { "@type": "GeoCoordinates", latitude: -1.298749885724835, longitude: 36.79962250991531 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "16:00" },
  ],
  sameAs: [
    "https://www.facebook.com/share/1J7ZdUji5t/", "https://www.instagram.com/stellarphysioclinic",
    "https://x.com/physiostellar", "https://www.tiktok.com/@stellar_physio",
    "https://www.linkedin.com/in/stellar-physio-8b802a346", "https://www.youtube.com/@stellarphysiokenya"
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <SiteChrome header={<Header />} footer={<><Footer /><WhatsAppButton /></>}>
          {children}
        </SiteChrome>
        <LeadTracker />
      </body>
    </html>
  );
}
