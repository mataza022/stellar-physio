"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getFAQs, type FAQ } from "@/lib/faqs";

const DEFAULT_CATEGORIES = [
  "Appointments & Visits",
  "Pricing",
  "Insurance & Billing",
  "Services & Care",
  "Clinic Hours & Locations",
  "Homecare",
];

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("Appointments & Visits");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFAQs();
        setFaqs(data);
      } catch (error) {
        console.error("Failed to load FAQs. Check your Firestore rules:", error);
      } finally {
        setLoading(false); // Always stop loading, even if there is an error
      }
    };
    fetchData();
  }, []);

  const filteredFaqs = faqs.filter((f) => f.category === activeCategory);
  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <section className="pt-20 pb-8 bg-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Answers about booking, pricing, insurance, services, our clinics and
            home-based care at Stellar Physio.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {DEFAULT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition ${
                  activeCategory === cat
                    ? "bg-purple text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-purple hover:text-purple"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {activeCategory === "Pricing" && (
            <div className="mb-10 rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-white">
              <img
                src="/images/pricingguide.jpeg"
                alt="Stellar Physio Pricing Guide & Accepted Insurances"
                className="w-full h-auto object-contain"
              />
            </div>
          )}

          {loading ? (
            <p className="text-center text-gray-500 py-10">Loading FAQs...</p>
          ) : (
            <div className="space-y-3">
              {filteredFaqs.length === 0 ? (
                <p className="text-center text-gray-500 py-10">No FAQs in this category yet.</p>
              ) : (
                filteredFaqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
                    <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden transition-shadow hover:shadow-sm">
                      <button
                        onClick={() => toggle(index)}
                        className="w-full flex items-center justify-between text-left px-5 py-4 bg-white hover:bg-gray-50 transition"
                        aria-expanded={isOpen}
                      >
                        <span className="font-bold text-gray-800 pr-4 text-sm md:text-base">
                          {faq.question}
                        </span>
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white transition-transform ${
                            isOpen ? "bg-purple rotate-0" : "bg-purple-light text-purple"
                          }`}
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 text-gray-600 bg-white text-sm leading-relaxed whitespace-pre-wrap">
                          {faq.answer.split(/(\s+)/).map((word, i) => {
                            if (word.startsWith("http://") || word.startsWith("https://")) {
                              const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
                                <a
                                  key={i}
                                  href={word}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-purple underline hover:text-purple-dark font-semibold"
                                >
                                  {word}
                                </a>
                              );
                            }
                            return <span key={i}>{word}</span>;
                          })}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          )}

          <div className="mt-12 text-center bg-purple-light rounded-lg p-8">
            <h2 className="text-2xl font-bold text-purple mb-3">Still have questions?</h2>
            <p className="text-gray-600 mb-6 text-sm">
              Our team is happy to help. Reach out and we&apos;ll get back to you shortly.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="bg-purple text-white px-6 py-2.5 rounded font-semibold hover:bg-purple-dark transition text-sm">
                Contact Us
              </Link>
              <a href="https://api.whatsapp.com/send?phone=254719881291" target="_blank" rel="noopener noreferrer" className="bg-green text-white px-6 py-2.5 rounded font-semibold hover:bg-green-dark transition text-sm">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
