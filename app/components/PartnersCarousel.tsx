"use client";

import Link from "next/link";

type Partner = {
  name: string;
  src: string;
  scale?: number;
  href?: string; // 👈 Added to make logos clickable
};

const partners: Partner[] = [
  // Insurers linked to the new Insurance page
  { name: "AAR Insurance", src: "/images/aarlogo.png", scale: 1.6, href: "/insurance-and-sha" },
  { name: "APA Insurance", src: "/images/apalogo.png", href: "/insurance-and-sha" },
  { name: "Britam", src: "/images/britamlogo.png", href: "/insurance-and-sha" },
  { name: "CIC Insurance", src: "/images/ciclogo.png", href: "/insurance-and-sha" },
  { name: "Equity", src: "/images/equitylogo.png", href: "/insurance-and-sha" },
  { name: "Fidelity Insurance", src: "/images/fidelitylogo.png", href: "/insurance-and-sha" },
  { name: "Lucent Insurance", src: "/images/lucentlogo.png", href: "/insurance-and-sha" },
  { name: "Minet", src: "/images/minetlogo.png", href: "/insurance-and-sha" },
  { name: "Mtiba", src: "/images/mtibalogo.png", href: "/insurance-and-sha" },
  { name: "MTN", src: "/images/mtnlogo.png", href: "/insurance-and-sha" },
  { name: "Old Mutual", src: "/images/oldmutuallogo.png", href: "/insurance-and-sha" },
  { name: "Sedgwick", src: "/images/sedgwicklogo.png", href: "/insurance-and-sha" },
  { name: "SHA — Social Health Authority", src: "/images/shalogo.png", scale: 1.6, href: "/insurance-and-sha" },
  { name: "Unisure", src: "/images/unisurelogo.png", href: "/insurance-and-sha" },
  { name: "Fast Assurance", src: "/images/fastassurancelogo.png", scale: 1.3, href: "/insurance-and-sha" },
  
  // Partners / Corporate Links
  { name: "Brookhouse", src: "/images/brookhouselogo.png", scale: 1.4, href: "/contact" },
  { name: "Eagle Africa", src: "/images/eagleafricalogo.png", href: "/contact" },
  { name: "Karen Country Club", src: "/images/karencountryclublogo.jpg", href: "/branches/karen-country-club" },
  { name: "KEBS", src: "/images/kebslogo.png", href: "/contact" },
  { name: "Liaison Group", src: "/images/liasonlogo.png", href: "/contact" },
  { name: "Parklands Sports Club", src: "/images/parklandssportsclublogo.jpg", scale: 1.4, href: "/branches/parklands-sports-club" },
  { name: "Parliamentary Service", src: "/images/parliamentaryservicelogo.png", scale: 1.7, href: "/contact" },
  { name: "Star Discovery", src: "/images/stardiscoverylogo.png", scale: 1.5, href: "/contact" },
  { name: "Tusker FC", src: "/images/tuskerfclogo.jpg", scale: 1.5, href: "/contact" },
];

export default function PartnersCarousel() {
  const loopedPartners = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden py-4">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="flex w-max animate-marquee">
        {loopedPartners.map((partner, i) => {
          const content = (
            <img
              src={partner.src}
              alt={partner.name}
              className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
              style={
                partner.scale
                  ? { transform: `scale(${partner.scale})` }
                  : undefined
              }
            />
          );

          return (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center w-64 h-32 md:w-80 md:h-44 px-6 md:px-8"
              title={partner.name}
            >
              {/* 👇 If it has a link, wrap it in Next.js Link. Otherwise, just show the image. */}
              {partner.href ? (
                <Link href={partner.href} className="group w-full h-full flex items-center justify-center cursor-pointer">
                  {content}
                </Link>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  {content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
