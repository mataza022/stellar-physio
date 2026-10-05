import Link from "next/link";

export default function ChiropractorServicesPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero1.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Chiropractor Services
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/chiropractor.webp"
              alt="Chiropractor at Stellar Physio"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple mb-4">
              Chiropractor Services at Stellar Physio Health &amp; Wellness
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700">
              At <strong>Stellar Physio</strong>, we provide professional chiropractic
              care to help you achieve optimal spine health and alleviate pain. Our
              expert chiropractors specialize in diagnosing and treating conditions
              related to the musculoskeletal system, ensuring your body is aligned
              and functioning at its best.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE / BENEFITS / CONDITIONS — ALL IN PURPLE */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom max-w-4xl">
          {/* Why Choose */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Chiropractic Care?
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-6"></div>
          <p className="text-purple-light mb-12">
            Chiropractic care focuses on restoring balance to your spine and
            musculoskeletal system, promoting natural healing and overall
            wellness. It&apos;s an effective, non-invasive solution for managing
            pain, improving mobility, and enhancing your quality of life.
          </p>

          {/* Benefits */}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Benefits of Chiropractic Care
          </h3>
          <div className="w-40 border-b-2 border-white/60 mb-6"></div>
          <ul className="space-y-3 mb-12 text-purple-light">
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              <span>
                <strong className="text-white">Pain Relief:</strong> Effective
                treatment for back pain, neck pain, and joint discomfort.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              <span>
                <strong className="text-white">Improved Mobility:</strong> Restore
                flexibility and range of motion.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              <span>
                <strong className="text-white">Posture Correction:</strong> Realign
                your spine for better posture and reduced strain.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              <span>
                <strong className="text-white">Injury Prevention:</strong> Prevent
                injuries by improving body mechanics.
              </span>
            </li>
          </ul>

          {/* Conditions */}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Conditions We Treat
          </h3>
          <div className="w-40 border-b-2 border-white/60 mb-6"></div>
          <p className="text-purple-light mb-4">
            Our chiropractic services are ideal for addressing:
          </p>
          <ul className="space-y-2 text-purple-light">
            <li className="flex gap-3">
              <span>&#8226;</span> Chronic Back Pain
            </li>
            <li className="flex gap-3">
              <span>&#8226;</span> Neck Pain and Stiffness
            </li>
            <li className="flex gap-3">
              <span>&#8226;</span> Sciatica
            </li>
            <li className="flex gap-3">
              <span>&#8226;</span> Headaches and Migraines related to spinal misalignment
            </li>
            <li className="flex gap-3">
              <span>&#8226;</span> Sports Injuries
            </li>
            <li className="flex gap-3">
              <span>&#8226;</span> Postural Issues from prolonged sitting or poor ergonomics
            </li>
            <li className="flex gap-3">
              <span>&#8226;</span> Joint Pain and Arthritis
            </li>
          </ul>
        </div>
      </section>

      {/* OUR TECHNIQUES */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/chirotech.webp"
              alt="Chiropractic Techniques"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple mb-4">
              Our Chiropractic Techniques
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700 mb-6">
              At Stellar Physio, our chiropractors use evidence-based methods
              and personalised techniques to provide effective treatment,
              including:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                <span>
                  <strong>Spinal Adjustments:</strong> Correct misalignments to
                  relieve pressure
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                <span>
                  <strong>Soft Tissue Therapy:</strong> Address muscle tightness
                  and improve circulation
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                <span>
                  <strong>Postural Education:</strong> Guidance on maintaining
                  proper posture for long-term relief
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple">&#8226;</span>
                <span>
                  <strong>Rehabilitation Exercises:</strong> Strengthen and
                  stabilize your body
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHO CAN BENEFIT + WHY STELLAR */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            {/* Who Can Benefit */}
            <h2 className="text-3xl font-bold text-purple mb-4">
              Who Can Benefit from Chiropractic Care?
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-12">
              <li>Office workers experiencing posture-related discomfort</li>
              <li>Athletes recovering from injuries or looking to enhance performance</li>
              <li>Individuals with chronic pain seeking non-invasive solutions</li>
              <li>Anyone experiencing joint stiffness or reduced mobility</li>
            </ol>

            {/* Why Stellar */}
            <h2 className="text-3xl font-bold text-purple mb-4">
              Why Stellar Physio for Chiropractic Services?
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>Experienced Chiropractors:</strong> Certified
                professionals dedicated to your care
              </li>
              <li>
                <strong>Holistic Approach:</strong> We combine chiropractic care
                with other wellness services for comprehensive treatment
              </li>
              <li>
                <strong>Convenient Locations:</strong> Accessible clinics in
                Ngong Road, Karen, and Parklands
              </li>
              <li>
                <strong>Affordable Care:</strong> Premium services at
                competitive rates
              </li>
            </ol>
          </div>

          {/* Photo placeholders stacked */}
          <div className="space-y-6">
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/benfit1.webp"
                alt="Chiropractic care benefit"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/benfit2.webp"
                alt="Chiropractic care benefit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book Your Chiropractic Session Today!
          </h2>
          <div className="w-40 border-b-2 border-white mx-auto mb-6"></div>
          <p className="text-lg mb-8 opacity-90">
            Align your body and rediscover pain-free living with Stellar
            Physio&apos;s chiropractic services.
            <br />
            Call us at <strong>0706 101 999</strong>
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