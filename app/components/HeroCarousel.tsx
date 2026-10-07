"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Slide = {
  image: string;
  mobileImage?: string;
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
    image: "/images/hero1.jpeg",
    tag: "Expert Care",
    title: "Your Lifestyle Clinic.",
    description:
      "A leading physiotherapy clinic in Nairobi with over 12 years of experience. We identify the root cause of your pain — not just the symptoms.",
    primaryLabel: "View Our Offers",
    primaryHref: "/packages",
    secondaryLabel: "Book Appointment",
    secondaryHref: "/book-appointment",
  },
  {
    image: "/images/hero2.JPG",
    mobileImage: "/images/hero2mobile.png",
    tag: "Expert Care",
    title: "Your Lifestyle Clinic.",
    description:
      "Expert treatment for back pain, sports injuries, joint pain, and musculoskeletal conditions. Personalized plans for lasting recovery.",
    primaryLabel: "View Our Offers",
    primaryHref: "/services",
    secondaryLabel: "Book Appointment",
    secondaryHref: "/book-appointment",
  },
  {
    image: "/images/hero3.jpg",
    tag: "Expert Care",
    title: "Your Lifestyle Clinic.",
    description:
      "Over 152,000 sessions completed. Committed to helping you recover fully and live an active, pain-free life.",
    primaryLabel: "View Our Offers",
    primaryHref: "/services",
    secondaryLabel: "Book Appointment",
    secondaryHref: "/book-appointment",
  },
];

const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "152,000+", label: "Sessions Done" },
  { value: "13,424+", label: "Happy Clients" },
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
      className="relative min-h-[450px] md:min-h-[600px] flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background images — cross-fade */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.mobileImage || slide.image}
            alt={slide.title}
            className="w-full h-full object-cover md:hidden"
          />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover hidden md:block"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}

      {/* Content */}
      <div className="container-custom relative z-10 text-white py-8 md:py-16 w-full">
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
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <span className="w-6 md:w-8 h-px bg-white/60"></span>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-white/90">
                  {slide.tag}
                </p>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-3 md:mb-4">
                {slide.title}
              </h1>

              {/* Description */}
              <p className="text-xs sm:text-base md:text-lg text-white/80 leading-relaxed max-w-xl">
                {slide.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-8">
                <Link
                  href={slide.primaryHref}
                  className="bg-green text-white px-6 py-3 rounded font-semibold hover:bg-green-dark transition shadow-lg text-sm text-center w-full sm:w-auto"
                >
                  {slide.primaryLabel}
                </Link>
                <Link
                  href={slide.secondaryHref}
                  className="bg-white text-purple px-6 py-3 rounded font-semibold hover:bg-gray-100 transition text-sm text-center w-full sm:w-auto"
                >
                  {slide.secondaryLabel}
                </Link>
              </div>
            </div>
          ))}

          {/* Stats Strip */}
          <div className="flex justify-between md:justify-start md:items-center gap-2 md:gap-10 mt-8 pt-5 md:mt-12 md:pt-8 border-t border-white/20 max-w-2xl">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-4 md:gap-10">
                {idx > 0 && (
                  <div className="hidden md:block w-px h-10 bg-white/30"></div>
                )}
                <div>
                  <p className="text-xl md:text-3xl font-bold text-white mb-0.5">
                    {stat.value}
                  </p>
                  <p className="text-[10px] md:text-xs text-white/70 tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide indicator dots */}
      <div className="absolute bottom-4 right-6 md:bottom-6 md:right-8 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 bg-white"
                : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}