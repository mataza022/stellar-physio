import Link from "next/link";

export default function LaboratoryServicesPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Stellar Laboratory Services
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-purple-light rounded-lg h-[420px] flex items-center justify-center text-purple font-semibold">
            Lab Photo
          </div>
          <div>
            <p className="text-green font-bold tracking-widest uppercase text-sm mb-3">
              Stellar Laboratory Services
            </p>
            <h2 className="text-3xl font-bold text-purple mb-4">
              Testing For a Healthier Tomorrow!
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700">
              At Stellar Physio Health &amp; Wellness Centre, we understand that
              accurate and timely diagnostic tests are a cornerstone of
              effective healthcare. Our state-of-the-art laboratory services
              are designed to provide reliable results, supporting your journey
              toward optimal health and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our Laboratory Services?
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-6"></div>
          <p className="text-purple-light mb-8">
            Our laboratory is equipped with advanced technology and staffed by
            experienced professionals committed to delivering:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-purple-light mb-10">
            <li>
              <strong className="text-white">Precision:</strong> Accurate and
              reliable test results.
            </li>
            <li>
              <strong className="text-white">Efficiency:</strong> Timely services
              to minimize waiting periods.
            </li>
            <li>
              <strong className="text-white">Affordability:</strong> Competitive
              pricing without compromising on quality.
            </li>
            <li>
              <strong className="text-white">Convenience:</strong> Accessible
              locations in Nairobi, including Ngong Road, Karen, and Westlands.
            </li>
          </ol>

          <Link
            href="/book-appointment"
            className="inline-block bg-white text-purple px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* COMPREHENSIVE TESTING SERVICES */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-purple-light rounded-lg h-[560px] flex items-center justify-center text-purple font-semibold">
            Lab Interior Photo
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple mb-4">
              Comprehensive Testing Services
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700 mb-6">
              We offer a wide range of laboratory tests tailored to meet your
              unique healthcare needs, including:
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                <span>
                  <strong>Routine Checkups:</strong> General health screenings
                  and blood work to monitor your overall well-being.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                <span>
                  <strong>Specialized Testing:</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Hormonal profiles</li>
                    <li>Thyroid function tests</li>
                    <li>Diabetes screening and monitoring</li>
                  </ul>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                <span>
                  <strong>Infectious Disease Testing:</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Malaria and typhoid tests</li>
                    <li>COVID-19 PCR and antigen tests</li>
                  </ul>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                <span>
                  <strong>Pre-Employment Screening:</strong> Comprehensive
                  medical tests for new hires.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                <span>
                  <strong>Post-Treatment Monitoring:</strong> Follow-up testing
                  to track recovery progress.
                </span>
              </li>
            </ul>
            <Link
              href="/book-appointment"
              className="inline-block bg-purple text-white px-6 py-3 rounded font-semibold hover:bg-purple-dark transition mt-8"
            >
              Book Appointment Today!
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-purple text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>

        <div className="container-custom max-w-5xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            How It Works
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-16 mx-auto"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center relative">
            <div className="hidden md:block absolute top-14 left-[16%] right-[16%] h-1 border-t-2 border-dashed border-white/30"></div>

            <div className="relative group">
              <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-white/10 border-2 border-white flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-purple shadow-2xl">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <path d="M9 16l2 2 4-4" />
                </svg>
              </div>
              <div className="absolute top-2 right-4 md:right-12 w-10 h-10 rounded-full bg-green text-white flex items-center justify-center font-bold text-sm shadow-lg">
                01
              </div>
              <h3 className="text-xl font-bold mb-3">Schedule Your Test</h3>
              <p className="text-purple-light text-sm">
                Book your laboratory appointment online or by phone.
              </p>
            </div>

            <div className="relative group">
              <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-white/10 border-2 border-white flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-purple shadow-2xl">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="absolute top-2 right-4 md:right-12 w-10 h-10 rounded-full bg-green text-white flex items-center justify-center font-bold text-sm shadow-lg">
                02
              </div>
              <h3 className="text-xl font-bold mb-3">Visit Us</h3>
              <p className="text-purple-light text-sm">
                Drop by our conveniently located branches for sample
                collection.
              </p>
            </div>

            <div className="relative group">
              <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-white/10 border-2 border-white flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-purple shadow-2xl">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                  <line x1="9" y1="18" x2="13" y2="18" />
                </svg>
              </div>
              <div className="absolute top-2 right-4 md:right-12 w-10 h-10 rounded-full bg-green text-white flex items-center justify-center font-bold text-sm shadow-lg">
                03
              </div>
              <h3 className="text-xl font-bold mb-3">Get Results</h3>
              <p className="text-purple-light text-sm">
                Receive your accurate results via email or pick them up in
                person.
              </p>
            </div>
          </div>

          <p className="text-center text-lg font-semibold mt-20">
            Fast, Reliable, and Confidential Testing Every Time.
          </p>
        </div>
      </section>

      {/* CONVENIENCE & ACCESSIBILITY */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-purple mb-4">
              Convenience and Accessibility
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700 mb-8">
              With branches across Nairobi, including{" "}
              <strong>Ngong Road, Karen, and Parklands</strong>, our laboratory
              services are designed to be accessible to everyone. Whether
              you&apos;re searching for &quot;affordable lab services near
              me&quot; or require specialized testing, Stellar Physio is here
              for you.
            </p>

            <h3 className="text-xl font-bold text-purple mb-3">
              Affordable Pricing
            </h3>
            <p className="text-gray-700 mb-8">
              We believe in providing premium diagnostic services at an
              affordable cost. Contact us for a detailed price list or inquire
              about insurance coverage.
            </p>

            <h3 className="text-xl font-bold text-purple mb-3">
              Partnering for Your Health
            </h3>
            <p className="text-gray-700 mb-8">
              Our laboratory works closely with our consultation and
              physiotherapy services, ensuring you receive comprehensive and
              coordinated care.
            </p>

            <Link
              href="/book-appointment"
              className="inline-block bg-purple text-white px-6 py-3 rounded font-semibold hover:bg-purple-dark transition"
            >
              Book Appointment Today!
            </Link>
          </div>

          <div className="bg-purple-light rounded-lg h-[600px] flex items-center justify-center text-purple font-semibold">
            Lab Photo
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Affordable Laboratory Services in Nairobi
          </h2>
          <div className="w-40 border-b-2 border-white mx-auto mb-6"></div>
          <p className="text-lg mb-8 opacity-90">
            Don&apos;t wait to get the answers you need. Stellar Physio Health
            &amp; Wellness Centre is committed to delivering accurate results
            and exceptional care. Call us at <strong>0706 101 999</strong>
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-purple text-white px-8 py-3 rounded font-semibold hover:bg-purple-dark transition"
          >
            Book Appointment Today!
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-purple mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-40 border-b-2 border-purple mb-10"></div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-purple mb-2">
                What lab tests does Stellar Physio offer?
              </h3>
              <p className="text-gray-700">
                We offer routine health screenings, hormonal and thyroid
                profiles, diabetes screening, infectious disease testing
                including malaria, typhoid and COVID-19, pre-employment
                screening, and post-treatment monitoring.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-purple mb-2">
                How do I book a laboratory test?
              </h3>
              <p className="text-gray-700">
                You can book online or by phone, then visit your nearest branch
                for sample collection.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-purple mb-2">
                How will I receive my results?
              </h3>
              <p className="text-gray-700">
                Results are delivered via email or can be picked up in person
                at your branch.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-purple mb-2">
                Which branches offer laboratory services?
              </h3>
              <p className="text-gray-700">
                Laboratory services are available at our Ngong Road, Karen, and
                Parklands branches.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}