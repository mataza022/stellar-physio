import Link from "next/link";

type ListingCondition = {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  href?: string;
};

// Conditions shown on this listing page.
// Order + wording matches the old site's conditions section.
const listingConditions: ListingCondition[] = [
  {
    slug: "lower-back-pain-spine-health",
    title: "Lower Back Pain & Spine Health",
    description:
      "We understand back pains can be frustrating. We are dedicated to helping you maintain a healthy spine and live pain-free.",
    heroImage: "/images/lowerpain.webp",
  },
  {
    slug: "arthritis-joint-pains",
    title: "Arthritis & Joint Pains",
    description:
      "Joint pains shouldn't hold you back. Our personalized treatment plans coupled with evidence-based practice will get you back on your feet in no time.",
    heroImage: "/images/arthritis&jointpain.webp",
  },
  {
    slug: "stroke-rehabilitation",
    title: "Stroke Rehabilitation",
    description:
      "Full restoration and recovery is possible with the right care. We guide you through a structured rehab program to retain strength, coordination, balance and independence helping you get your life back.",
    heroImage: "/images/rehabilitation.webp",
  },
  {
    slug: "sports-injuries",
    title: "Sports Injuries",
    description:
      "Our tailored treatment plans are aimed at getting you back to your preferred sport fast and without pain.",
    heroImage: "/images/injury.webp",
  },
  {
    slug: "counselling-services",
    title: "Counselling Services",
    description:
      "Mental and emotional wellbeing are just as important as physical health. Our therapists provide personalized support for anxiety, depression, and trauma to promote a healthier self.",
    heroImage: "/images/counsellingroom.png",
    href: "/services/counselling-services",
  },
  {
    slug: "pre-post-surgery-rehab",
    title: "Pre- & Post Surgery Rehab",
    description:
      "Stellar Physio supports post-surgery recovery with personalized therapy to restore mobility, strength, and function.",
    heroImage: "/images/rehab1.webp",
  },
  {
    slug: "pre-post-natal-massages",
    title: "Pre & Post-Natal Massages",
    description:
      "We work with mums to alleviate discomforts and pain especially on the lower back, swollen feet and getting you back to an even better you, with our tailored core and pelvic floor muscle exercises.",
    heroImage: "/images/natal1.webp",
  },
  {
    slug: "developmental-milestones",
    title: "Developmental Milestones for Autism & Cerebral Palsy",
    description:
      "Our love for children makes us go over and beyond to ensure your child performs ADLs, and enjoys life optimally.",
    heroImage: "/images/therapy1.webp",
  },
];

export default function ConditionsPage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-purple mb-4">
            Conditions We Treat
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg">
            Expert physiotherapy care for a wide range of musculoskeletal and
            neurological conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listingConditions.map((condition) => (
            <div
              key={condition.slug}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Hero image — no cropping */}
              <div className="w-full h-72 bg-gray-50 flex items-center justify-center overflow-hidden p-4">
                <img
                  src={condition.heroImage}
                  alt={condition.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-lg font-bold text-purple mb-3 group-hover:text-purple-dark transition-colors leading-snug">
                  {condition.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {condition.description}
                </p>

                {/* Action buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                  <Link
                    href="/book-appointment"
                    className="bg-green text-white px-4 py-2 rounded text-sm font-semibold hover:bg-green-dark transition"
                  >
                    Book Now
                  </Link>
                  <Link
                    href={condition.href || `/conditions/${condition.slug}`}
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