import Link from "next/link";

type ListingService = {
  slug: string;
  title: string;
  description: string;
  recommendation?: string;
  heroImage: string;
};

const listingServices: ListingService[] = [
  {
    slug: "general-consultations",
    title: "General Medical Consultations in Ngong Road, Nairobi",
    description:
      "This is the initial stage where the doctor assesses and refers to specialists. Our consultations ensure that we identify the root cause of your symptoms, rather than just treating the surface problem.",
    heroImage: "/images/consultation2.webp",
  },
  {
    slug: "physiotherapy",
    title: "Physiotherapy in Ngong Road, Nairobi",
    description:
      "This is a branch of medicine that specializes in movement, function and disability. Our physiotherapists treat conditions relating to bones, muscles and nerves.",
    recommendation: "Recommended 2-3 times weekly",
    heroImage: "/images/physio2.jpg",
  },
  {
    slug: "counselling-services",
    title: "Counselling Services in Ngong Road, Nairobi",
    description:
      "We provide evidence-based psychotherapy for individuals, couples, families, and adolescents. We offer structured, goal-oriented support—virtually and in-person—to address emotional, relational, and behavioral challenges across all ages.",
    recommendation: "Recommended once a week",
    heroImage: "/images/counsellingroom.png",
  },
  {
    slug: "sports-massage",
    title: "Sports Massage Therapy in Ngong Road, Nairobi",
    description:
      "Our sports massage therapy aims at relieving muscle spasm for people that all day in the office. It also improves performance in sports by stretching and drawing lactic acid from the muscles.",
    recommendation: "Recommended once weekly as body maintenance",
    heroImage: "/images/sportsmassage2.webp",
  },
  {
    slug: "stellar-laboratory-services",
    title: "Laboratory Services in Ngong Road, Nairobi",
    description:
      "Get your routine lab tests with minimal wait time, and at pocket friendly prices. Our state-of-the-art laboratory services are designed to provide reliable results, supporting your journey toward optimal health and wellbeing.",
    heroImage: "/images/lab.webp",
  },
  {
    slug: "pharmacy",
    title: "Pharmacy Services in Ngong Road, Nairobi",
    description:
      "Whether you need prescription medications or over-the-counter products, we stock all essential medicines to meet your needs. Our pharmacy is dedicated to ensuring that you receive the right medications and professional guidance to support your recovery and well-being.",
    heroImage: "/images/pharmacy1.webp",
  },
  {
    slug: "stretch-exercise-therapy",
    title: "Stretch & Exercise Therapy in Ngong Road, Nairobi",
    description:
      "Aimed at improving your strength, mobility, proprioception and preventing injuries.",
    recommendation: "Recommended 1-2 times weekly",
    heroImage: "/images/stretch2.webp",
  },
  {
    slug: "home-based-care",
    title: "Home-Based Care Services in Ngong Road, Nairobi",
    description:
      "We provide these services at the comfort of your home or office, for those who are notable to reach us with ease.",
    recommendation: "Recommended 3 times weekly",
    heroImage: "/images/elderlycare.webp",
  },
  {
    slug: "chiropractor-services",
    title: "Chiropractic Services in Ngong Road, Nairobi",
    description:
      "This is a technique used to align your spine and joints to attain the recommended spinal curvature to release pain and tension.",
    recommendation: "Recommended once a week",
    heroImage: "/images/chiropractor.webp",
  },
  {
    slug: "reflexology",
    title: "Reflexology Therapy in Ngong Road, Nairobi",
    description:
      "A treatment focusing on the feet and palms. Can be used to treat conditions such as plantar fasciitis, gout, heel spurs and Achilles tendinitis.",
    recommendation: "Recommended twice a month",
    heroImage: "/images/reflex1.webp",
  },
  {
    slug: "occupational-therapy",
    title: "Occupational Therapy Services in Ngong Road, Nairobi",
    description:
      "Therapy focusing on children's daily functional improvements. We work with children with autism, cerebral palsy and Erb's palsy.",
    recommendation: "Recommended 3 times weekly",
    heroImage: "/images/occupationaltherapyroom.png",
  },
];

export default function ServicesPage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-purple mb-4">
            Clinical Services
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg">
            Specialist care across all major medical disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listingServices.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Hero image */}
              <div className="w-full h-52 overflow-hidden bg-gray-50">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-lg font-bold text-purple mb-3 group-hover:text-purple-dark transition-colors leading-snug">
                  {service.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-3 flex-1">
                  {service.description}
                </p>

                {service.recommendation && (
                  <p className="text-purple font-semibold text-xs mb-5">
                    {service.recommendation}
                  </p>
                )}

                {/* Action buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                  <Link
                    href={`/book-appointment?service=${encodeURIComponent(service.title)}`}
                    className="bg-green text-white px-4 py-2 rounded text-sm font-semibold hover:bg-green-dark transition"
                  >
                    Book Now
                  </Link>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-purple font-semibold text-sm flex items-center hover:text-purple-dark transition-colors"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}