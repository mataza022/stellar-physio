import Link from "next/link";

export default function HomeBasedCarePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Home-Based Care</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-purple-light rounded-lg h-96 flex items-center justify-center text-purple font-semibold">
            Home Care Photo
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple mb-4">
              Home-Based Care at Stellar Physio Health &amp; Wellness
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700">
              At <strong>Stellar Physio</strong>, we bring expert care to your
              doorstep, ensuring you receive professional therapy in the
              comfort and familiarity of your home. Our home-based care
              services are designed to cater to individuals who face mobility
              challenges or prefer personalized care within their private
              space.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE + CONDITIONS — PURPLE SECTION */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Home-Based Care?
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-8"></div>

          <ol className="list-decimal list-inside space-y-3 text-purple-light mb-14">
            <li>
              <strong className="text-white">Convenience:</strong> No need to
              travel—our specialists come to you.
            </li>
            <li>
              <strong className="text-white">Comfort:</strong> Receive treatment
              in a familiar and stress-free environment.
            </li>
            <li>
              <strong className="text-white">Personalized Attention:</strong>{" "}
              Tailored care plans to meet your unique needs.
            </li>
            <li>
              <strong className="text-white">Accessibility:</strong> Ideal for
              bedridden, elderly, or post-surgical patients.
            </li>
          </ol>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conditions Best Suited for Home-Based Care
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-6"></div>
          <p className="text-purple-light mb-6">
            Our expert physiotherapists and wellness specialists provide
            home-based care for the following conditions:
          </p>

          <ul className="space-y-3 text-purple-light">
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              <span>
                <strong className="text-white">Stroke Rehabilitation:</strong>{" "}
                Regain mobility and independence with customized recovery plans.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              <span>
                <strong className="text-white">Cerebral Palsy Management:</strong>{" "}
                Enhance motor functions and overall quality of life.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              <span>
                <strong className="text-white">Post-Operative Care:</strong>{" "}
                Specialized therapy for recovery after surgeries such as:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Total Knee Replacement</li>
                  <li>Total Hip Replacement</li>
                </ul>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              <span>
                <strong className="text-white">Postnatal Spine Care:</strong>{" "}
                Support for new mothers to restore spinal health and strength.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              <span>
                <strong className="text-white">Elderly and Bedridden Patients:</strong>{" "}
                Compassionate care to improve comfort and mobility.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* OUR SERVICES INCLUDE */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-purple-light rounded-lg h-96 flex items-center justify-center text-purple font-semibold">
            Elderly Care Photo
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple mb-4">
              Our Home-Based Care Services Include:
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>Physiotherapy:</strong> Targeted treatments for pain
                relief, mobility restoration, and injury recovery.
              </li>
              <li>
                <strong>Massage Therapy:</strong> Relaxation and recovery in the
                comfort of your home.
              </li>
              <li>
                <strong>Chiropractic Care:</strong> Alignment and pain management
                without the need to visit a clinic.
              </li>
              <li>
                <strong>Exercise Therapy:</strong> Guided physical activity to
                strengthen muscles and improve function.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* WHO BENEFITS + WHY STELLAR */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-purple mb-4">
              Who Benefits from Home-Based Care?
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-12">
              <li>Individuals recovering from surgery or illness.</li>
              <li>Seniors needing daily support and mobility improvement.</li>
              <li>Patients with chronic conditions requiring ongoing therapy.</li>
              <li>Busy professionals looking for therapy sessions at home.</li>
            </ol>

            <h2 className="text-3xl font-bold text-purple mb-4">
              Why Stellar Physio for Home-Based Care?
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
              <li>
                <strong>Certified Specialists:</strong> Experienced
                physiotherapists, chiropractors, and massage therapists.
              </li>
              <li>
                <strong>Flexible Scheduling:</strong> Appointments designed to
                suit your routine.
              </li>
              <li>
                <strong>Holistic Care:</strong> Comprehensive services to address
                both physical and emotional well-being.
              </li>
            </ol>

            <Link
              href="/book-appointment"
              className="inline-block bg-purple text-white px-6 py-3 rounded font-semibold hover:bg-purple-dark transition"
            >
              Book Appointment Today!
            </Link>
          </div>

          {/* Photo placeholder — taller to balance the two text sections */}
          <div className="bg-purple-light rounded-lg h-[500px] flex items-center justify-center text-purple font-semibold">
            Hands Photo
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Affordable Home-Based Care in Nairobi
          </h2>
          <div className="w-40 border-b-2 border-white mx-auto mb-6"></div>
          <p className="text-lg mb-8 opacity-90">
            Looking for affordable Home-based Care services in Nairobi? At
            Stellar Physio, we offer premium care at competitive rates.
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-purple text-white px-8 py-3 rounded font-semibold hover:bg-purple-dark transition"
          >
            Book Appointment Today!
          </Link>
        </div>
      </section>
    </>
  );
}