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
          <div className="leading-relaxed">
            Kenital Plaza, Ngong Road: +254 706 101999 || Parklands: +254 755
            901942 || Karen Country Club: +254 739 110110
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container-custom flex justify-between items-center py-3 md:py-4 relative">
          <button
            onClick={toggleMenu}
            className="text-3xl text-purple absolute left-0 hidden"
            aria-label="Open menu"
          >
            &#9776;
          </button>

          <Link href="/" className="mx-auto lg:mx-0 flex items-center">
            <img
              src="/images/Stellarphysio_NEW_logo.png"
              alt="Stellar Physio"
              className="h-20 md:h-32 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="flex items-center gap-6 text-sm">
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

          <Link
            href="/book-appointment"
            className="inline-block bg-purple text-white px-5 py-2 rounded font-semibold hover:bg-purple-dark transition text-sm"
          >
            Appointment
          </Link>
        </div>
      </header>

      {/* MOBILE SLIDE-OUT MENU */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div onClick={toggleMenu} className="absolute inset-0 bg-black/60"></div>

        <div
          className={`absolute top-0 left-0 h-full w-[85%] max-w-[350px] bg-white shadow-2xl transform transition-transform overflow-y-auto ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 w-10 h-10 bg-purple text-white rounded-full flex items-center justify-center text-lg font-bold z-10"
            aria-label="Close menu"
          >
            X
          </button>

          <div className="pt-16 pb-4 px-6 bg-purple-light border-b border-purple-light">
            <div className="h-12 w-32 mx-auto bg-white rounded flex items-center justify-center text-purple font-bold text-xs">
              Stellar Physio
            </div>
          </div>

          <ul className="mt-4">
            <li className="border-b border-gray-100">
              <Link
                href="/"
                onClick={toggleMenu}
                className="flex items-center px-5 py-4 text-purple-dark font-semibold hover:bg-purple-light"
              >
                <span className="text-purple mr-3 font-bold">{">"}</span> Home
              </Link>
            </li>

            <li className="border-b border-gray-100">
              <button
                onClick={() => toggleMobileSub("about")}
                className="w-full flex items-center justify-between px-5 py-4 text-purple-dark font-semibold hover:bg-purple-light"
              >
                <span className="flex items-center">
                  <span className="text-purple mr-3 font-bold">{">"}</span> About Us
                </span>
                <span className="bg-purple-light text-purple w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                  {mobileExpanded === "about" ? "−" : "+"}
                </span>
              </button>
              {mobileExpanded === "about" && (
                <ul className="bg-gray-50 pl-8">
                  <li className="border-b border-gray-100">
                    <Link
                      href="/about"
                      onClick={toggleMenu}
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-purple-light"
                    >
                      Overview
                    </Link>
                  </li>
                  {aboutDropdown.map((item) => (
                    <li key={item.href} className="border-b border-gray-100">
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-purple-light"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="border-b border-gray-100">
              <button
                onClick={() => toggleMobileSub("services")}
                className="w-full flex items-center justify-between px-5 py-4 text-purple-dark font-semibold hover:bg-purple-light"
              >
                <span className="flex items-center">
                  <span className="text-purple mr-3 font-bold">{">"}</span> Services
                </span>
                <span className="bg-purple-light text-purple w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                  {mobileExpanded === "services" ? "−" : "+"}
                </span>
              </button>
              {mobileExpanded === "services" && (
                <ul className="bg-gray-50 pl-8">
                  {servicesDropdown.map((item) => (
                    <li key={item.href} className="border-b border-gray-100">
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-purple-light"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="border-b border-gray-100">
              <button
                onClick={() => toggleMobileSub("conditions")}
                className="w-full flex items-center justify-between px-5 py-4 text-purple-dark font-semibold hover:bg-purple-light"
              >
                <span className="flex items-center">
                  <span className="text-purple mr-3 font-bold">{">"}</span> Conditions
                </span>
                <span className="bg-purple-light text-purple w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                  {mobileExpanded === "conditions" ? "−" : "+"}
                </span>
              </button>
              {mobileExpanded === "conditions" && (
                <ul className="bg-gray-50 pl-8">
                  {conditionsDropdown.map((item) => (
                    <li key={item.href} className="border-b border-gray-100">
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-purple-light"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="border-b border-gray-100">
              <button
                onClick={() => toggleMobileSub("branches")}
                className="w-full flex items-center justify-between px-5 py-4 text-purple-dark font-semibold hover:bg-purple-light"
              >
                <span className="flex items-center">
                  <span className="text-purple mr-3 font-bold">{">"}</span> Branches
                </span>
                <span className="bg-purple-light text-purple w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                  {mobileExpanded === "branches" ? "−" : "+"}
                </span>
              </button>
              {mobileExpanded === "branches" && (
                <ul className="bg-gray-50 pl-8">
                  {branchesDropdown.map((item) => (
                    <li key={item.href} className="border-b border-gray-100">
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-purple-light"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="border-b border-gray-100">
              <Link
                href="/faqs"
                onClick={toggleMenu}
                className="flex items-center px-5 py-4 text-purple-dark font-semibold hover:bg-purple-light"
              >
                <span className="text-purple mr-3 font-bold">{">"}</span> FAQs
              </Link>
            </li>
            <li className="border-b border-gray-100">
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="flex items-center px-5 py-4 text-purple-dark font-semibold hover:bg-purple-light"
              >
                <span className="text-purple mr-3 font-bold">{">"}</span> Contact Us
              </Link>
            </li>
            <li className="border-b border-gray-100">
              <Link
                href="/blog"
                onClick={toggleMenu}
                className="flex items-center px-5 py-4 text-purple-dark font-semibold hover:bg-purple-light"
              >
                <span className="text-purple mr-3 font-bold">{">"}</span> Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}