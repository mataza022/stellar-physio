"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Slide = {
  image: string;
  tag: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

const slides: Slide[] = [
  {
    image: "/images/hero.jpeg",
    tag: "Health & Wellness",
    title: "Your Lifestyle Clinic.",
    description:
      "A leading physiotherapy clinic in Nairobi with over 10 years of experience. We identify the root cause of your pain — not just the symptoms.",
    primaryLabel: "Explore Services",
    primaryHref: "/services",
    secondaryLabel: "Book Appointment",
    secondaryHref: "/book-appointment",
  },
  {
    image: "/images/hero.jpeg",
    tag: "Expert Care",
    title: "Move Better. Feel Stronger.",
    description:
      "Expert treatment for back pain, sports injuries, joint pain, and musculoskeletal conditions. Personalized plans for lasting recovery.",
    primaryLabel: "Our Services",
    primaryHref: "/services",
    secondaryLabel: "Book Appointment",
    secondaryHref: "/book-appointment",
  },
  {
    image: "/images/hero.jpeg",
    tag: "Trusted Recovery",
    title: "Live Pain-Free.",
    description:
      "Over 96,000 sessions completed. Committed to helping you recover fully and live an active, pain-free life.",
    primaryLabel: "Explore Conditions",
    primaryHref: "/conditions",
    secondaryLabel: "Book Appointment",
    secondaryHref: "/book-appointment",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background images — cross-fade */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}

      {/* Content */}
      <div className="container-custom relative z-10 text-white py-20 w-full">
        <div className="max-w-2xl">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`transition-opacity duration-700 ${
                i === current
                  ? "opacity-100"
                  : "opacity-0 absolute inset-0 pointer-events-none"
              }`}
              aria-hidden={i !== current}
            >
              {/* Tag with horizontal line */}
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-white/60"></span>
                <p className="text-xs uppercase tracking-[0.2em] font-medium text-white/90">
                  {slide.tag}
                </p>
              </div>
              
              {/* Massive Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                {slide.title}
              </h1>
              
              {/* Clean Description */}
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-lg">
                {slide.description}
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  href={slide.primaryHref}
                  className="bg-white text-purple px-8 py-3.5 rounded font-semibold hover:bg-gray-100 transition shadow-lg text-sm"
                >
                  {slide.primaryLabel}
                </Link>
                <Link
                  href={slide.secondaryHref}
                  className="border border-white/30 text-white px-8 py-3.5 rounded font-semibold hover:bg-white/10 transition text-sm"
                >
                  {slide.secondaryLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicator dots - moved to bottom right */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}