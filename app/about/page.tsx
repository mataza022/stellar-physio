import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* HERO BANNER WITH BACKGROUND IMAGE */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about-hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold">About Us</h1>
        </div>
      </section>

      {/* CEO MESSAGE */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-purple-light rounded-lg h-80 flex items-center justify-center text-purple font-semibold">
            CEO Photo
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple mb-6">
              A Message from the C.E.O
            </h2>
            <p className="text-gray-700 mb-4">
              At Stellar Physio Health and Wellness Centre, we are committed to
              delivering top-tier medical services in physiotherapy, wellness,
              and sports rehabilitation. Our goal is to support individuals in
              recovery from injuries and illness while also promoting
              physiotherapy as a proactive lifestyle choice to enhance
              performance—whether at work or in sports.
            </p>
            <p className="text-gray-700 mb-4">
              Since August 2015, Stellar Physio has excelled in preventing,
              managing, and rehabilitating sports injuries. We specialize in
              pain relief and functional restoration, identifying the root
              cause rather than just treating symptoms.
            </p>
            <p className="text-gray-700">
              We have since evolved into a fully-fledged medical centre,
              offering consultations, specialist clinics, laboratory services,
              and a pharmacy—all aimed at improving mobility, function, and
              overall well-being.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green font-bold tracking-widest uppercase text-sm mb-3">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We are your One-stop solution for comprehensive Health, Physio
              and Wellness.
            </h2>
            <p className="text-purple-light mb-8">
              At Stellar Physio Health & Wellness Centre, we are dedicated to
              providing exceptional care tailored to meet your unique health
              and wellness needs. From expert physiotherapy to specialist
              clinics, our comprehensive services ensure you are supported
              every step of your journey to optimal health.
            </p>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-purple transition"
            >
              Book Appointment
            </Link>
          </div>
          <div className="bg-purple-light rounded-lg h-80 flex items-center justify-center text-purple font-semibold">
            Clinic Interior Photo
          </div>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-purple-light rounded-lg h-80 flex items-center justify-center text-purple font-semibold">
            Consultation Photo
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple mb-6">Our Journey</h2>
            <p className="text-gray-700 mb-4">
              Founded in <strong>August 2015</strong>, Stellar Physio began as a
              small physiotherapy clinic with a mission to deliver exceptional
              care and pain relief. Over the years, we have expanded into a
              fully-fledged medical center offering:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Consultation Services</li>
              <li>Specialist Clinics</li>
              <li>Laboratory Services</li>
              <li>Pharmacy</li>
            </ul>
            <p className="text-gray-700">
              Our approach focuses on identifying and addressing the root cause
              of pain through comprehensive assessments, ensuring long-term
              relief and improved quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT SETS US APART — WITH PROPER ICONS */}
      <section className="py-20 bg-green text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            What Sets Us Apart?
          </h2>
          <p className="text-center mb-16 opacity-90">
            Our commitment to excellence is reflected in every aspect of our care.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {/* Comprehensive Care — Heart with pulse */}
            <div>
              <div className="w-20 h-20 mx-auto mb-6 text-white">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M32 56s-20-12-20-28a12 12 0 0 1 20-8 12 12 0 0 1 20 8c0 16-20 28-20 28z" />
                  <path d="M10 30h8l4-8 6 16 4-8h14" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Comprehensive Care</h3>
              <p className="text-sm opacity-90">
                From physiotherapy to wellness services, we offer a holistic
                approach to health.
              </p>
            </div>

            {/* Expert Team — Group of people */}
            <div>
              <div className="w-20 h-20 mx-auto mb-6 text-white">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="32" cy="20" r="8" />
                  <circle cx="14" cy="26" r="6" />
                  <circle cx="50" cy="26" r="6" />
                  <path d="M18 56v-8a14 14 0 0 1 28 0v8" />
                  <path d="M4 50v-4a10 10 0 0 1 12-10" />
                  <path d="M60 50v-4a10 10 0 0 0-12-10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-sm opacity-90">
                Our certified specialists are dedicated to providing premium
                care.
              </p>
            </div>

            {/* State-of-the-Art Facilities — Diamond */}
            <div>
              <div className="w-20 h-20 mx-auto mb-6 text-white">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 24 32 8l16 16-16 32z" />
                  <path d="M16 24h32" />
                  <path d="M24 24 32 8l8 16" />
                  <path d="M24 24 32 56l8-32" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                State-of-the-Art Facilities
              </h3>
              <p className="text-sm opacity-90">
                Equipped to deliver top-tier medical services across multiple
                locations.
              </p>
            </div>

            {/* Client-Centered Approach — Hands holding */}
            <div>
              <div className="w-20 h-20 mx-auto mb-6 text-white">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M32 24a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                  <path d="M20 32v6a8 8 0 0 0 8 8h8a8 8 0 0 0 8-8v-6" />
                  <path d="M24 46v6a8 8 0 0 0 8 8 8 8 0 0 0 8-8v-6" />
                  <path d="M8 40l8 4M56 40l-8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Client-Centered Approach
              </h3>
              <p className="text-sm opacity-90">
                Personalised treatments designed around your unique needs and
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}