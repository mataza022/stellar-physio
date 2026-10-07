import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Get other services for the sidebar
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 5);

  // Pre-selected booking link for this service
  const bookHref = `/book-appointment?service=${encodeURIComponent(service.title)}`;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <img
          src={service.heroImageMobile || service.heroImage}
          alt={service.title}
          className={`absolute inset-0 w-full h-full object-cover ${service.heroImageMobile ? 'md:hidden' : ''}`}
        />
        {service.heroImageMobile && (
          <img
            src={service.heroImage}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
          />
        )}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container-custom relative z-10 text-white">
          <p className="text-sm mb-2 opacity-80 uppercase tracking-wider font-semibold">
            Clinical Services / {service.title}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold">{service.title}</h1>
        </div>
      </section>

      {/* MAIN CONTENT & SIDEBAR */}
      <section className="py-16">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          
          {/* LEFT COLUMN — MAIN CONTENT */}
          <div className="space-y-8">
            
            {/* OVERVIEW SECTION */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-purple mb-6 border-b border-gray-100 pb-3">
                Overview
              </h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2 h-72 rounded-lg overflow-hidden shadow-md flex-shrink-0">
                  <img
                    src={service.introImage}
                    alt={service.introTitle}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-bold text-purple mb-3">{service.introTitle}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{service.introText}</p>
                </div>
              </div>
            </div>

            {/* WHAT WE OFFER / TECHNIQUES */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-purple mb-6 border-b border-gray-100 pb-3">
                {service.offeringsTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.offeringsList.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg border border-gray-100 h-full">
                    <div className="w-5 h-5 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WHY CHOOSE US (Stacked for better readability) */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-purple mb-6 border-b border-gray-100 pb-3">
                {service.whyChooseTitle}
              </h2>
              <ul className="space-y-3">
                {service.whyChooseList.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm text-gray-700">
                    <span className="text-green font-bold text-lg leading-none mt-0.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PRICING (Separate card for emphasis) */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-purple mb-6 border-b border-gray-100 pb-3">
                {service.pricingTitle}
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {service.pricingText}
              </p>
            </div>

            {/* FAQS (If applicable) */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-purple mb-6 border-b border-gray-100 pb-3">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-5">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                      <h3 className="font-bold text-gray-800 mb-2">{faq.question}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* RIGHT SIDEBAR (Sticky & Populated) */}
          <aside className="space-y-6 lg:sticky lg:top-24 h-fit">
            
            {/* Need Help CTA */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-purple mb-2">Need Help?</h3>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                Contact us directly to book a session or for urgent enquiries.
              </p>
              <div className="space-y-3 text-sm mb-5">
                <a href="tel:+254706101999" className="flex items-center gap-3 text-gray-700 hover:text-purple transition font-medium">
                  <svg className="w-4 h-4 text-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +254 706 101 999
                </a>
                <a href="mailto:info@stellarphysio.com" className="flex items-center gap-3 text-gray-700 hover:text-purple transition font-medium break-all">
                  <svg className="w-4 h-4 text-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  info@stellarphysio.com
                </a>
              </div>
              <Link
                href={bookHref}
                className="block w-full text-center bg-purple text-white py-3 rounded font-semibold hover:bg-purple-dark transition text-sm"
              >
                Book Appointment
              </Link>
            </div>

            {/* Opening Hours */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-purple mb-4">Opening Hours</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span className="font-semibold text-gray-800">8am - 6pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold text-gray-800">8am - 4pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-red-500">Closed</span>
                </li>
              </ul>
            </div>

            {/* Other Services Quick Links */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-purple mb-4">Other Services</h3>
              <ul className="space-y-2">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-sm text-gray-600 hover:text-purple transition flex items-start gap-2 leading-snug"
                    >
                      <span className="text-green font-bold flex-shrink-0">›</span>
                      <span>{s.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link href="/services" className="text-xs font-semibold text-purple hover:underline">
                  View All Services →
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-green text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {service.ctaTitle}
          </h2>
          <div className="w-40 border-b-2 border-white mx-auto mb-6"></div>
          <p className="text-lg mb-8 opacity-90 whitespace-pre-line">
            {service.ctaText}
          </p>
          <Link
            href={bookHref}
            className="inline-block bg-purple text-white px-8 py-3 rounded font-semibold hover:bg-purple-dark transition"
          >
            {service.ctaButtonText}
          </Link>
        </div>
      </section>
    </div>
  );
}