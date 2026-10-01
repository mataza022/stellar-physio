import Link from "next/link";

export default function CareersPage() {
  return (
    <>
      {/* HERO BANNER */}
      <section
        className="relative h-[350px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/careers-hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold">Careers</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple mb-6">
            Join Our Team
          </h2>
          <p className="text-gray-700 mb-4">
            At Stellar Physio Health and Wellness Centre, we are committed to
            delivering top-tier medical services in physiotherapy, wellness,
            and sports rehabilitation. Our goal is to support individuals in
            recovery from injuries and illness while also promoting
            physiotherapy as a proactive lifestyle choice to enhance
            performance—whether at work or in sports.
          </p>
        </div>
      </section>

      {/* EMPTY STATE */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-2xl text-center">
          <div className="bg-white border border-gray-200 rounded-lg p-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-light flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5c2c7e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-purple mb-3">
              No Current Openings
            </h3>
            <p className="text-gray-600 mb-8">
              We currently have no open positions. Please check back soon, or
              send your CV to the email below and we&apos;ll keep it on file for
              future opportunities.
            </p>
            <a
              href="mailto:hr@stellarphysio.co.ke"
              className="inline-block bg-green text-white px-6 py-3 rounded font-semibold hover:bg-green-dark transition"
            >
              Send Your CV
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-purple-light mb-8 max-w-2xl mx-auto">
            Follow us on social media to be the first to know when new
            positions open up.
          </p>
          <Link
            href="/book-appointment"
            className="inline-block border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-purple transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}