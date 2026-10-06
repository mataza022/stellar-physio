import Link from "next/link";
import { posts } from "@/lib/posts";
import PartnersCarousel from "./components/PartnersCarousel";
import HeroCarousel from "./components/HeroCarousel";
import GoogleReviews from "./components/GoogleReviews";

export default function HomePage() {
  // Sort posts for Blog Section
  const sortedByDate = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const latestPost = sortedByDate[0];

  // Sort by views (fallback to 0 if not yet provided by backend)
  const sortedByViews = [...posts].sort(
    (a, b) => ((b as any).views || 0) - ((a as any).views || 0)
  );
  const popularPosts = sortedByViews.slice(0, 2);

  return (
    <>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <HeroCarousel />

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
            {/* Book a Session */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full overflow-hidden mb-4">
                <img
                  src="/images/hero3.jpg"
                  alt="Book a Session"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-purple mb-3">
                Book a Session
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Schedule an appointment with our expert physiotherapists at your
                convenience.
              </p>
              <Link
                href="/book-appointment"
                className="inline-block bg-green text-white px-5 py-2 rounded text-sm font-semibold hover:bg-green-dark transition"
              >
                Book Now
              </Link>
            </div>

            {/* Conditions We Treat */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full overflow-hidden mb-4">
                <img
                  src="/images/chiropractor.webp"
                  alt="Conditions We Treat"
                  className="w-full h-full object-cover"
                />
              </div>
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

            {/* Find a Clinic */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full overflow-hidden mb-4">
                <img
                  src="/images/hero1.jpeg"
                  alt="Find a Clinic"
                  className="w-full h-full object-cover"
                />
              </div>
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
            {/* Physiotherapy */}
            <div className="bg-white rounded-lg overflow-hidden text-gray-800">
              <img
                src="/images/physio2.jpg"
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
                  href="/services/physiotherapy"
                  className="text-green font-semibold text-sm inline-flex items-center"
                >
                  Read More &#8594;
                </Link>
              </div>
            </div>

            {/* Chiropractor Services */}
            <div className="bg-white rounded-lg overflow-hidden text-gray-800">
              <img
                src="/images/chiropractor.webp"
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
                  href="/services/chiropractor-services"
                  className="text-green font-semibold text-sm inline-flex items-center"
                >
                  Read More &#8594;
                </Link>
              </div>
            </div>

            {/* Home-Based Care */}
            <div className="bg-white rounded-lg overflow-hidden text-gray-800">
              <img
                src="/images/homecare.jpeg"
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
                  href="/services/home-based-care"
                  className="text-green font-semibold text-sm inline-flex items-center"
                >
                  Read More &#8594;
                </Link>
              </div>
            </div>
          </div>

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
                {
                  name: "Kenital Plaza",
                  img: "/images/hero1.jpeg",
                  href: "/branches/kenital-plaza",
                },
                {
                  name: "Karen Country Club",
                  img: "/images/karenbranch.webp",
                  href: "/branches/karen-country-club",
                },
                {
                  name: "Parklands Sports Club",
                  img: "/images/parklandsbranch.jpg",
                  href: "/branches/parklands-sports-club",
                },
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
                      href={b.href}
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
          TESTIMONIALS — Live Google Reviews
          ============================================ */}
      <section className="py-20 bg-purple-light">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-purple mb-3 text-center">
            What Our Patients Say
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Real reviews from our Google Business Profile.
          </p>

          <GoogleReviews />
        </div>
      </section>

      {/* ============================================
          PARTNERS — Rotating Carousel
          ============================================ */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-purple mb-3">
            Trusted by Leading Organisations
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We work with Kenya&apos;s leading insurance providers and
            organisations to make quality physiotherapy accessible to everyone.
          </p>

          <PartnersCarousel />
        </div>
      </section>

      {/* ============================================
          NEWS — LATEST & MOST VIEWED
          ============================================ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-purple mb-2">
                Latest News &amp; Updates
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
            {/* Featured — Latest Post */}
            {latestPost && (
              <div>
                <img
                  src={latestPost.image}
                  alt={latestPost.title}
                  className="w-full h-72 object-cover rounded-lg mb-4"
                />
                <span className="inline-block bg-green text-white text-xs font-bold px-3 py-1 rounded mb-3 uppercase">
                  {latestPost.category}
                </span>
                <h3 className="text-xl font-bold text-purple mb-3">
                  {latestPost.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {latestPost.excerpt}
                </p>
                <Link
                  href={`/blog/${latestPost.slug}`}
                  className="text-green font-semibold text-sm"
                >
                  Read More &#8594;
                </Link>
              </div>
            )}

            {/* Sidebar — Most Viewed Posts */}
            <div className="flex flex-col gap-6">
              {popularPosts.map((post) => (
                <div
                  key={post.slug}
                  className="grid grid-cols-[120px_1fr] gap-4 items-center"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <div>
                    <span className="inline-block bg-purple text-white text-xs font-bold px-2 py-1 rounded mb-2 uppercase">
                      {post.category}
                    </span>
                    <h4 className="font-bold text-purple text-sm mb-1">
                      {post.title}
                    </h4>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-green font-semibold text-xs"
                    >
                      Read More &#8594;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}