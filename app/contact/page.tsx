"use client";

import { useState } from "react";
import Link from "next/link";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const branches = [
  {
    name: "Kenital Plaza, Ngong Road",
    mapEmbed:
      "https://www.google.com/maps?q=-1.298749885724835,36.79962250991531&z=15&output=embed",
    mapLink:
      "https://www.google.com/maps/dir/?api=1&destination=-1.298749885724835,36.79962250991531",
  },
  {
    name: "Karen Country Club",
    mapEmbed:
      "https://www.google.com/maps?q=-1.3405045,36.7150441&z=14&output=embed",
    mapLink: "https://maps.app.goo.gl/awTP1u9pHbDZnSuz6",
  },
  {
    name: "Parklands Sports Club",
    mapEmbed:
      "https://maps.google.com/maps?q=Parklands+Sports+Club+3+49+Parklands+Rd+Nairobi&z=14&output=embed",
    mapLink:
      "https://www.google.com/maps/dir/?api=1&destination=Parklands+Sports+Club+3+49+Parklands+Rd+Nairobi",
  },
];

export default function ContactPage() {
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

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in your name, email, and message.");
      return;
    }

    setSubmitting(true);

    try {
      await addDoc(collection(db, "contact"), {
        fullName: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        service: formData.service,
        message: formData.message.trim(),
        status: "new",
        source: "website-contact-form",
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setErrorMessage(
        "We couldn't send your message. Please check your internet connection and try again, or email us directly at info@stellarphysio.com."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* CLEAN PAGE HEADER */}
      <section className="pt-20 pb-8 bg-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Get in touch with us or drop by any of our branches across Nairobi.
          </p>
        </div>
      </section>

      {/* MAP + CONTACT FORM */}
      <section className="pb-16 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Map — Kenital Plaza */}
          <div>
            <div className="bg-purple-light rounded-lg overflow-hidden h-[480px] relative">
              <iframe
                src={branches[0].mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={branches[0].name}
              ></iframe>
            </div>
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
                  Thank you, <strong>{formData.fullName}</strong>. We&apos;ve
                  received your message and will get back to you shortly at{" "}
                  <strong>{formData.email}</strong>.
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
                <h2 className="text-2xl md:text-3xl font-bold text-purple mb-2">
                  Drop us a line
                </h2>
                <p className="text-gray-600 mb-6 text-sm">
                  Fill in the form below and we&apos;ll get back to you shortly.
                </p>

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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm disabled:bg-gray-50"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm disabled:bg-gray-50"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm disabled:bg-gray-50"
                    />
                    <select
                      disabled={submitting}
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple bg-white text-gray-700 text-sm disabled:bg-gray-50"
                    >
                      <option>Consultation &amp; Clinic</option>
                      <option>Physiotherapy Session</option>
                      <option>Laboratory Services</option>
                      <option>Pharmacy</option>
                      <option>Counselling Services</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>
                  <textarea
                    required
                    disabled={submitting}
                    placeholder="Message *"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple resize-none text-sm disabled:bg-gray-50"
                  ></textarea>

                  {errorMessage && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className={`px-6 py-3 rounded font-semibold transition text-sm flex items-center gap-2 ${
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

      {/* KAREN + PARKLANDS MAPS SIDE BY SIDE */}
      <section className="pb-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-purple text-center mb-2">
            Other Branches
          </h2>
          <p className="text-gray-600 text-center mb-10 text-sm">
            Visit us at any of our other convenient locations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {branches.slice(1).map((b) => (
              <div key={b.name}>
                <h3 className="text-xl font-bold text-purple mb-3 text-center">
                  {b.name}
                </h3>
                <div className="bg-purple-light rounded-lg overflow-hidden h-[320px] relative mb-3">
                  <iframe
                    src={b.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={b.name}
                  ></iframe>
                </div>
                <a
                  href={b.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-purple font-semibold hover:underline text-sm"
                >
                  Get Directions &#8594;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-16 bg-purple">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Quick Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <span className="text-gray-800 font-semibold group-hover:text-purple transition text-sm">
                info@stellarphysio.com
              </span>
            </a>

            <a
              href="tel:+254719881291"
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
              <span className="text-gray-800 font-semibold group-hover:text-purple transition text-sm">
                +254 719 881 291
              </span>
            </a>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=-1.298749885724835,36.79962250991531"
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
              <span className="text-gray-800 font-semibold group-hover:text-purple transition text-sm">
                Kenital Plaza, Ngong Road
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}