"use client";

import { useState } from "react";
import Link from "next/link";

type FAQ = {
  question: string;
  answer: string;
  category: string;
};

const categories = [
  "Appointments & Visits",
  "Pricing",
  "Insurance & Billing",
  "Services & Care",
  "Clinic Hours & Locations",
  "Homecare",
];

const faqs: FAQ[] = [
  // Appointments & Visits
  {
    category: "Appointments & Visits",
    question: "How do I book a physiotherapy appointment?",
    answer:
      "You can book an appointment through the Book Appointment page on our website, or by calling your nearest branch directly. Our team will confirm your date and time shortly after you submit your request.",
  },
  {
    category: "Appointments & Visits",
    question: "Do I need a doctor's referral to see a physiotherapist?",
    answer:
      "No, you do not need a doctor's referral to see a physiotherapist at Stellar Physio. You can book directly. However, if your insurance provider requires a referral for reimbursement, please obtain one beforehand.",
  },
  {
    category: "Appointments & Visits",
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring a valid ID, your insurance card (if applicable), any relevant medical reports or scans, and comfortable clothing that allows easy movement of the area being treated.",
  },
  {
    category: "Appointments & Visits",
    question: "How do I choose the right branch?",
    answer:
      "We have branches at Kenital Plaza (Ngong Road), Karen Country Club, and Parklands Sports Club. Choose the one closest to you, or the one with the specialist best suited to your condition. You can also call us and we'll recommend the best option.",
  },
  {
    category: "Appointments & Visits",
    question: "What happens during my first session?",
    answer:
      "Your first session includes a thorough assessment of your condition, medical history, and movement patterns. Your physiotherapist will discuss findings, outline a treatment plan, and usually begin treatment on the same day.",
  },
  {
    category: "Appointments & Visits",
    question: "How early should I arrive?",
    answer:
      "Please arrive 10–15 minutes before your scheduled appointment so we can complete any necessary paperwork and get you settled in without delay.",
  },
  {
    category: "Appointments & Visits",
    question: "Can I reschedule or cancel my appointment?",
    answer:
      "Yes. We kindly ask for at least 24 hours' notice for cancellations or rescheduling so we can offer the slot to another patient. Please call or WhatsApp your branch to make changes.",
  },

  // Pricing
  {
    category: "Pricing",
    question: "How much does a physiotherapy session cost?",
    answer:
      "Session fees vary based on the type of treatment, the therapist, and the duration. Please contact your preferred branch for our current price list, or ask about our wellness packages for additional savings.",
  },
  {
    category: "Pricing",
    question: "Do you offer package discounts?",
    answer:
      "Yes. We offer bundled wellness packages (such as the Restart and Rebuild programs) that combine physiotherapy, massage, and counselling at a discounted rate compared to individual sessions.",
  },
  {
    category: "Pricing",
    question: "How do I pay for my sessions?",
    answer:
      "We accept cash, M-Pesa, and major debit/credit cards. If you're using insurance, we'll bill the insurer directly for covered services after verifying your policy.",
  },
  {
    category: "Pricing",
    question: "Are home-based care visits more expensive?",
    answer:
      "Home-based visits include a small call-out fee on top of the standard session fee to cover travel. Contact us for a personalised quote based on your location.",
  },

  // Insurance & Billing
  {
    category: "Insurance & Billing",
    question: "Which insurance providers do you accept?",
    answer:
      "We work with most major insurance providers in Kenya, including AAR, Britam, Old Mutual, Minet, CIC, and others. Please confirm with your branch or your insurer before your visit.",
  },
  {
    category: "Insurance & Billing",
    question: "Do you bill insurance directly?",
    answer:
      "Yes, for most insurers we can bill directly after verifying your coverage and obtaining pre-authorization. For some providers, you may need to pay upfront and claim reimbursement yourself.",
  },
  {
    category: "Insurance & Billing",
    question: "What if my insurance doesn't cover the full amount?",
    answer:
      "Any shortfall between the insurer's coverage and the total session cost is your responsibility and can be settled via cash, M-Pesa, or card.",
  },
  {
    category: "Insurance & Billing",
    question: "Can I get a receipt for reimbursement?",
    answer:
      "Yes. We issue receipts for every payment, and can provide detailed invoices for insurance reimbursement if required.",
  },

  // Services & Care
  {
    category: "Services & Care",
    question: "What conditions do you treat?",
    answer:
      "We treat a wide range of conditions including lower back pain, sports injuries, arthritis, post-surgical rehabilitation, stroke recovery, and musculoskeletal pain. We also offer counselling, nutritional services, and wellness programs.",
  },
  {
    category: "Services & Care",
    question: "How many sessions will I need?",
    answer:
      "This depends on your condition. Some patients see improvements in 2–3 sessions, while chronic conditions may require a longer treatment plan. Your therapist will give you an estimate after your initial assessment.",
  },
  {
    category: "Services & Care",
    question: "Do you offer virtual consultations?",
    answer:
      "Yes. We offer virtual consultations for follow-up sessions, exercise guidance, and counselling. Contact your branch to arrange a virtual appointment.",
  },
  {
    category: "Services & Care",
    question: "Do you treat children?",
    answer:
      "Yes. We offer paediatric physiotherapy and occupational therapy for children, including support for Autism Spectrum Disorder, Cerebral Palsy, and developmental delays.",
  },

  // Clinic Hours & Locations
  {
    category: "Clinic Hours & Locations",
    question: "What are your clinic hours?",
    answer:
      "Our clinics are open Monday–Friday from 8:00am to 6:00pm, and Saturdays from 8:00am to 4:00pm. We are closed on Sundays and public holidays.",
  },
  {
    category: "Clinic Hours & Locations",
    question: "Where are your branches located?",
    answer:
      "We have three branches: Kenital Plaza on Ngong Road, Karen Country Club, and Parklands Sports Club. Visit our Branches page for addresses, phone numbers, and directions.",
  },
  {
    category: "Clinic Hours & Locations",
    question: "Is parking available?",
    answer:
      "Yes. All our branches have accessible parking for patients. If you're unsure where to park, give your branch a call and we'll guide you.",
  },

  // Homecare
  {
    category: "Homecare",
    question: "What is home-based care?",
    answer:
      "Home-based care brings physiotherapy, massage, and rehabilitation services to your home. It's ideal for patients with mobility challenges, the elderly, or those recovering from surgery.",
  },
  {
    category: "Homecare",
    question: "Which areas do you cover for home visits?",
    answer:
      "We cover most areas across Nairobi and the surrounding suburbs. Contact us with your location and we'll confirm availability and any travel fees.",
  },
  {
    category: "Homecare",
    question: "How do I book a home visit?",
    answer:
      "Call Dial-A-Physio on 0719 881 291 or WhatsApp us at 0719 881 2913. We'll match you with a therapist and schedule a convenient time.",
  },
  {
    category: "Homecare",
    question: "Do I need any special equipment at home?",
    answer:
      "No special equipment is required. Our therapists bring portable equipment as needed. For some conditions, we may recommend simple items like resistance bands or a yoga mat, which we can advise you on.",
  },
];

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("Appointments & Visits");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqs.filter((f) => f.category === activeCategory);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* CLEAN PAGE HEADER (No Hero Image) */}
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

      {/* FAQ SECTION */}
      <section className="pb-20 bg-white">
        <div className="container-custom max-w-4xl">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
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

          {/* FAQ Items */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="border border-gray-200 rounded-lg overflow-hidden transition-shadow hover:shadow-sm"
                >
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
                        isOpen
                          ? "bg-purple rotate-0"
                          : "bg-purple-light text-purple"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-gray-600 bg-white text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA at bottom */}
          <div className="mt-12 text-center bg-purple-light rounded-lg p-8">
            <h3 className="text-2xl font-bold text-purple mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              Our team is happy to help. Reach out and we&apos;ll get back to
              you shortly.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="bg-purple text-white px-6 py-2.5 rounded font-semibold hover:bg-purple-dark transition text-sm"
              >
                Contact Us
              </Link>
              <a
                href="https://api.whatsapp.com/send?phone=254719881291"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green text-white px-6 py-2.5 rounded font-semibold hover:bg-green-dark transition text-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}