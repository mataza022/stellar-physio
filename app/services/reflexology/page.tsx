import Link from "next/link";

export default function ReflexologyPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Reflexology</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[340px] flex items-center justify-center text-purple font-semibold">
            Foot Massage Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Reflexology at Stellar Physio Health &amp; Wellness
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700">
              Reflexology is a holistic therapy that focuses on stimulating
              specific pressure points on the feet, hands, and ears to promote
              natural healing, relaxation, and overall well-being. At Stellar
              Physio Health &amp; Wellness, our trained reflexologists use this
              technique to help relieve pain, reduce stress, improve
              circulation, and restore the body&apos;s natural balance.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS + WHO CAN BENEFIT — PURPLE SECTION */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom max-w-4xl">
          {/* How It Works */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Does Reflexology Work?
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-6"></div>
          <p className="text-purple-light mb-14">
            Reflexology is based on the principle that different reflex points
            on the feet, hands, and ears correspond to various organs and
            systems in the body. By applying gentle but firm pressure to these
            reflex points, we can stimulate the nervous system, encourage the
            release of tension, and enhance the body&apos;s ability to heal
            itself.
          </p>

          {/* Who Can Benefit */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who Can Benefit from Reflexology?
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-8"></div>

          <ul className="space-y-4 text-purple-light">
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              <span>
                <strong className="text-white">
                  Individuals with Chronic Pain &amp; Inflammation
                </strong>{" "}
                – Reflexology can help reduce pain related to arthritis,
                migraines, and musculoskeletal conditions.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              <span>
                <strong className="text-white">
                  People Experiencing Stress &amp; Anxiety
                </strong>{" "}
                – It provides deep relaxation, reduces cortisol levels, and
                promotes emotional well-being.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              <span>
                <strong className="text-white">
                  Those with Circulatory &amp; Lymphatic Issues
                </strong>{" "}
                – Helps improve blood flow, remove toxins, and enhance oxygen
                delivery to tissues.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              <span>
                <strong className="text-white">
                  Patients with Digestive Disorders
                </strong>{" "}
                – Reflexology supports gut health, relieves bloating, and helps
                with irritable bowel syndrome (IBS).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              <span>
                <strong className="text-white">
                  Individuals with Sleep Disorders
                </strong>{" "}
                – Promotes relaxation and helps regulate sleep patterns.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              <span>
                <strong className="text-white">
                  Expectant Mothers &amp; Postnatal Women
                </strong>{" "}
                – Can ease pregnancy discomfort and support postpartum
                recovery.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[520px] flex items-center justify-center text-purple font-semibold">
            Reflexology Session Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Key Benefits of Reflexology Therapy
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Pain Relief &amp; Muscle Relaxation:</strong> Helps
                  reduce tension, stiffness, and discomfort in muscles and
                  joints.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Stress &amp; Anxiety Reduction:</strong> Encourages
                  deep relaxation, calming the nervous system.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Improved Blood Circulation:</strong> Enhances oxygen
                  delivery and detoxification processes.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Boosts Nerve Function &amp; Energy Levels:</strong>{" "}
                  Stimulates nerve endings to improve neurological function.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Supports Digestive Health:</strong> Helps with
                  bloating, indigestion, and gut-related issues.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Enhances Sleep Quality:</strong> Induces a state of
                  deep relaxation, aiding restful sleep.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Why Choose Reflexology at Stellar Physio?
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                Experienced Reflexologists Trained in Advanced Techniques
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                Holistic &amp; Natural Approach to Health &amp; Wellness
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                Non-Invasive, Drug-Free, and Completely Safe Therapy
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                A Soothing &amp; Rejuvenating Experience for Body &amp; Mind
              </li>
            </ul>
          </div>
          <div className="bg-purple-light rounded-lg min-h-[340px] flex items-center justify-center text-purple font-semibold">
            Foot Treatment Photo
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Affordable Reflexology Services in Nairobi
          </h2>
          <div className="w-40 border-b-2 border-white mx-auto mb-6"></div>
          <p className="text-lg mb-8 opacity-90">
            Whether you need pain relief, stress management, or overall
            wellness support, we are here to help you feel your best!
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