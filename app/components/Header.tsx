"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

// Search index — everything searchable across the site
type SearchItem = { type: string; title: string; href: string };

const searchIndex: SearchItem[] = [
  // SERVICES
  { type: "Service", title: "General Consultations", href: "/services/general-consultations" },
  { type: "Service", title: "Chiropractor Services", href: "/services/chiropractor-services" },
  { type: "Service", title: "Physiotherapy", href: "/services/physiotherapy" },
  { type: "Service", title: "Home-Based Care", href: "/services/home-based-care" },
  { type: "Service", title: "Laboratory Services", href: "/services/stellar-laboratory-services" },
  { type: "Service", title: "Pharmacy", href: "/services/pharmacy" },
  { type: "Service", title: "Counselling Services", href: "/services/counselling-services" },
  { type: "Service", title: "Sports Massage", href: "/services/sports-massage" },
  { type: "Service", title: "Reflexology", href: "/services/reflexology" },
  { type: "Service", title: "Occupational Therapy", href: "/services/occupational-therapy" },
  { type: "Service", title: "Nutritional Services", href: "/services/nutritional-services" },
  { type: "Service", title: "Stretch & Exercise Therapy", href: "/services/stretch-exercise-therapy" },
  // CONDITIONS
  { type: "Condition", title: "Arthritis & Joint Pains", href: "/conditions/arthritis-joint-pains" },
  { type: "Condition", title: "Lower Back Pain & Spine Health", href: "/conditions/lower-back-pain-spine-health" },
  { type: "Condition", title: "Sports Injuries", href: "/conditions/sports-injuries" },
  { type: "Condition", title: "Stroke Rehabilitation", href: "/conditions/stroke-rehabilitation" },
  { type: "Condition", title: "Pre- & Post-Surgery Rehab", href: "/conditions/pre-post-surgery-rehab" },
  { type: "Condition", title: "Pre & Post-Natal Massages", href: "/conditions/pre-post-natal-massages" },
  { type: "Condition", title: "Developmental Milestones for Autism & Cerebral Palsy", href: "/conditions/developmental-milestones" },
  // BRANCHES
  { type: "Branch", title: "Kenital Plaza, Ngong Road", href: "/branches/kenital-plaza" },
  { type: "Branch", title: "Karen Country Club", href: "/branches/karen-country-club" },
  { type: "Branch", title: "Parklands Sports Club", href: "/branches/parklands-sports-club" },
  // PAGES / SECTIONS
  { type: "Page", title: "Book Appointment", href: "/book-appointment" },
  { type: "Page", title: "Contact Us", href: "/contact" },
  { type: "Page", title: "FAQs — Frequently Asked Questions", href: "/faqs" },
  { type: "Page", title: "Articles & News (Blog)", href: "/blog" },
  { type: "Page", title: "About Us", href: "/about" },
  { type: "Page", title: "Careers", href: "/about/careers" },
  { type: "Page", title: "All Services", href: "/services" },
  { type: "Page", title: "All Conditions", href: "/conditions" },
  { type: "Page", title: "All Branches", href: "/branches" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleMobileSub = (key: string) =>
    setMobileExpanded(mobileExpanded === key ? null : key);

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  // Escape key closes search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && searchOpen) closeSearch();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen]);

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 200);
    }
  }, [searchOpen]);

  // Filter search
  const query = searchQuery.trim().toLowerCase();
  const searchResults =
    query === ""
      ? []
      : searchIndex
          .filter(
            (item) =>
              item.title.toLowerCase().includes(query) ||
              item.type.toLowerCase().includes(query)
          )
          .slice(0, 10);

  const handleSelectResult = (href: string) => {
    closeSearch();
    setMenuOpen(false);
    router.push(href);
  };

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
            href="tel:+254719881291"
            className="md:hidden flex items-center gap-2 hover:text-green transition"
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
            <span>0719 881 291</span>
          </a>
          <div className="flex gap-4 flex-shrink-0">
            <Link href="/contact" className="hover:text-green transition">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* QUICK ACTION BAR (Mobile) */}
      <div className="lg:hidden bg-white border-b border-gray-200">
        <div className="grid grid-cols-2 divide-x divide-gray-200">
          <Link
            href="/book-appointment"
            className="flex items-center justify-center gap-2 py-3 text-purple font-medium text-sm active:bg-purple-light transition"
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
            className="flex items-center justify-center gap-2 py-3 text-purple font-medium text-sm active:bg-purple-light transition"
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
          {/* Mobile hamburger button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-purple hover:text-purple-dark hover:scale-110 active:scale-95 transition-all duration-200"
            aria-label="Open menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Logo — bigger, hover effect */}
          <Link
            href="/"
            className="mx-auto lg:mx-0 flex items-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/images/Stellarphysio_NEW_logo.png"
              alt="Stellar Physio"
              className="h-20 md:h-28 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-purple font-medium">
              Home
            </Link>

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

          {/* Search icon */}
          <button
            onClick={() => setSearchOpen(true)}
            className="text-purple hover:text-purple-dark hover:scale-110 active:scale-95 transition-all duration-200"
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
            className="hidden lg:inline-block bg-purple text-white px-5 py-2 rounded font-semibold hover:bg-purple-dark hover:scale-105 transition-all duration-200 text-sm"
          >
            Appointment
          </Link>
        </div>
      </header>

      {/* SEARCH OVERLAY */}
      <div
        className={`fixed inset-0 z-[300] ${
          searchOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={closeSearch}
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            searchOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Search Panel — slides down from top */}
        <div
          className={`relative bg-white shadow-2xl transition-transform duration-300 ease-out ${
            searchOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="container-custom py-6">
            {/* Input */}
            <div className="flex items-center gap-4 border-b-2 border-purple pb-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-purple flex-shrink-0"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for services, conditions, branches..."
                className="flex-1 text-base md:text-lg outline-none text-gray-800 placeholder-gray-400 bg-transparent"
              />
              <button
                onClick={closeSearch}
                className="hidden md:flex items-center gap-1 px-3 py-1 rounded border border-gray-300 text-xs text-gray-500 hover:border-purple hover:text-purple transition"
                aria-label="Close search"
              >
                ESC
              </button>
              <button
                onClick={closeSearch}
                className="md:hidden w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-purple hover:text-white transition"
                aria-label="Close search"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Results */}
            <div className="mt-4 max-h-[60vh] overflow-y-auto">
              {query === "" && (
                <p className="text-sm text-gray-500 py-4">
                  Start typing to search. Try{" "}
                  <button
                    onClick={() => setSearchQuery("physiotherapy")}
                    className="text-purple font-semibold hover:underline"
                  >
                    physiotherapy
                  </button>
                  ,{" "}
                  <button
                    onClick={() => setSearchQuery("back pain")}
                    className="text-purple font-semibold hover:underline"
                  >
                    back pain
                  </button>
                  , or{" "}
                  <button
                    onClick={() => setSearchQuery("book")}
                    className="text-purple font-semibold hover:underline"
                  >
                    book
                  </button>
                  .
                </p>
              )}

              {query !== "" && searchResults.length === 0 && (
                <p className="text-sm text-gray-500 py-4">
                  No results found for &quot;{searchQuery}&quot;. Try another
                  keyword.
                </p>
              )}

              {searchResults.length > 0 && (
                <ul className="divide-y divide-gray-100">
                  {searchResults.map((item, i) => (
                    <li
                      key={item.href}
                      className="animate-fadeSlideIn"
                      style={{ animationDelay: `${i * 40}ms` }}
                    >
                      <button
                        onClick={() => handleSelectResult(item.href)}
                        className="w-full flex items-center justify-between gap-4 px-2 py-3 hover:bg-purple-light rounded transition text-left"
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          <span
                            className={`text-xs font-bold uppercase px-2 py-1 rounded flex-shrink-0 ${
                              item.type === "Service"
                                ? "bg-purple text-white"
                                : item.type === "Condition"
                                ? "bg-green text-white"
                                : item.type === "Branch"
                                ? "bg-purple-dark text-white"
                                : "bg-gray-200 text-gray-700"
                            }`}
                          >
                            {item.type}
                          </span>
                          <span className="text-gray-800 font-medium truncate">
                            {item.title}
                          </span>
                        </div>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 text-gray-400 flex-shrink-0"
                        >
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE SLIDE-OUT MENU */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div onClick={toggleMenu} className="absolute inset-0 bg-black/60"></div>

        <div
          className={`absolute top-0 left-0 h-full w-full max-w-[400px] bg-white shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto flex flex-col ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header Bar (Logo Left, Icons Right) - Compact Purple Background & Cropped White Logo */}
          <div className="relative h-16 px-4 bg-purple shadow-sm border-b border-purple-dark sticky top-0 z-10 flex items-center justify-between overflow-hidden">
            <img
              src="/images/stellarphysiowhitelogo.png"
              alt="Stellar Physio"
              className="h-28 w-auto object-contain -ml-2"
            />
            <div className="flex items-center gap-1">
              <button
                onClick={() => setSearchOpen(true)}
                className="w-10 h-10 text-white flex items-center justify-center hover:bg-purple-dark rounded-full transition-colors"
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
              <button
                onClick={toggleMenu}
                className="w-10 h-10 text-white flex items-center justify-center hover:bg-purple-dark rounded-full transition-colors"
                aria-label="Close menu"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Menu items */}
          <ul className="flex-1">
            {/* Home */}
            <li
              className={`border-b border-gray-100 ${
                menuOpen ? "animate-fadeSlideIn" : ""
              }`}
              style={{ animationDelay: menuOpen ? "0ms" : "0ms" }}
            >
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
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-gray-400"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </li>

            {/* About Us */}
            <li
              className={`border-b border-gray-100 ${
                menuOpen ? "animate-fadeSlideIn" : ""
              }`}
              style={{ animationDelay: menuOpen ? "40ms" : "0ms" }}
            >
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
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-purple">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        mobileExpanded === "about" ? "rotate-45" : ""
                      }`}
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </div>
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
            <li
              className={`border-b border-gray-100 ${
                menuOpen ? "animate-fadeSlideIn" : ""
              }`}
              style={{ animationDelay: menuOpen ? "80ms" : "0ms" }}
            >
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
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-purple">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        mobileExpanded === "services" ? "rotate-45" : ""
                      }`}
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </div>
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
            <li
              className={`border-b border-gray-100 ${
                menuOpen ? "animate-fadeSlideIn" : ""
              }`}
              style={{ animationDelay: menuOpen ? "120ms" : "0ms" }}
            >
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
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-purple">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        mobileExpanded === "conditions" ? "rotate-45" : ""
                      }`}
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </div>
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
            <li
              className={`border-b border-gray-100 ${
                menuOpen ? "animate-fadeSlideIn" : ""
              }`}
              style={{ animationDelay: menuOpen ? "160ms" : "0ms" }}
            >
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
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-purple">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        mobileExpanded === "branches" ? "rotate-45" : ""
                      }`}
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </div>
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
            <li
              className={`border-b border-gray-100 ${
                menuOpen ? "animate-fadeSlideIn" : ""
              }`}
              style={{ animationDelay: menuOpen ? "200ms" : "0ms" }}
            >
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
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-gray-400"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </li>

            {/* Contact Us */}
            <li
              className={`border-b border-gray-100 ${
                menuOpen ? "animate-fadeSlideIn" : ""
              }`}
              style={{ animationDelay: menuOpen ? "240ms" : "0ms" }}
            >
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
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-gray-400"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </li>

            {/* Blog */}
            <li
              className={`border-b border-gray-100 ${
                menuOpen ? "animate-fadeSlideIn" : ""
              }`}
              style={{ animationDelay: menuOpen ? "280ms" : "0ms" }}
            >
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
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-gray-400"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </li>
          </ul>

          {/* Book Appointment button at bottom */}
          <div className="p-5 border-t border-gray-200 bg-white sticky bottom-0">
            <Link
              href="/book-appointment"
              onClick={toggleMenu}
              className="block w-full bg-purple text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-purple-dark hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}