import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* CLEAN PAGE HEADER */}
      <section className="pt-20 pb-10 bg-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple mb-4">
            About Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Learn more about our journey, our team, and our commitment to your
            health and wellness.
          </p>
        </div>
      </section>

      {/* CEO MESSAGE */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="w-full h-[500px] md:h-[700px] rounded-lg overflow-hidden shadow-lg md:sticky md:top-24">
            <img
              src="/images/ceo.jpeg"
              alt="CEO of Stellar Physio"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple mb-6">
              A Word from Our CEO
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Stellar Physio began with a simple belief: everyone deserves the
                opportunity to move freely, live with dignity and enjoy a better
                quality of life.
              </p>
              <p>
                When I founded Stellar Physio in 2015, my vision was to build a
                place where clinical expertise and compassionate care come
                together—where we see the person behind the pain and understand
                what recovery means to them.
              </p>
              <p>
                Over the years, that vision has grown into a multidisciplinary
                health and wellness centre, with branches serving patients
                across Nairobi. Our journey has been shaped by the people who
                trust us: the child working towards greater independence, the
                athlete returning to competition, the professional overcoming
                persistent pain, and the family supporting a loved one through
                rehabilitation.
              </p>
              <p>
                As a physiotherapist, these moments remind me why we started.
                Progress is deeply personal. It may mean walking confidently
                again, returning to work, playing a favourite sport or managing
                everyday activities with less assistance.
              </p>
              <p>
                Our commitment extends beyond our clinics. Through sports
                physiotherapy, community outreach and support for children and
                persons with disabilities, we continue to bring rehabilitation
                closer to those who need it.
              </p>
              <p>
                I am grateful to our patients, dedicated team and partners for
                helping us build Stellar Physio. As we grow, our purpose remains
                clear: to provide thoughtful, effective care that restores
                movement, builds confidence and helps people live fuller lives.
              </p>
              <p>
                Thank you for being part of our journey.
              </p>
              <div className="pt-4">
                <p className="font-bold text-purple">
                  Founder &amp; Chief Executive Officer
                </p>
                <p className="text-gray-600">
                  Stellar Physio Health &amp; Wellness Centre.
                </p>
              </div>
            </div>
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
              At Stellar Physio Health &amp; Wellness Centre, we are dedicated
              to providing exceptional care tailored to meet your unique health
              and wellness needs. From expert physiotherapy to specialist
              clinics, our comprehensive services ensure you are supported
              every step of your journey to optimal health.
            </p>
            <Link
              href="/book-appointment"
              className="inline-block border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-purple transition"
            >
              Book Appointment
            </Link>
          </div>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/clinicinterior.webp"
              alt="Clinic Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/consultation.webp"
              alt="Consultation at Stellar Physio"
              className="w-full h-full object-cover"
            />
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

      {/* WHAT TO EXPECT */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl text-center">
          <p className="text-green font-bold uppercase tracking-widest text-xs mb-3">
            What to Expect
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-purple mb-4">
            Your Patient Journey, Step by Step
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            From your first message to your final session — see exactly how we
            work with you at every stage of your recovery.
          </p>
          <Link
            href="/patient-journey"
            className="inline-block bg-purple text-white px-6 py-3 rounded font-semibold hover:bg-purple-dark transition"
          >
            See the Full Patient Journey &#8594;
          </Link>
        </div>
      </section>

      {/* PARTNERSHIPS & RECOGNITION */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple mb-3">
              Partnerships &amp; Recognition
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Award-winning physiotherapy, trusted by leading sports clubs,
              schools and organisations across Kenya.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
            <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green/10 flex items-center justify-center text-green">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-purple mb-2">
                Award-Winning Physiotherapist
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Recognised for clinical excellence and patient outcomes.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green/10 flex items-center justify-center text-green">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7"
                >
                  <path d="M3 21h18" />
                  <path d="M5 21V7l7-4 7 4v14" />
                  <path d="M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-purple mb-2">
                Largest Physio Clinic in Nairobi
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                4 branches serving patients across the city.
              </p>
            </div>
          </div>

          {/* Partner logos */}
          <div className="text-center">
            <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-8">
              In partnership with
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              <div className="flex items-center justify-center h-20 w-40">
                <img
                  src="/images/tuskerfclogo.jpg"
                  alt="Tusker FC"
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                />
              </div>
              <div className="flex items-center justify-center h-20 w-40">
                <img
                  src="/images/brookhouselogo.png"
                  alt="Brookhouse Schools"
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                />
              </div>
              <div className="flex items-center justify-center h-20 w-40">
                <img
                  src="/images/karencountryclublogo.jpg"
                  alt="Karen Country Club"
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                />
              </div>
              <div className="flex items-center justify-center h-20 w-40">
                <img
                  src="/images/parklandssportsclublogo.jpg"
                  alt="Parklands Sports Club"
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT SETS US APART */}
      <section className="py-20 bg-green text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            What Sets Us Apart?
          </h2>
          <p className="text-center mb-16 opacity-90">
            Our commitment to excellence is reflected in every aspect of our
            care.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-20 h-20 mx-auto mb-6 text-white">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
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

            <div>
              <div className="w-20 h-20 mx-auto mb-6 text-white">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
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

            <div>
              <div className="w-20 h-20 mx-auto mb-6 text-white">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
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

            <div>
              <div className="w-20 h-20 mx-auto mb-6 text-white">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
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
