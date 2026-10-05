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
          <p className="text-sm mb-2 opacity-80">Clinical Services / {service.title}</p>
          <h1 className="text-4xl md:text-6xl font-bold">{service.title}</h1>
        </div>
      </section>

      {/* MAIN CONTENT & SIDEBAR */}
      <section className="py-16">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          
          {/* LEFT COLUMN */}
          <div className="space-y-12">
            
            {/* OVERVIEW */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-purple mb-4 border-b border-gray-200 pb-2">
                Overview
              </h2>
              <div className="flex flex-col md:flex-row gap-8 items-start mt-6">
                <img
                  src={service.introImage}
                  alt={service.introTitle}
                  className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow"
                />
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-bold text-purple mb-3">{service.introTitle}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{service.introText}</p>
                </div>
              </div>
            </div>

            {/* WHAT WE OFFER / TECHNIQUES */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-purple mb-6 border-b border-gray-200 pb-2">
                {service.offeringsTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.offeringsList.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WHY CHOOSE US & PRICING */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h2 className="text-2xl font-bold text-purple mb-4 border-b border-gray-200 pb-2">
                    {service.whyChooseTitle}
                  </h2>
                  <ul className="space-y-3 mt-4">
                    {service.whyChooseList.map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-sm text-gray-700">
                        <span className="text-green font-bold text-lg leading-none">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-purple mb-4 border-b border-gray-200 pb-2">
                    {service.pricingTitle}
                  </h2>
                  <p className="text-gray-700 text-sm mt-4 leading-relaxed">
                    {service.pricingText}
                  </p>
                </div>
              </div>
            </div>

            {/* FAQS (If applicable) */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-purple mb-6 border-b border-gray-200 pb-2">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx}>
                      <h3 className="font-bold text-gray-800 mb-2">{faq.question}</h3>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-purple mb-4">Need Help?</h3>
              <div className="space-y-3 text-sm">
                <a href="tel:+254706101999" className="flex items-center gap-3 text-gray-700 hover:text-purple transition">
                  <svg className="w-5 h-5 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +254 706 101 999
                </a>
                <a href="mailto:info@stellarphysio.com" className="flex items-center gap-3 text-gray-700 hover:text-purple transition">
                  <svg className="w-5 h-5 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  info@stellarphysio.com
                </a>
              </div>
              <Link
                href="/book-appointment"
                className="block w-full text-center bg-purple text-white py-3 rounded font-semibold hover:bg-purple-dark transition mt-6 text-sm"
              >
                Book Appointment
              </Link>
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
            href="/book-appointment"
            className="inline-block bg-purple text-white px-8 py-3 rounded font-semibold hover:bg-purple-dark transition"
          >
            {service.ctaButtonText}
          </Link>
        </div>
      </section>
    </div>
  );
}