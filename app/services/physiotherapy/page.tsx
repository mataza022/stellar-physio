import Link from "next/link";

export default function PhysiotherapyPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Physiotherapy</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-purple-light rounded-lg h-80 flex items-center justify-center text-purple font-semibold">
            Physiotherapy Photo
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple mb-4">
              Physiotherapy at Stellar Physio Health &amp; Wellness
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700">
              Our physiotherapy services at Stellar Physio aim to restore
              movement, relieve pain, and improve physical function through
              evidence-based treatments. Whether you are recovering from an
              injury, managing a chronic condition, or looking to enhance
              mobility, our experienced physiotherapists provide personalized,
              hands-on therapy tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* WHO CAN BENEFIT — PURPLE SECTION */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who Can Benefit from Physiotherapy?
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-8"></div>

          <ol className="list-decimal list-inside space-y-3 text-purple-light">
            <li>
              <strong className="text-white">Chronic Pain Patients</strong>{" "}
              (back pain, arthritis, knee pain, neck pain)
            </li>
            <li>
              <strong className="text-white">
                Post-Surgery Rehabilitation Patients
              </strong>{" "}
              (joint replacement, spinal surgery, fractures)
            </li>
            <li>
              <strong className="text-white">Neurological Conditions</strong>{" "}
              (stroke, multiple sclerosis, Parkinson&apos;s disease)
            </li>
            <li>
              <strong className="text-white">Sports Injuries &amp; Muscle Strains</strong>{" "}
              (sprains, ligament injuries, runner&apos;s knee)
            </li>
            <li>
              <strong className="text-white">
                Workplace Injury &amp; Postural Issues
              </strong>{" "}
              (ergonomic concerns, repetitive strain injuries)
            </li>
          </ol>
        </div>
      </section>

      {/* OUR TECHNIQUES */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-purple-light rounded-lg h-96 flex items-center justify-center text-purple font-semibold">
            Technique Photo
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple mb-4">
              Our Physiotherapy Techniques
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                <span>
                  <strong>Manual Therapy &amp; Joint Mobilization:</strong>{" "}
                  Hands-on techniques to restore movement and reduce stiffness.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                <span>
                  <strong>Pain Management Modalities:</strong> Advanced methods
                  like ultrasound therapy, heat therapy, and electrical
                  stimulation (TENS) to reduce discomfort.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                <span>
                  <strong>Stretching &amp; Strengthening Exercises:</strong>{" "}
                  Customized exercises to improve flexibility and muscular
                  endurance.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                <span>
                  <strong>Postural Correction &amp; Ergonomic Training:</strong>{" "}
                  Corrective strategies to reduce strain and prevent future
                  injuries.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                <span>
                  <strong>Gait &amp; Balance Training:</strong> Essential for
                  stroke rehabilitation and fall prevention.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-purple mb-4">
              Why Choose Our Physiotherapy Services?
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                Evidence-Based &amp; Hands-On Treatment
              </li>
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                Customized Recovery Plans for Every Patient
              </li>
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                Experienced &amp; Certified Physiotherapists
              </li>
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                Convenient Home-Based Therapy Available
              </li>
            </ul>
          </div>
          <div className="bg-purple-light rounded-lg h-80 flex items-center justify-center text-purple font-semibold">
            Why Choose Photo
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Affordable Physiotherapy in Nairobi
          </h2>
          <div className="w-40 border-b-2 border-white mx-auto mb-6"></div>
          <p className="text-lg mb-8 opacity-90">
            Looking for affordable physiotherapy near me or the best
            physiotherapy services in Nairobi?
            <br />
            At Stellar Physio, we offer premium care at competitive rates to
            make quality healthcare accessible to all.
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