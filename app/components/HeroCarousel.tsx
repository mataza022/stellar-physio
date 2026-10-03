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
      className="relative min-h-[700px] flex items-center overflow-hidden"
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
          <div className="absolute inset-0 bg-black/55"></div>
        </div>
      ))}

      {/* Content */}
      <div className="container-custom relative z-10 text-white py-20">
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
              <p className="text-sm uppercase tracking-widest mb-4 font-semibold">
                {slide.tag}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg mb-8 opacity-90 leading-relaxed">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={slide.primaryHref}
                  className="bg-green text-white px-6 py-3 rounded font-semibold hover:bg-green-dark transition"
                >
                  {slide.primaryLabel}
                </Link>
                <Link
                  href={slide.secondaryHref}
                  className="bg-white text-purple px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
                >
                  {slide.secondaryLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 pt-8 border-t border-white/20 max-w-2xl">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">10+</p>
            <p className="text-xs md:text-sm text-white/70 mt-1">
              Years of Experience
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">
              96,000+
            </p>
            <p className="text-xs md:text-sm text-white/70 mt-1">
              Sessions Done
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">9,760+</p>
            <p className="text-xs md:text-sm text-white/70 mt-1">
              Happy Clients
            </p>
          </div>
        </div>

        {/* Slide indicator dots */}
        <div className="flex gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}