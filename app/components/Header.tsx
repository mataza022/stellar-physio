"use client";

import { useState } from "react";
import Link from "next/link";

const servicesDropdown = [
  { label: "General Consultations", href: "/services/general-consultations" },
  { label: "Chiropractor Services", href: "/services/chiropractor-services" },
  { label: "Physiotherapy", href: "/services/physiotherapy" },
  { label: "Home-Based Care", href: "/services/home-based-care" },
  { label: "Laboratory Services", href: "/services/stellar-laboratory-services" },
  { label: "Pharmacy", href: "/services/pharmacy" },
  { label: "Counselling Services", href: "/services/counselling-services" },
  { label: "Sports Massage", href: "/services/sports-massage" },
  { label: "Reflexology", href: "/services/reflexology" },
  { label: "Occupational Therapy", href: "/services/occupational-therapy" },
  { label: "Nutritional Services", href: "/services/nutritional-services" },
  { label: "Stretch & Exercise Therapy", href: "/services/stretch-exercise-therapy" },
];

const conditionsDropdown = [
  { label: "Arthritis & Joint Pains", href: "/conditions/arthritis-joint-pains" },
  { label: "Lower Back Pain & Spine Health", href: "/conditions/lower-back-pain-spine-health" },
  { label: "Sports Injuries", href: "/conditions/sports-injuries" },
  { label: "Stroke Rehabilitation", href: "/conditions/stroke-rehabilitation" },
  { label: "Pre- & Post-Surgery Rehab", href: "/conditions/pre-post-surgery-rehab" },
  { label: "Pre & Post-Natal Massages", href: "/conditions/pre-post-natal-massages" },
  { label: "Developmental Milestones", href: "/conditions/developmental-milestones" },
];

const branchesDropdown = [
  { label: "Kenital Plaza, Ngong Road", href: "/branches/kenital-plaza" },
  { label: "Karen Country Club", href: "/branches/karen-country-club" },
  { label: "Parklands Sports Club", href: "/branches/parklands-sports-club" },
];

