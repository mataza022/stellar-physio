"use client";

type Partner = {
  name: string;
  src: string;
  scale?: number;
};

const partners: Partner[] = [
  { name: "AAR Insurance", src: "/images/aarlogo.png", scale: 1.6 },
  { name: "APA Insurance", src: "/images/apalogo.png" },
  { name: "Britam", src: "/images/britamlogo.png" },
  { name: "Brookhouse", src: "/images/brookhouselogo.png", scale: 1.4 },
  { name: "CIC Insurance", src: "/images/ciclogo.png" },
  { name: "Eagle Africa", src: "/images/eagleafricalogo.png" },
  { name: "Equity", src: "/images/equitylogo.png" },
  { name: "Fast Assurance", src: "/images/fastassurancelogo.png", scale: 1.3 },
  { name: "Fidelity Insurance", src: "/images/fidelitylogo.png" },
  { name: "Karen Country Club", src: "/images/karencountryclublogo.jpg" },
  { name: "KEBS", src: "/images/kebslogo.png" },
  { name: "Liaison Group", src: "/images/liasonlogo.png" },
  { name: "Lucent Insurance", src: "/images/lucentlogo.png" },
  { name: "Minet", src: "/images/minetlogo.png" },
  { name: "Mtiba", src: "/images/mtibalogo.png" },
  { name: "MTN", src: "/images/mtnlogo.png" },
  { name: "Old Mutual", src: "/images/oldmutuallogo.png" },
  { name: "Parklands Sports Club", src: "/images/parklandssportsclublogo.jpg", scale: 1.4 },
  { name: "Parliamentary Service", src: "/images/parliamentaryservicelogo.png", scale: 1.7 },
  { name: "Sedgwick", src: "/images/sedgwicklogo.png" },
  { name: "SHA — Social Health Authority", src: "/images/shalogo.png", scale: 1.6 },
  { name: "Star Discovery", src: "/images/stardiscoverylogo.png", scale: 1.5 },
  { name: "Tusker FC", src: "/images/tuskerfclogo.jpg", scale: 1.5 },
  { name: "Unisure", src: "/images/unisurelogo.png" },
];

export default function PartnersCarousel() {
  const loopedPartners = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="flex w-max animate-marquee">
        {loopedPartners.map((partner, i) => (
          <div
            key={`${partner.name}-${i}`}
            className="flex-shrink-0 flex items-center justify-center w-64 h-32 md:w-80 md:h-44 px-6 md:px-8"
            title={partner.name}
          >
            <img
              src={partner.src}
              alt={partner.name}
              className="max-w-full max-h-full object-contain"
              style={
                partner.scale
                  ? { transform: `scale(${partner.scale})` }
                  : undefined
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
