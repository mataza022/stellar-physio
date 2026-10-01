import Link from "next/link";

export default function ArthritisJointPainsPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/conditions-hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Arthritis &amp; Joint Pains
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[380px] flex items-center justify-center text-purple font-semibold">
            Knee Treatment Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Arthritis &amp; Joint Pains Management at Stellar Physio Health
              &amp; Wellness
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700">
              Arthritis and joint pain can be debilitating, affecting mobility
              and quality of life. At Stellar Physio Health &amp; Wellness
              Center, we provide specialized care to help manage pain, improve
              joint function, and restore movement. Whether you are dealing
              with osteoarthritis, rheumatoid arthritis, or joint stiffness due
              to age, our dedicated team ensures that you receive the most
              effective treatment to regain comfort and mobility. Our
              integrative approach focuses on reducing pain, preventing further
              joint damage, and helping you maintain an active lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* UNDERSTANDING — PURPLE SECTION */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Understanding Arthritis &amp; Joint Pains
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-6"></div>
          <p className="text-purple-light mb-8">
            Arthritis refers to inflammation of the joints, causing stiffness,
            pain, and swelling. The most common types include osteoarthritis,
            which results from wear and tear, and rheumatoid arthritis, an
            autoimmune disorder that attacks joint tissues. Joint pains can
            also result from injuries, overuse, or age-related wear and tear.
            Symptoms often include reduced range of motion, joint stiffness,
            tenderness, and occasional flare-ups that lead to discomfort and
            immobility. Without proper management, arthritis can progressively
            limit movement, causing long-term disability. Our experts assess
            your condition using advanced diagnostic tools and create a
            tailored treatment plan to slow disease progression and enhance
            joint function. Early intervention and targeted therapy can help
            alleviate symptoms, improve joint stability, and prevent the
            condition from worsening.
          </p>
          <Link
            href="/book-appointment"
            className="inline-block border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-purple transition"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* COMPREHENSIVE TREATMENT */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col gap-6">
            <div className="bg-purple-light rounded-lg flex-1 min-h-[260px] flex items-center justify-center text-purple font-semibold">
              Joint Pain Photo
            </div>
            <div className="bg-purple-light rounded-lg flex-1 min-h-[260px] flex items-center justify-center text-purple font-semibold">
              Anatomy Photo
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Comprehensive Arthritis &amp; Joint Pain Treatment
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <ul className="space-y-4 text-gray-700 mb-8">
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Physiotherapy &amp; Exercise Therapy</strong> to
                  strengthen muscles and support joints. This includes
                  resistance training, aquatic therapy, and tailored stretching
                  routines to reduce joint stress and enhance movement.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Pain Relief Modalities</strong> like ultrasound
                  therapy, heat therapy, and electrical stimulation to manage
                  inflammation and provide long-lasting pain relief.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Joint Mobilization &amp; Manual Therapy</strong> to
                  improve flexibility and reduce stiffness. Our specialists use
                  targeted manipulation techniques to increase circulation and
                  restore joint function.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Hydrotherapy &amp; Low-Impact Exercises</strong> to
                  ease pain without stressing the joints. Water-based therapies
                  and activities such as yoga and Pilates offer gentle yet
                  effective ways to maintain joint mobility and reduce
                  discomfort.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Nutritional Guidance &amp; Lifestyle Coaching</strong>{" "}
                  to complement physical treatments. We offer dietary advice on
                  anti-inflammatory foods and supplements that support joint
                  health and reduce arthritis symptoms.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Assistive Devices &amp; Bracing Support</strong> to
                  improve mobility and relieve joint pressure. We provide
                  customized bracing solutions to enhance joint stability and
                  reduce pain during movement.
                </span>
              </li>
            </ul>
            <Link
              href="/book-appointment"
              className="inline-block bg-green text-white px-6 py-3 rounded font-semibold hover:bg-green-dark transition self-start"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE — GREEN SECTION */}
      <section className="py-20 bg-green text-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Stellar Physio?
            </h2>
            <div className="w-40 border-b-2 border-white/60 mb-8"></div>

            <ul className="space-y-4 text-white/95">
              <li className="flex gap-3">
                <span className="text-white font-bold">&#8226;</span>
                <span>
                  <strong>
                    Experienced Physiotherapists Specializing in Arthritis Care:
                  </strong>{" "}
                  Our team understands the complexities of arthritis and
                  employs the latest evidence-based treatment methods.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">&#8226;</span>
                <span>
                  <strong>
                    Individualized Treatment Plans for Pain Relief &amp; Improved
                    Mobility:
                  </strong>{" "}
                  We focus on long-term results, ensuring patients achieve
                  sustainable improvements in movement and quality of life.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">&#8226;</span>
                <span>
                  <strong>Use of Modern Therapeutic Techniques:</strong> We
                  incorporate cutting-edge therapies, including regenerative
                  treatments, to slow disease progression and enhance recovery
                  outcomes.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">&#8226;</span>
                <span>
                  <strong>Support Beyond Treatment Sessions:</strong> We
                  empower patients with self-care techniques, home exercise
                  programs, and ongoing education to maintain joint health
                  beyond the clinic.
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-white/20 rounded-lg min-h-[400px] flex items-center justify-center text-white font-semibold border-2 border-white/30">
            Patient Consultation Photo
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-purple mb-4">
            Take the First Step Toward Relief
          </h2>
          <div className="w-40 border-b-2 border-purple mx-auto mb-6"></div>
          <p className="text-lg mb-8 text-gray-700">
            Don&apos;t let Arthritis &amp; Joint Pains hold you back. Take the
            first step toward recovery with Stellar Physio&apos;s expert care.
            Call us at <strong>0706 101 999</strong>
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-purple text-white px-8 py-3 rounded font-semibold hover:bg-purple-dark transition"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}