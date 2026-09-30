import Link from "next/link";

export default function PharmacyPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Pharmacy</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-purple-light rounded-lg h-[400px] flex items-center justify-center text-purple font-semibold">
            Pharmacy Photo
          </div>
          <div>
            <p className="text-green font-bold tracking-widest uppercase text-sm mb-3">
              Stellar Pharmacy
            </p>
            <h2 className="text-3xl font-bold text-purple mb-4">
              Providing Trusted Medications &amp; Personalized Care.
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700">
              At <strong>Stellar Physio Health &amp; Wellness Centre</strong>,
              we understand the importance of accessible, reliable, and
              high-quality medication for your health journey. Our pharmacy is
              dedicated to ensuring that you receive the right medications and
              professional guidance to support your recovery and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE + PHARMACY SERVICES — PURPLE SECTION */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom max-w-4xl">
          {/* Why Choose */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Stellar Physio Pharmacy?
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-8"></div>

          <ol className="list-decimal list-inside space-y-3 text-purple-light mb-16">
            <li>
              <strong className="text-white">Wide Range of Medications:</strong>{" "}
              From prescription drugs to over-the-counter products, we stock all
              essential medicines to meet your needs.
            </li>
            <li>
              <strong className="text-white">Expert Guidance:</strong> Our
              licensed pharmacists provide personalized advice, ensuring you
              understand your medication and its proper usage.
            </li>
            <li>
              <strong className="text-white">Free Delivery Services:</strong> We
              offer free delivery for prescriptions to your preferred location.
            </li>
            <li>
              <strong className="text-white">Affordable Pricing:</strong> Quality
              medications at competitive rates to make healthcare accessible for
              all.
            </li>
          </ol>

          {/* Pharmacy Services */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Pharmacy Services
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-8"></div>

          <ol className="list-decimal list-inside space-y-6 text-purple-light">
            <li>
              <strong className="text-white">Prescription Medications</strong>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>
                  Comprehensive selection of prescription drugs for various
                  health conditions
                </li>
                <li>Seamless filling of prescriptions from our clinic</li>
                <li>Expert advice on medication usage and interactions</li>
              </ul>
            </li>
            <li>
              <strong className="text-white">
                Over-the-Counter Medications
              </strong>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>
                  Wide range of OTC products, including pain relievers, cold and
                  flu medications, and more.
                </li>
              </ul>
            </li>
            <li>
              <strong className="text-white">Refills and Repeat Prescriptions</strong>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>
                  Convenient options to refill your regular medications without
                  hassle.
                </li>
              </ul>
            </li>
            <li>
              <strong className="text-white">
                Wellness and Preventive Care Products
              </strong>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>
                  Nutritional supplements, vitamins, and other health-enhancing
                  products to support your well-being.
                </li>
              </ul>
            </li>
            <li>
              <strong className="text-white">
                Pediatric and Specialized Care Medications
              </strong>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>
                  Specialized drugs for children, chronic conditions, and
                  post-surgical care.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      {/* DELIVERY + LOCATIONS */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-purple-light rounded-lg h-[420px] flex items-center justify-center text-purple font-semibold">
            Pharmacy Interior Photo
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple mb-4">
              Convenient Free Delivery Services
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700 mb-10">
              We bring the pharmacy to you! Whether you&apos;re at home or the
              office, enjoy free delivery for all prescriptions and refills.
              Call us to arrange a delivery at your convenience.
            </p>

            <h2 className="text-3xl font-bold text-purple mb-4">
              Pharmacy Locations
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700">
              Our pharmacies are strategically located across Nairobi to serve
              you better: <strong>Ngong Road, Kenital Plaza, Karen, Nairobi
              and Parklands and Highridge</strong>. No matter where you are,
              Stellar Physio Pharmacy is just a call away.
            </p>
          </div>
        </div>
      </section>

      {/* AFFORDABLE MEDICATIONS + PARTNERED */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-purple mb-4">
              Affordable Medications
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700 mb-10">
              At Stellar Physio, we believe in making healthcare affordable.
              Our pharmacy provides cost-effective options while maintaining
              the highest quality standards.
            </p>

            <h2 className="text-3xl font-bold text-purple mb-4">
              Partnered for Your Health
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700">
              Our pharmacy works closely with our consultation and specialist
              services, ensuring a comprehensive approach to your care.
            </p>
          </div>
          <div className="bg-purple-light rounded-lg h-[420px] flex items-center justify-center text-purple font-semibold">
            Medication Shelves Photo
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Affordable Pharmaceutical Products in Nairobi
          </h2>
          <div className="w-40 border-b-2 border-white mx-auto mb-6"></div>
          <p className="text-lg mb-8 opacity-90">
            Contact us at <strong>0706 101 999</strong> or visit your nearest
            branch to access affordable and reliable pharmacy services. Your
            health is our priority.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-purple text-white px-8 py-3 rounded font-semibold hover:bg-purple-dark transition"
          >
            Visit Our Online Shop
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
                Does Stellar Physio Pharmacy offer delivery?
              </h3>
              <p className="text-gray-700">
                Yes, we offer free delivery for prescriptions and refills to
                your home or office.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-purple mb-2">
                Can I get prescription refills?
              </h3>
              <p className="text-gray-700">
                Yes, our pharmacy offers convenient refill and repeat
                prescription options.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-purple mb-2">
                Where are your pharmacy locations?
              </h3>
              <p className="text-gray-700">
                Our pharmacies are located across Nairobi, including Ngong Road
                (Kenital Plaza), Karen, Parklands, and Highridge.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-purple mb-2">
                Do you stock over-the-counter medication?
              </h3>
              <p className="text-gray-700">
                Yes. Alongside prescription medications, we stock a wide range
                of over-the-counter products including pain relievers and cold
                and flu medication.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}