import Link from "next/link";

const conditions = [
  {
    title: "Arthritis & Joint Pains",
    slug: "arthritis-joint-pains",
    description:
      "Personalised treatment plans to manage arthritis pain and restore joint function.",
  },
  {
    title: "Lower Back Pain & Spine Health",
    slug: "lower-back-pain-spine-health",
    description:
      "Root-cause treatment for lower back pain, sciatica, and spine-related conditions.",
  },
  {
    title: "Sports Injuries",
    slug: "sports-injuries",
    description:
      "Acute and chronic sports injury rehabilitation for athletes at every level.",
  },
  {
    title: "Stroke Rehabilitation",
    slug: "stroke-rehabilitation",
    description:
      "Expert neurorehabilitation to restore mobility, independence and quality of life after a stroke.",
  },
  {
    title: "Pre- & Post-Surgery Rehab",
    slug: "pre-post-surgery-rehab",
    description:
      "Structured prehab and post-operative programmes for faster, safer recovery.",
  },
  {
    title: "Pre & Post-Natal Massages",
    slug: "pre-post-natal-massages",
    description:
      "Safe, therapeutic massage to support mothers before and after childbirth.",
  },
  {
    title: "Developmental Milestones",
    slug: "developmental-milestones",
    description:
      "Specialised paediatric therapy for children with Autism, Cerebral Palsy and developmental delays.",
  },
];

export default function ConditionsPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Conditions We Treat
          </h1>
          <p className="text-lg mt-4 max-w-2xl opacity-90">
            From chronic pain to post-surgical recovery, we treat a wide range
            of musculoskeletal and neurological conditions.
          </p>
        </div>
      </section>

      {/* CONDITIONS GRID */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((c) => (
              <div
                key={c.slug}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition flex flex-col"
              >
                <h2 className="text-xl font-bold text-purple mb-3">
                  {c.title}
                </h2>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {c.description}
                </p>
                <Link
                  href={`/conditions/${c.slug}`}
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
            Not sure which treatment is right for you?
          </h2>
          <p className="text-purple-light mb-8">
            Book a consultation and our specialists will create a personalised
            treatment plan.
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