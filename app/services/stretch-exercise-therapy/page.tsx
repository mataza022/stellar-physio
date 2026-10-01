import Link from "next/link";

export default function StretchExerciseTherapyPage() {
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
            Stretch &amp; Exercise Therapy
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[380px] flex items-center justify-center text-purple font-semibold">
            Stretch Therapy Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Stretch &amp; Exercise Therapy at Stellar Physio Health &amp;
              Wellness
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700">
              Our Stretch &amp; Exercise Therapy programs are designed to help
              individuals improve flexibility, relieve muscle tightness, and
              restore movement. Whether you have stiff joints, mobility
              restrictions, or simply want to enhance your range of motion, our
              expert therapists will guide you through personalized routines.
            </p>
          </div>
        </div>
      </section>

      {/* WHO NEEDS IT — PURPLE SECTION */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who Needs Stretch &amp; Exercise Therapy?
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-8"></div>

          <ol className="list-decimal list-inside space-y-3 text-purple-light">
            <li>Individuals with Chronic Pain or Muscle Stiffness</li>
            <li>Post-Surgery Patients Rebuilding Mobility</li>
            <li>Athletes Looking to Prevent Injuries</li>
            <li>Office Workers with Poor Posture &amp; Back Pain</li>
          </ol>
        </div>
      </section>

      {/* WHAT WE OFFER — IMAGE LEFT, TEXT RIGHT */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[420px] flex items-center justify-center text-purple font-semibold">
            Stretching Exercise Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-purple mb-4">
              What We Offer
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>

            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Assisted Stretching Routines</strong> to enhance
                  flexibility
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Posture Correction &amp; Alignment Techniques</strong>{" "}
                  for improved movement
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Strength &amp; Stability Exercises</strong> to
                  reinforce muscle support
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Pain Relief Strategies</strong> through targeted
                  muscle activation
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE — TEXT LEFT, IMAGE RIGHT */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Why Choose Our Stretch &amp; Exercise Therapy?
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                Improves Mobility &amp; Muscle Function
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                Reduces Pain &amp; Prevents Injury
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                Customized Programs for All Ages
              </li>
            </ul>
            <Link
              href="/book-appointment"
              className="inline-block bg-purple text-white px-6 py-3 rounded font-semibold hover:bg-purple-dark transition self-start"
            >
              Book Appointment Today!
            </Link>
          </div>
          <div className="bg-purple-light rounded-lg min-h-[340px] flex items-center justify-center text-purple font-semibold">
            Exercise Routine Photo
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Affordable Stretch &amp; Exercise Therapy in Nairobi
          </h2>
          <div className="w-40 border-b-2 border-white mx-auto mb-6"></div>
          <p className="text-lg mb-8 opacity-90">
            Looking for affordable Stretch &amp; Exercise Therapy near you or
            the best Stretch &amp; Exercise Therapy services in Nairobi? At
            Stellar Physio, we offer premium care at competitive rates to make
            quality healthcare accessible to all.
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-purple text-white px-8 py-3 rounded font-semibold hover:bg-purple-dark transition"
          >
            Book Appointment Today!
          </Link>
        </div>
      </section>
    </>
  );
}