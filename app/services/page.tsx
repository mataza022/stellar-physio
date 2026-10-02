import Link from "next/link";

const services = [
  {
    title: "General Consultations",
    slug: "general-consultations",
    description:
      "The initial stage where our doctors assess your condition and refer to specialists. We identify the root cause of your symptoms, not just the surface problem.",
  },
  {
    title: "Chiropractor Services",
    slug: "chiropractor-services",
    description:
      "Professional chiropractic adjustments and spine alignment to relieve pain and keep your musculoskeletal system working as it should.",
  },
  {
    title: "Physiotherapy",
    slug: "physiotherapy",
    description:
      "Treatment specializing in movement, function and disability. Recommended 2–3 times weekly.",
  },
  {
    title: "Home-Based Care",
    slug: "home-based-care",
    description:
      "Expert therapy brought to your doorstep for people facing mobility challenges or who prefer personalised care at home.",
  },
  {
    title: "Laboratory Services",
    slug: "stellar-laboratory-services",
    description:
      "Accurate, timely diagnostic tests that support effective treatment and your journey to better health.",
  },
  {
    title: "Pharmacy",
    slug: "pharmacy",
    description:
      "Trusted medications with professional guidance so you get the right treatment for your health journey.",
  },
  {
    title: "Counselling Services",
    slug: "counselling-services",
    description:
      "Evidence-based psychotherapy for individuals, couples, families, and adolescents.",
  },
  {
    title: "Sports Massage",
    slug: "sports-massage",
    description:
      "For athletes and active people — reduce muscle tension, improve flexibility and prevent injuries.",
  },
  {
    title: "Reflexology",
    slug: "reflexology",
    description:
      "A holistic therapy that stimulates pressure points on the feet, hands and ears to promote natural healing.",
  },
  {
    title: "Occupational Therapy",
    slug: "occupational-therapy",
    description:
      "Helping children build the skills they need for daily activities with confidence and independence.",
  },
  {
    title: "Nutritional Services",
    slug: "nutritional-services",
    description:
      "Nutrition guidance that supports healing, recovery and performance for athletes, post-surgery patients and chronic conditions.",
  },
  {
    title: "Stretch & Exercise Therapy",
    slug: "stretch-exercise-therapy",
    description:
      "Guided programmes to improve flexibility, relieve muscle tightness and restore movement.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Our Services</h1>
          <p className="text-lg mt-4 max-w-2xl opacity-90">
            Comprehensive rehabilitation delivered by world-class
            professionals using state-of-the-art technology.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.slug}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition flex flex-col"
              >
                <h2 className="text-xl font-bold text-purple mb-3">
                  {s.title}
                </h2>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {s.description}
                </p>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-block bg-green text-white px-5 py-2 rounded text-sm font-semibold hover:bg-green-dark transition self-start"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-purple-light mb-8">
            Book a general consultation and our specialists will recommend the
            right treatment for you.
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-green text-white px-8 py-3 rounded font-semibold hover:bg-green-dark transition"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}