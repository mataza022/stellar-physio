import Link from "next/link";

export default function GeneralConsultationsPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            General Consultations
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-purple-light rounded-lg h-80 flex items-center justify-center text-purple font-semibold">
            Clinic Photo
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple mb-4">
              General Consultations at Stellar Physio Health &amp; Wellness
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700">
              At Stellar Physio Health &amp; Wellness, our general
              consultations serve as the foundation of your healthcare journey.
              Whether you are experiencing chronic pain, mobility challenges,
              or general health concerns, our experienced doctors will provide
              a thorough assessment, discuss your medical history, and create a
              personalised treatment plan. Our consultations ensure that we
              identify the root cause of your symptoms, rather than just
              treating the surface problem. If specialised care is needed, we
              will refer you to the right specialists, ensuring you receive the
              best possible treatment for your condition.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What to Expect in a General Consultation
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-8"></div>

          <ul className="space-y-3 mb-10">
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              <span className="text-purple-light">
                <strong className="text-white">Comprehensive Health Evaluation:</strong>{" "}
                A deep dive into your medical history, current symptoms, and lifestyle.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              <span className="text-purple-light">
                <strong className="text-white">Physical Examination:</strong>{" "}
                A detailed check-up focusing on mobility, posture, and pain points.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              <span className="text-purple-light">
                <strong className="text-white">Diagnosis &amp; Specialist Referral:</strong>{" "}
                If necessary, you&apos;ll be referred to a specialist such as a
                physiotherapist, chiropractor, or orthopedic expert.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              <span className="text-purple-light">
                <strong className="text-white">Health &amp; Lifestyle Recommendations:</strong>{" "}
                Advice on nutrition, posture, and lifestyle changes that can help
                prevent and manage conditions.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              <span className="text-purple-light">
                <strong className="text-white">Preventive Care &amp; Early Intervention:</strong>{" "}
                Early detection of issues to prevent chronic conditions and long-term complications.
              </span>
            </li>
          </ul>

          <Link
            href="/contact"
            className="inline-block bg-white text-purple px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-purple-light rounded-lg h-80 flex items-center justify-center text-purple font-semibold">
            Consultation Photo
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple mb-4">
              Why Choose Stellar Physio for General Consultations?
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <ul className="space-y-2 mb-8 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                Expert Medical Evaluation &amp; Personalised Treatment Plans
              </li>
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                Seamless Referral to Top Specialists
              </li>
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                Holistic &amp; Preventive Health Approach
              </li>
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                Focused on Your Long-Term Well-being
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-purple text-white px-6 py-3 rounded font-semibold hover:bg-purple-dark transition"
            >
              Book Appointment Today!
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-purple-light text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-purple mb-4">
            Affordable Consultation Costs in Nairobi
          </h2>
          <div className="w-40 border-b-2 border-purple mx-auto mb-6"></div>
          <p className="text-gray-700 mb-8 text-lg">
            At Stellar Physio, we believe quality healthcare should be
            accessible. Our competitive pricing ensures you get the best
            services at an affordable rate.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-purple text-white px-8 py-3 rounded font-semibold hover:bg-purple-dark transition"
          >
            Book Appointment Today!
          </Link>
        </div>
      </section>
    </>
  );
}