const aboutDropdown = [
  { label: "Careers", href: "/about/careers" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleMobileSub = (key: string) =>
    setMobileExpanded(mobileExpanded === key ? null : key);

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-purple text-white py-2 text-xs">
        <div className="container-custom flex justify-between items-center gap-4">
          <div className="leading-relaxed hidden md:block">
            Kenital Plaza, Ngong Road: +254 706 101999 || Parklands: +254 755
            901942 || Karen Country Club: +254 739 110110
          </div>
          <a
            href="tel:+254706101999"
            className="md:hidden flex items-center gap-2"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+254 706 101999</span>
          </a>
          <div className="flex gap-4 flex-shrink-0">
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* QUICK ACTION BAR (Mobile only — Nairobi Hospital format) */}
      <div className="lg:hidden bg-white border-b border-gray-200">
        <div className="grid grid-cols-2 divide-x divide-gray-200">
          <Link
            href="/book-appointment"
            className="flex items-center justify-center gap-2 py-3 text-purple font-medium text-sm"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            Book a Session
          </Link>
          <a
            href="tel:+254719881291"
            className="flex items-center justify-center gap-2 py-3 text-purple font-medium text-sm"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Call Us
          </a>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container-custom flex justify-between items-center py-3 md:py-4">
          {/* Mobile hamburger button (LEFT) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-purple hover:text-purple-dark transition"
            aria-label="Open menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Logo (center on mobile, left on desktop) */}
          <Link
            href="/"
            className="mx-auto lg:mx-0 flex items-center"
          >
            <img
              src="/images/Stellarphysio_NEW_logo.png"
              alt="Stellar Physio"
              className="h-16 md:h-24 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-purple font-medium">
              Home
            </Link>

            {/* About Us */}
            <div className="relative group">
              <Link
                href="/about"
                className="hover:text-purple font-medium inline-flex items-center gap-1"
              >
                About Us <span className="text-xs">&#9662;</span>
              </Link>
              <div className="hidden group-hover:block absolute top-full left-0 pt-2 z-50">
                <div className="bg-white shadow-lg rounded min-w-[200px] py-2 border-t-4 border-purple">
                  {aboutDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-purple-light hover:text-purple text-sm"
                    >
                      <span className="text-purple text-xs">&#9679;</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="relative group">
              <span className="hover:text-purple font-medium inline-flex items-center gap-1 cursor-default">
                Services <span className="text-xs">&#9662;</span>
              </span>
              <div className="hidden group-hover:block absolute top-full left-0 pt-2 z-50">
                <div className="bg-white shadow-lg rounded min-w-[260px] py-2 border-t-4 border-purple">
                  {servicesDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-purple-light hover:text-purple text-sm"
                    >
                      <span className="text-purple text-xs">&#9679;</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Conditions */}
            <div className="relative group">
              <span className="hover:text-purple font-medium inline-flex items-center gap-1 cursor-default">
                Conditions <span className="text-xs">&#9662;</span>
              </span>
              <div className="hidden group-hover:block absolute top-full left-0 pt-2 z-50">
                <div className="bg-white shadow-lg rounded min-w-[280px] py-2 border-t-4 border-purple">
                  {conditionsDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-purple-light hover:text-purple text-sm"
                    >
                      <span className="text-purple text-xs">&#9679;</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Branches */}
            <div className="relative group">
              <span className="hover:text-purple font-medium inline-flex items-center gap-1 cursor-default">
                Branches <span className="text-xs">&#9662;</span>
              </span>
              <div className="hidden group-hover:block absolute top-full left-0 pt-2 z-50">
                <div className="bg-white shadow-lg rounded min-w-[240px] py-2 border-t-4 border-purple">
                  {branchesDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-purple-light hover:text-purple text-sm"
                    >
                      <span className="text-purple text-xs">&#9679;</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/faqs" className="hover:text-purple font-medium">
              FAQs
            </Link>
            <Link href="/contact" className="hover:text-purple font-medium">
              Contact
            </Link>
            <Link href="/blog" className="hover:text-purple font-medium">
              Blog
            </Link>
          </nav>

          {/* Mobile search icon (RIGHT) */}
          <button
            className="lg:hidden text-purple hover:text-purple-dark transition"
            aria-label="Search"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>

          {/* Desktop appointment button */}
          <Link
            href="/book-appointment"
            className="hidden lg:inline-block bg-purple text-white px-5 py-2 rounded font-semibold hover:bg-purple-dark transition text-sm"
          >
            Appointment
          </Link>
        </div>
      </header>

      {/* MOBILE SLIDE-OUT MENU — Nairobi Hospital format */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div onClick={toggleMenu} className="absolute inset-0 bg-black/60"></div>

        <div
          className={`absolute top-0 left-0 h-full w-full max-w-[400px] bg-white shadow-2xl transform transition-transform overflow-y-auto flex flex-col ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header with logo + close X */}
          <div className="flex items-center justify-between px-5 py-4 bg-purple-light border-b border-purple/20 sticky top-0 z-10">
            <img
              src="/images/Stellarphysio_NEW_logo.png"
              alt="Stellar Physio"
              className="h-14 w-auto"
            />
            <button
              onClick={toggleMenu}
              className="w-10 h-10 bg-purple text-white rounded-full flex items-center justify-center hover:bg-purple-dark transition"
              aria-label="Close menu"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Menu items */}
          <ul className="flex-1">
            {/* Home */}
            <li className="border-b border-gray-100">
              <Link
                href="/"
                onClick={toggleMenu}
                className="flex items-center justify-between px-5 py-4 hover:bg-purple-light transition"
              >
                <span className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-purple flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M3 10l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </span>
                  <span className="text-gray-800 font-semibold">Home</span>
                </span>
              </Link>
            </li>

            {/* About Us */}
            <li className="border-b border-gray-100">
              <button
                onClick={() => toggleMobileSub("about")}
                className="w-full flex items-center justify-between px-5 py-4 hover:bg-purple-light transition"
              >
                <span className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-purple flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
                    </svg>
                  </span>
                  <span className="text-gray-800 font-semibold">About Us</span>
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    mobileExpanded === "about" ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {mobileExpanded === "about" && (
                <ul className="bg-gray-50">
                  <li className="border-b border-gray-100">
                    <Link
                      href="/about"
                      onClick={toggleMenu}
                      className="block px-5 py-3 pl-[72px] text-sm text-gray-700 hover:bg-purple-light"
                    >
                      Overview
                    </Link>
                  </li>
                  {aboutDropdown.map((item) => (
                    <li key={item.href} className="border-b border-gray-100">
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className="block px-5 py-3 pl-[72px] text-sm text-gray-700 hover:bg-purple-light"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Services */}
            <li className="border-b border-gray-100">
              <button
                onClick={() => toggleMobileSub("services")}
                className="w-full flex items-center justify-between px-5 py-4 hover:bg-purple-light transition"
              >
                <span className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-purple flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </span>
                  <span className="text-gray-800 font-semibold">Services</span>
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    mobileExpanded === "services" ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {mobileExpanded === "services" && (
                <ul className="bg-gray-50">
                  {servicesDropdown.map((item) => (
                    <li key={item.href} className="border-b border-gray-100">
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className="block px-5 py-3 pl-[72px] text-sm text-gray-700 hover:bg-purple-light"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Conditions */}
            <li className="border-b border-gray-100">
              <button
                onClick={() => toggleMobileSub("conditions")}
                className="w-full flex items-center justify-between px-5 py-4 hover:bg-purple-light transition"
              >
                <span className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-purple flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </span>
                  <span className="text-gray-800 font-semibold">Conditions</span>
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    mobileExpanded === "conditions" ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {mobileExpanded === "conditions" && (
                <ul className="bg-gray-50">
                  {conditionsDropdown.map((item) => (
                    <li key={item.href} className="border-b border-gray-100">
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className="block px-5 py-3 pl-[72px] text-sm text-gray-700 hover:bg-purple-light"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Branches */}
            <li className="border-b border-gray-100">
              <button
                onClick={() => toggleMobileSub("branches")}
                className="w-full flex items-center justify-between px-5 py-4 hover:bg-purple-light transition"
              >
                <span className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-purple flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span className="text-gray-800 font-semibold">Branches</span>
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    mobileExpanded === "branches" ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {mobileExpanded === "branches" && (
                <ul className="bg-gray-50">
                  {branchesDropdown.map((item) => (
                    <li key={item.href} className="border-b border-gray-100">
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className="block px-5 py-3 pl-[72px] text-sm text-gray-700 hover:bg-purple-light"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* FAQs */}
            <li className="border-b border-gray-100">
              <Link
                href="/faqs"
                onClick={toggleMenu}
                className="flex items-center justify-between px-5 py-4 hover:bg-purple-light transition"
              >
                <span className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-purple flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" />
                    </svg>
                  </span>
                  <span className="text-gray-800 font-semibold">FAQs</span>
                </span>
              </Link>
            </li>

            {/* Contact Us */}
            <li className="border-b border-gray-100">
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="flex items-center justify-between px-5 py-4 hover:bg-purple-light transition"
              >
                <span className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-purple flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <span className="text-gray-800 font-semibold">Contact Us</span>
                </span>
              </Link>
            </li>

            {/* Blog */}
            <li className="border-b border-gray-100">
              <Link
                href="/blog"
                onClick={toggleMenu}
                className="flex items-center justify-between px-5 py-4 hover:bg-purple-light transition"
              >
                <span className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-purple flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  </span>
                  <span className="text-gray-800 font-semibold">Blog</span>
                </span>
              </Link>
            </li>
          </ul>

          {/* Book Appointment button at bottom */}
          <div className="p-5 border-t border-gray-200 bg-white sticky bottom-0">
            <Link
              href="/book-appointment"
              onClick={toggleMenu}
              className="block w-full bg-purple text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-purple-dark transition"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}