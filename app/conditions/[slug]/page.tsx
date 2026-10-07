import Link from "next/link";
import { notFound } from "next/navigation";
import { conditions } from "@/lib/conditions";
import VideoEmbed from "../../components/VideoEmbed";

export function generateStaticParams() {
  return conditions.map((condition) => ({
    slug: condition.slug,
  }));
}

export default async function ConditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const condition = conditions.find((c) => c.slug === slug);

  if (!condition) {
    notFound();
  }

  // Pre-selected booking link for this condition
  const bookHref = `/book-appointment?service=${encodeURIComponent(condition.title)}`;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <img
          src={condition.heroImage}
          alt={condition.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container-custom relative z-10 text-white">
          <p className="text-sm mb-2 opacity-80">Conditions / {condition.title}</p>
          <h1 className="text-4xl md:text-6xl font-bold">{condition.title}</h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16">
        <div className="container-custom space-y-12">
          
          {/* INTRO */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start mt-2">
              <img
                src={condition.introImage}
                alt={condition.introTitle}
                className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow"
              />
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold text-purple mb-3">{condition.introTitle}</h2>
                <p className="text-gray-700 leading-relaxed text-sm">{condition.introText}</p>
              </div>
            </div>
          </div>

          {/* UNDERSTANDING / SYMPTOMS (Purple Section) */}
          <div className="bg-purple text-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
              {condition.understandingTitle}
            </h2>
            <p className="text-purple-light mb-4 text-sm">{condition.understandingText}</p>
            {condition.understandingList && (
              <ul className="space-y-2 text-purple-light text-sm mb-4">
                {condition.understandingList.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span>•</span> {item}
                  </li>
                ))}
              </ul>
            )}
            {condition.symptomsList && (
              <div className="mt-6">
                <h3 className="font-bold text-lg mb-3">Symptoms You Should Not Ignore</h3>
                <p className="text-purple-light mb-2 text-sm">You may need physiotherapy if you experience:</p>
                <ul className="space-y-2 text-purple-light text-sm">
                  {condition.symptomsList.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span>•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <Link
              href={bookHref}
              className="inline-block bg-white text-purple px-6 py-2 rounded font-semibold hover:bg-gray-100 transition mt-6 text-sm"
            >
              Book an Appointment
            </Link>
          </div>

          {/* TREATMENTS (White Section) */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-purple mb-6 border-b border-gray-200 pb-2">
              {condition.treatmentTitle}
            </h2>
            <ul className="space-y-4">
              {condition.treatmentList.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start text-sm text-gray-700">
                  <span className="text-purple font-bold text-lg leading-none mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* VIDEOS */}
          {condition.videos && condition.videos.length > 0 && (
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-purple mb-6 border-b border-gray-200 pb-2">
                Watch &amp; Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {condition.videos.map((video, idx) => (
                  <div key={idx}>
                    <VideoEmbed video={video} />
                    {video.title && (
                      <p className="text-sm text-gray-600 mt-3 text-center italic">
                        {video.title}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* WHY CHOOSE US (Green Section) */}
          <div className="bg-green text-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
              {condition.whyChooseTitle}
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <ul className="space-y-3">
                  {condition.whyChooseList.map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start text-sm text-white/90">
                      <span className="text-white font-bold text-lg leading-none mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={bookHref}
                  className="inline-block bg-white text-green px-6 py-2 rounded font-semibold hover:bg-gray-100 transition mt-6 text-sm"
                >
                  Book an Appointment
                </Link>
              </div>
              <img
                src={condition.whyChooseImage}
                alt={condition.whyChooseTitle}
                className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-purple mb-4">
            {condition.ctaTitle}
          </h2>
          <div className="w-40 border-b-2 border-purple mx-auto mb-6"></div>
          <p className="text-lg mb-8 text-gray-700 whitespace-pre-line">
            {condition.ctaText}
          </p>
          <Link
            href={bookHref}
            className="inline-block bg-purple text-white px-8 py-3 rounded font-semibold hover:bg-purple-dark transition"
          >
            {condition.ctaButtonText}
          </Link>
        </div>
      </section>
    </div>
  );
}