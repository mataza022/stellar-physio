"use client";

import { useState } from "react";
import Link from "next/link";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function ParklandsSportsClubPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Consultation & Clinic",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setErrorMessage("Please fill in your name, email, and message.");
      return;
    }

    setSubmitting(true);

    try {
      await addDoc(collection(db, "branch_messages"), {
        branch: "Parklands Sports Club",
        branchSlug: "parklands-sports-club",
        fullName: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        service: formData.service,
        message: formData.message.trim(),
        status: "new",
        source: "website-branch-form",
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Branch message submission failed:", error);
      setErrorMessage(
        "We couldn't send your message. Please check your internet connection and try again, or call us directly at +254 755 901 942."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* HERO — Parklands Sports Club */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/parklandsbranch.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Parklands Sports Club
          </h1>
        </div>
      </section>

      {/* MAP + CONTACT FORM */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div>
            <div className="bg-purple-light rounded-lg overflow-hidden h-[480px] relative">
              <iframe
                src="https://maps.google.com/maps?q=Parklands+Sports+Club+3+49+Parklands+Rd+Nairobi&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Parklands Sports Club"
              ></iframe>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Parklands+Sports+Club+3+49+Parklands+Rd+Nairobi"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-purple font-semibold mt-4 hover:underline"
            >
              Get Directions to Parklands Sports Club
            </a>
          </div>

          {/* Contact Form / Success State */}
          <div>
            {submitted ? (
              <div className="bg-green/5 border border-green/20 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-purple mb-3">
                  Message Sent
                </h2>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Our
                  Parklands team has received your message and will get back to
                  you shortly at <strong>{formData.email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      service: "Consultation & Clinic",
                      message: "",
                    });
                  }}
                  className="text-sm text-purple font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-purple mb-2">
                  Contact Us
                </h2>
                <p className="text-gray-600 mb-8">Drop us a line...</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      disabled={submitting}
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple disabled:bg-gray-50"
                    />
                    <input
                      type="email"
                      required
                      disabled={submitting}
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple disabled:bg-gray-50"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      disabled={submitting}
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple disabled:bg-gray-50"
                    />
                    <select
                      disabled={submitting}
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple bg-white text-gray-700 disabled:bg-gray-50"
                    >
                      <option>Consultation &amp; Clinic</option>
                      <option>Physiotherapy Session</option>
                      <option>Laboratory Services</option>
                      <option>Pharmacy</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>
                  <textarea
                    required
                    disabled={submitting}
                    placeholder="Message *"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple resize-none disabled:bg-gray-50"
                  ></textarea>

                  {errorMessage && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className={`px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition ${
                      submitting
                        ? "bg-purple/70 text-white cursor-wait"
                        : "bg-purple text-white hover:bg-purple-dark"
                    }`}
                  >
                    {submitting ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARDS — CLICKABLE */}
      <section className="py-16 bg-purple">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email — clickable */}
          <a
            href="mailto:info@stellarphysio.com"
            className="group bg-white rounded-lg p-6 flex items-center gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-purple flex items-center justify-center text-white flex-shrink-0 group-hover:bg-purple-dark transition">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 6 10-6" />
              </svg>
            </div>
            <span className="text-gray-800 font-semibold group-hover:text-purple transition">
              info@stellarphysio.com
            </span>
          </a>

          {/* Phone — clickable */}
          <a
            href="tel:+254755901942"
            className="group bg-white rounded-lg p-6 flex items-center gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-purple flex items-center justify-center text-white flex-shrink-0 group-hover:bg-purple-dark transition">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span className="text-gray-800 font-semibold group-hover:text-purple transition">
              +254 755 901942
            </span>
          </a>

          {/* Location — clickable, opens Google Maps */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Parklands+Sports+Club+3+49+Parklands+Rd+Nairobi"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-lg p-6 flex items-center gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-purple flex items-center justify-center text-white flex-shrink-0 group-hover:bg-purple-dark transition">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <span className="text-gray-800 font-semibold group-hover:text-purple transition">
              Parklands Sports Club
            </span>
          </a>
        </div>
      </section>
    </>
  );
}