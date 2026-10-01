import Link from "next/link";

export default function LowerBackPainPage() {
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
            Lower Back Pain &amp; Spine Health
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[400px] flex items-center justify-center text-purple font-semibold">
            Back Pain Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Lower Back Pain Treatment in Nairobi | Spine Health &amp;
              Physiotherapy
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700 mb-4">
              Struggling with lower back pain, stiffness, or spine discomfort?
              You&apos;re not alone. Lower back pain is one of the most common
              conditions affecting adults, often caused by poor posture, muscle
              strain, herniated discs, or lifestyle habits.
            </p>
            <p className="text-gray-700 mb-4">
              At Stellar Physio Health and Wellness Centre, we provide expert
              physiotherapy treatment for back pain in Nairobi, helping you
              relieve pain, restore movement, and prevent future injuries.
            </p>
            <p className="text-gray-700">
              Our approach focuses on identifying the root cause of your pain
              and delivering personalized rehabilitation programs for long-term
              recovery.
            </p>
          </div>
        </div>
      </section>

      {/* CAUSES & SYMPTOMS — PURPLE SECTION */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom max-w-4xl">
          {/* Causes */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Common Causes of Lower Back Pain
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-6"></div>
          <p className="text-purple-light mb-4">
            Lower back pain can result from:
          </p>
          <ul className="space-y-2 text-purple-light mb-6">
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              Poor posture (especially prolonged sitting)
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              Muscle strain and overuse
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              Herniated or slipped discs
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              Sports injuries
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              Sedentary lifestyle
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              Degenerative spine conditions
            </li>
          </ul>
          <p className="text-purple-light mb-14 italic">
            If left untreated, back pain can lead to reduced mobility, nerve
            compression, and chronic discomfort.
          </p>

          {/* Symptoms */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Symptoms You Should Not Ignore
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-6"></div>
          <p className="text-purple-light mb-4">
            You may need physiotherapy if you experience:
          </p>
          <ul className="space-y-2 text-purple-light mb-10">
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              Persistent lower back pain
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              Stiffness and limited movement
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              Pain radiating to legs (sciatica)
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              Muscle weakness
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              Difficulty standing or sitting for long
            </li>
          </ul>

          <Link
            href="/book-appointment"
            className="inline-block border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-purple transition"
          >
            Book an Appointment
          </Link>
        </div>
      </section>

      {/* TREATMENT SERVICES */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[520px] flex items-center justify-center text-purple font-semibold">
            Spine Anatomy Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Our Lower Back Pain Treatment Services
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700 mb-6">
              At Stellar Physio, we offer comprehensive spine health and
              physiotherapy treatments:
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Manual Therapy &amp; Physiotherapy:</strong> Hands-on
                  techniques like deep tissue massage, joint mobilization, and
                  myofascial release to ease muscle tightness and improve
                  circulation.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Posture Correction &amp; Ergonomics:</strong> Expert
                  guidance on maintaining proper posture and making ergonomic
                  adjustments to reduce spinal strain.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Therapeutic Exercises:</strong> Customized routines
                  to strengthen core and back muscles, enhancing flexibility and
                  endurance.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Pain Management Modalities:</strong> Heat, cold, TENS,
                  and ultrasound therapy for effective pain relief and healing.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Spinal Decompression Therapy:</strong> Non-invasive
                  relief for herniated discs, sciatica, and degenerative disc
                  disease.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Lifestyle Coaching &amp; Pain Prevention:</strong>{" "}
                  Education on daily habits, sleep posture, hydration and
                  exercise plans to support long-term spine health and prevent
                  recurrence.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE — GREEN SECTION */}
      <section className="py-20 bg-green text-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Stellar Physio for Lower Back Pain &amp; Spine Health
              Management in Nairobi?
            </h2>
            <div className="w-40 border-b-2 border-white/60 mb-8"></div>

            <ul className="space-y-4 text-white/95">
              <li className="flex gap-3">
                <span className="text-white font-bold">&#8226;</span>
                <span>
                  <strong>Expert Care:</strong> Our team consists of
                  experienced physiotherapists and spine health specialists who
                  stay updated with the latest research and advancements in
                  back pain management.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">&#8226;</span>
                <span>
                  <strong>Personalized Approach:</strong> We tailor treatment
                  plans to meet individual health and wellness needs, ensuring
                  that each patient receives customised care that addresses
                  their unique condition.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">&#8226;</span>
                <span>
                  <strong>State-of-the-Art Facility:</strong> Advanced
                  equipment and techniques ensure optimal care, providing
                  cutting-edge therapies that enhance recovery speed and
                  long-term spine health.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">&#8226;</span>
                <span>
                  <strong>Comprehensive Support:</strong> From pain relief to
                  rehabilitation, we provide holistic care to improve your
                  spine health. Our team offers continued monitoring and
                  follow-ups to track your progress and adjust treatment plans
                  accordingly.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">&#8226;</span>
                <span>
                  <strong>Patient Education:</strong> We empower patients with
                  knowledge on posture, movement, lifestyle, and self-care
                  strategies to maintain spine health beyond our clinic.
                </span>
              </li>
            </ul>

            <Link
              href="/book-appointment"
              className="inline-block border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-green transition mt-8 self-start"
            >
              Book Appointment
            </Link>
          </div>
          <div className="bg-white/20 rounded-lg min-h-[500px] flex items-center justify-center text-white font-semibold border-2 border-white/30">
            Patient Photo
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
            Lower Back Pain &amp; Spine Complications don&apos;t have to define
            your life. At Stellar Physio, we&apos;re here to guide you through
            every step of your recovery. From initial diagnosis to
            comprehensive treatment and ongoing support, our goal is to help
            you move better, feel stronger, and live healthier.
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