import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container-custom relative z-10 text-white max-w-2xl">
          <p className="text-sm uppercase tracking-widest mb-4 opacity-90">
            Health & Wellness
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Your Lifestyle Clinic.
          </h1>
          <p className="text-lg mb-8 opacity-90">
            From chronic pain relief to post-surgical rehabilitation, Stellar
            Physio provides world-class care tailored to your unique recovery
            journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="bg-green text-white px-6 py-3 rounded font-semibold hover:bg-green-dark transition"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="bg-white text-purple px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          QUICK ACCESS
          ============================================ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple mb-3">
            Quick Access
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Access our essential physiotherapy services quickly and efficiently.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <div className="text-3xl mb-4 text-purple">&#9679;</div>
              <h3 className="text-xl font-bold text-purple mb-3">
                Book a Session
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Schedule an appointment with our expert physiotherapists at your
                convenience.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-green text-white px-5 py-2 rounded text-sm font-semibold hover:bg-green-dark transition"
              >
                Book Now
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <div className="text-3xl mb-4 text-purple">&#9679;</div>
              <h3 className="text-xl font-bold text-purple mb-3">
                Conditions We Treat
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Explore our comprehensive range of treatments for back pain,
                sports injuries, and more.
              </p>
              <Link
                href="/conditions"
                className="inline-block bg-green text-white px-5 py-2 rounded text-sm font-semibold hover:bg-green-dark transition"
              >
                Learn More
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <div className="text-3xl mb-4 text-purple">&#9679;</div>
              <h3 className="text-xl font-bold text-purple mb-3">
                Find a Clinic
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                We have multiple locations across Nairobi to serve you better.
              </p>
              <Link
                href="/branches"
                className="inline-block bg-green text-white px-5 py-2 rounded text-sm font-semibold hover:bg-green-dark transition"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          OUR SERVICES (PURPLE SECTION)
          ============================================ */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Our Specialized Services
          </h2>
          <p className="text-center text-purple-light mb-12">
            Comprehensive rehabilitation delivered by world-class professionals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden text-gray-800">
              <img
                src="/images/generalconsultation.jpg"
                alt="Physiotherapy"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-purple mb-2">
                  Physiotherapy
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  A branch of medicine specializing in movement, function and
                  disability.
                </p>
                <Link
                  href="/services"
                  className="text-green font-semibold text-sm inline-flex items-center"
                >
                  Read More &#8594;
                </Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden text-gray-800">
              <img
                src="/images/generalconsultation.jpg"
                alt="Chiropractor"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-purple mb-2">
                  Chiropractor Services
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Diagnosis and treatment of mechanical disorders of the
                  musculoskeletal system.
                </p>
                <Link
                  href="/services"
                  className="text-green font-semibold text-sm inline-flex items-center"
                >
                  Read More &#8594;
                </Link>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden text-gray-800">
              <img
                src="/images/generalconsultation.jpg"
                alt="Home-Based Care"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-purple mb-2">
                  Home-Based Care
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Expert therapy brought to your doorstep for people facing
                  mobility challenges.
                </p>
                <Link
                  href="/services"
                  className="text-green font-semibold text-sm inline-flex items-center"
                >
                  Read More &#8594;
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="bg-black/20 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg">Explore All Services</h3>
              <p className="text-purple-light text-sm">
                Discover our complete range of clinical services.
              </p>
            </div>
            <Link
              href="/services"
              className="bg-green text-white px-6 py-2 rounded font-semibold hover:bg-green-dark transition"
            >
              View Clinical Services
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          OUR BRANCHES
          ============================================ */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-purple mb-4">
                Our Branches
              </h2>
              <p className="text-gray-600 mb-6">
                Stellar Physio clinics offer convenient access to specialist
                care across Nairobi and beyond.
              </p>
              <Link
                href="/branches"
                className="inline-block border-2 border-purple text-purple px-5 py-2 rounded font-semibold hover:bg-purple hover:text-white transition"
              >
                Explore All Locations
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "Kenital Plaza", img: "/images/ngongrdbranch.jpg" },
                { name: "Karen Country Club", img: "/images/karencountryclub.jpg" },
                { name: "Parklands Sports Club", img: "/images/generalconsultation.jpg" },
              ].map((b) => (
                <div
                  key={b.name}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={b.img}
                    alt={b.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3">
                    <h4 className="font-semibold text-purple text-sm">
                      {b.name}
                    </h4>
                    <Link
                      href="/branches"
                      className="text-green text-xs font-semibold"
                    >
                      Get Directions &#8594;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIALS
          ============================================ */}
      <section className="py-20 bg-purple-light">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple mb-3">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 mb-10">
            Real stories from our patients.
          </p>
          <div className="text-6xl text-green leading-none mb-4">&#8220;</div>
          <p className="text-lg italic text-gray-700 mb-6">
            "As an active person, I had knee problems but improved significantly
            after sessions at Stellar Physio. My knee is great now. I highly
            recommend regular physiotherapy."
          </p>
          <p className="font-bold text-purple">Daniel Kigo</p>
          <p className="text-sm text-gray-500">Patient</p>
        </div>
      </section>

      {/* ============================================
          PARTNERS
          ============================================ */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-purple mb-10">
            Trusted by Leading Organisations
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale">
            <span className="text-lg font-bold">AAR Insurance</span>
            <span className="text-lg font-bold">Jubilee Health</span>
            <span className="text-lg font-bold">Britam</span>
            <span className="text-lg font-bold">Old Mutual</span>
            <span className="text-lg font-bold">Minet</span>
          </div>
        </div>
      </section>

      {/* ============================================
          NEWS
          ============================================ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-purple mb-2">
                Latest News & Updates
              </h2>
              <p className="text-gray-600">
                Stay informed about our latest developments.
              </p>
            </div>
            <Link
              href="/blog"
              className="bg-purple text-white px-5 py-2 rounded font-semibold hover:bg-purple-dark transition"
            >
              View All News
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=60"
                alt="Featured"
                className="w-full h-72 object-cover rounded-lg mb-4"
              />
              <span className="inline-block bg-green text-white text-xs font-bold px-3 py-1 rounded mb-3">
                HEALTH & WELLNESS
              </span>
              <h3 className="text-xl font-bold text-purple mb-3">
                Kinesiology Taping in Nairobi: What That Colourful Tape Really Does
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Blue kinesiology tape applied to a patient's hip and gluteal
                muscles during a physiotherapy session.
              </p>
              <Link
                href="/blog"
                className="text-green font-semibold text-sm"
              >
                Read More &#8594;
              </Link>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=200&q=60"
                  alt="News"
                  className="w-full h-24 object-cover rounded-lg"
                />
                <div>
                  <span className="inline-block bg-purple text-white text-xs font-bold px-2 py-1 rounded mb-2">
                    HEALTH
                  </span>
                  <h4 className="font-bold text-purple text-sm mb-1">
                    Sports Massage in Parklands: How to Recover
                  </h4>
                  <Link
                    href="/blog"
                    className="text-green font-semibold text-xs"
                  >
                    Read More &#8594;
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=200&q=60"
                  alt="News"
                  className="w-full h-24 object-cover rounded-lg"
                />
                <div>
                  <span className="inline-block bg-purple text-white text-xs font-bold px-2 py-1 rounded mb-2">
                    WELLNESS
                  </span>
                  <h4 className="font-bold text-purple text-sm mb-1">
                    Stretch & Exercise Therapy in Nairobi
                  </h4>
                  <Link
                    href="/blog"
                    className="text-green font-semibold text-xs"
                  >
                    Read More &#8594;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}