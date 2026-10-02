"use client";

const partners = [
  { name: "AAR Insurance", src: "/images/aarlogo.png" },
  { name: "APA Insurance", src: "/images/apalogo.png" },
  { name: "Britam", src: "/images/britamlogo.png" },
  { name: "CIC Insurance", src: "/images/ciclogo.png" },
  { name: "Eagle Africa", src: "/images/eagleafricalogo.png" },
  { name: "Equity", src: "/images/equitylogo.png" },
  { name: "Fast Assurance", src: "/images/fastassurancelogo.png" },
  { name: "Fidelity Insurance", src: "/images/fidelitylogo.png" },
  { name: "KEBS", src: "/images/kebslogo.png" },
  { name: "Liaison Group", src: "/images/liasonlogo.png" },
  { name: "Lucent Insurance", src: "/images/lucentlogo.png" },
  { name: "Minet", src: "/images/minetlogo.png" },
  { name: "Mtiba", src: "/images/mtibalogo.png" },
  { name: "MTN", src: "/images/mtnlogo.png" },
  { name: "Old Mutual", src: "/images/oldmutuallogo.png" },
  { name: "Sedgwick", src: "/images/sedgwicklogo.png" },
  { name: "SHA — Social Health Authority", src: "/images/shalogo.png" },
  { name: "Star Discovery", src: "/images/stardiscoverylogo.png" },
  { name: "Unisure", src: "/images/unisurelogo.png" },
];

export default function PartnersCarousel() {
  // Duplicate the list so the marquee loop is seamless
  const loopedPartners = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden">
      {/* Fade masks on left & right edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Scrolling track */}
      <div className="flex w-max animate-marquee">
        {loopedPartners.map((partner, i) => (
          <div
            key={`${partner.name}-${i}`}
            className="flex-shrink-0 flex items-center justify-center w-40 h-24 md:w-56 md:h-32 px-4 md:px-6"
            title={partner.name}
          >
            <img
              src={partner.src}
              alt={partner.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}