"use client";

import { useState, useEffect } from "react";

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
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [isPaused, setIsPaused] = useState(false);

  // Update items per page based on screen size
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) setItemsPerPage(3);
      else if (window.innerWidth < 1024) setItemsPerPage(4);
      else setItemsPerPage(6);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const totalPages = Math.ceil(partners.length / itemsPerPage);

  // Auto-advance every 3 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3000);
    return () => clearInterval(timer);
  }, [totalPages, isPaused]);

  const startIndex = currentPage * itemsPerPage;
  const visible = partners.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Logos grid */}
      <div
        key={currentPage}
        className="grid gap-4 md:gap-6 animate-fadeIn"
        style={{
          gridTemplateColumns: `repeat(${itemsPerPage}, minmax(0, 1fr))`,
        }}
      >
        {visible.map((partner) => (
          <div
            key={partner.name}
            className="group flex items-center justify-center aspect-[5/3] p-3 md:p-4 bg-white border border-gray-100 rounded-lg hover:shadow-md hover:border-purple/20 transition-all duration-300"
            title={partner.name}
          >
            <img
              src={partner.src}
              alt={partner.name}
              className="max-w-full max-h-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            aria-label={`Show partner group ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentPage === i
                ? "w-8 bg-purple"
                : "w-2 bg-gray-300 hover:bg-purple/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}