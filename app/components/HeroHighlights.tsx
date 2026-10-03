"use client";

import { useState, useEffect } from "react";

const highlights = [
  "A leading physiotherapy clinic in Nairobi with over 10 years of experience.",
  "Expert care for back pain, sports injuries, joint pain, and musculoskeletal conditions.",
  "We identify the root cause of your pain — not just the symptoms.",
  "Committed to helping you move better, feel stronger, and live pain-free.",
];

export default function HeroHighlights() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % highlights.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div
      className="relative h-16 md:h-14"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {highlights.map((text, i) => (
        <p
          key={i}
          className={`absolute inset-0 text-base md:text-lg opacity-90 transition-all duration-700 ease-out ${
            i === current
              ? "opacity-90 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          {text}
        </p>
      ))}

      {/* Dots */}
      <div className="absolute -bottom-6 left-0 flex gap-2">
        {highlights.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Highlight ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 bg-white"
                : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}