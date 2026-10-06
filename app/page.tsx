import Link from "next/link";
import { posts } from "@/lib/posts";
import PartnersCarousel from "./components/PartnersCarousel";
import HeroCarousel from "./components/HeroCarousel";
import GoogleReviews from "./components/GoogleReviews";

export default function HomePage() {
  const sortedByDate = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const latestPost = sortedByDate[0];

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
          WELCOME / INTRO
          ============================================ */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
            <span className="block text-green">Stellar Physio</span>
            <span className="block text-purple">Health &amp; Wellness!</span>
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Welcome to Stellar Physio Health and Wellness Centre, a leading
            physiotherapy clinic in Nairobi with over 10 years of experience in
            pain relief, injury rehabilitation, and movement recovery. Our
            expert physiotherapists specialize in treating back pain, neck pain,
            sports injuries, joint pain, and musculoskeletal conditions using
            evidence-based physiotherapy techniques. We conduct comprehensive
            assessments to identify the root cause of your pain—not just the
            symptoms—allowing us to develop personalized treatment and
            rehabilitation plans that promote faster, long-lasting recovery.
            Whether you are recovering from an injury, managing chronic pain, or
            looking to improve mobility, Stellar Physio is committed to helping
            you move better, feel stronger, and live pain-free.
          </p>
        </div>
      </section>

      {/* ============================================
          CONDITIONS WE TREAT
          ============================================ */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple mb-3">
            Conditions We Treat
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Expert care for a wide range of musculoskeletal and neurological
            conditions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Lower Back Pain & Spine Health */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col">
              <div className="w-full h-56 bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/lowerpain.webp"
                  alt="Lower Back Pain & Spine Health"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-purple mb-3">
                  Lower Back Pain &amp; Spine Health
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-1">
                  We understand back pains can be frustrating. We are dedicated
                  to helping you maintain a healthy spine and live pain-free.
                </p>
                <Link
                  href="/conditions/lower-back-pain-spine-health"
                  className="inline-block bg-green text-white px-5 py-2 rounded text-sm font-semibold hover:bg-green-dark transition self-start"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Stroke Rehabilitation */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col">
              <div className="w-full h-56 bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/rehabilitation.webp"
                  alt="Stroke Rehabilitation"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-purple mb-3">
                  Stroke Rehabilitation
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-1">
                  Full restoration and recovery is possible with the right care.
                  We guide you through a structured rehab program to retain
                  strength, coordination, balance and independence helping you
                  get your life back.
                </p>
                <Link
                  href="/conditions/stroke-rehabilitation"
                  className="inline-block bg-green text-white px-5 py-2 rounded text-sm font-semibold hover:bg-green-dark transition self-start"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Arthritis & Joint Pains */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col">
              <div className="w-full h-56 bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/arthritis&jointpain.webp"
                  alt="Arthritis & Joint Pains"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-purple mb-3">
                  Arthritis &amp; Joint Pains
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-1">
                  Joint pains shouldn&apos;t hold you back. Our personalized
                  treatment plans coupled with evidence-based practice will get
                  you back on your feet in no time.
                </p>
                <Link
                  href="/conditions/arthritis-joint-pains"
                  className="inline-block bg-green text-white px-5 py-2 rounded text-sm font-semibold hover:bg-green-dark transition self-start"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/conditions"
              className="inline-block border-2 border-purple text-purple px-6 py-2.5 rounded font-semibold hover:bg-purple hover:text-white transition"
            >
              See All Conditions
            </Link>
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
            {/* General Consultations */}
            <div className="bg-white rounded-lg overflow-hidden text-gray-800 flex flex-col">
              <img
                src="/images/consultation2.webp"
                alt="General Consultations"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-purple mb-2">
                  General Consultations
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  This is the initial stage where the doctor assesses and refers
                  to specialists. Our consultations ensure that we identify the
                  root cause of your symptoms, rather than just treating the
                  surface problem.
                </p>
                <Link
                  href="/services/general-consultations"
                  className="text-green font-semibold text-sm inline-flex items-center"
                >
                  Read More &#8594;
                </Link>
              </div>
            </div>

            {/* Physiotherapy */}
            <div className="bg-white rounded-lg overflow-hidden text-gray-800 flex flex-col">
              <img
                src="/images/physio2.jpg"
                alt="Physiotherapy"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-purple mb-2">
                  Physiotherapy
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  This is a branch of medicine that specializes in movement,
                  function and disability. Our physiotherapists treat conditions
                  relating to bones, muscles and nerves.
                </p>
                <p className="text-purple font-semibold text-xs mb-3">
                  Recommended 2-3 times weekly.
                </p>
                <Link
                  href="/services/physiotherapy"
                  className="text-green font-semibold text-sm inline-flex items-center"
                >
                  Read More &#8594;
                </Link>
              </div>
            </div>

            {/* Counselling Services */}
            <div className="bg-white rounded-lg overflow-hidden text-gray-800 flex flex-col">
              <img
                src="/images/counsellingroom.png"
                alt="Counselling Services"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-purple mb-2">
                  Counselling Services
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  We provide evidence-based psychotherapy for individuals,
                  couples, families, and adolescents. We offer structured,
                  goal-oriented support—virtually and in-person—for relational,
                  and behavioral challenges across all stages of life.
                </p>
                <Link
                  href="/services/counselling-services"
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
          <GoogleReviews />
        </div>
      </section>

      {/* ============================================
          PARTNERS
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