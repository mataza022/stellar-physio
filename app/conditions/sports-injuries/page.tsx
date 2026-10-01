import Link from "next/link";

export default function SportsInjuriesPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/conditions-hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Sports Injuries</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[400px] flex items-center justify-center text-purple font-semibold">
            Athlete Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Sports Injury Rehabilitation in Ngong Road, Nairobi
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700">
              Sports injuries can sideline athletes and active individuals,
              affecting performance and long-term mobility. At Stellar Physio
              Health &amp; Wellness Center, we specialize in treating acute and
              chronic sports-related injuries, helping patients recover quickly
              and safely. Our team provides targeted therapies to relieve pain,
              restore function, and prevent future injuries, ensuring a safe
              return to sports and physical activities.
            </p>
          </div>
        </div>
      </section>

      {/* UNDERSTANDING — PURPLE SECTION */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Understanding Sports Injuries
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-6"></div>
          <p className="text-purple-light mb-8">
            Sports injuries range from minor sprains to severe ligament tears,
            fractures, and overuse conditions. Common injuries include muscle
            strains, ligament sprains, rotator cuff injuries, tennis elbow,
            shin splints, and knee injuries like ACL tears. If left untreated,
            these conditions can lead to chronic pain and limited mobility. Our
            sports rehabilitation program focuses on reducing inflammation,
            restoring movement, and strengthening the body to prevent re-injury.
            Early intervention accelerates healing and ensures optimal recovery.
          </p>
          <Link
            href="/contact"
            className="inline-block border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-purple transition"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* COMPREHENSIVE TREATMENTS */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[480px] flex items-center justify-center text-purple font-semibold">
            Tennis Player Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Comprehensive Sports Injury Treatments
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Injury Assessment &amp; Biomechanical Analysis</strong>{" "}
                  to identify the root cause and develop a customized treatment
                  plan
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Physiotherapy &amp; Strength Training</strong> to
                  rebuild muscle, improve stability, and enhance performance
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Manual Therapy &amp; Joint Mobilization</strong> to
                  alleviate pain and restore range of motion
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Pain Management Techniques</strong> including dry
                  needling, ultrasound therapy, and electrotherapy
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Rehabilitation Exercises &amp; Sport-Specific Drills</strong>{" "}
                  to ensure a safe return to activity
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Preventative Training &amp; Education</strong> to
                  reduce the risk of future injuries
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
              Why Choose Stellar Physio for Sports Injuries Management?
            </h2>
            <div className="w-40 border-b-2 border-white/60 mb-8"></div>

            <ul className="space-y-4 text-white/95">
              <li className="flex gap-3">
                <span className="text-white font-bold">&#8226;</span>
                <span>
                  <strong>Sports Rehabilitation Experts</strong> with experience
                  treating athletes of all levels
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">&#8226;</span>
                <span>
                  <strong>Customized Recovery Plans</strong> based on the type
                  of sport and injury
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">&#8226;</span>
                <span>
                  <strong>State-of-the-Art Treatment Techniques</strong> to
                  ensure the best outcomes
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">&#8226;</span>
                <span>
                  <strong>Focus on Long-Term Injury Prevention</strong> through
                  education and strength programs
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-white/20 rounded-lg min-h-[400px] flex items-center justify-center text-white font-semibold border-2 border-white/30">
            Runners Photo
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="container-custom max-w-3xl">
          <p className="text-lg mb-6 text-gray-700">
            Don&apos;t let sports injuries hold you back. Take the first step
            toward recovery with Stellar Physio&apos;s expert care. Call us at{" "}
            <strong>0706 101 999</strong>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-purple mb-4">
            Take the First Step Toward Relief
          </h2>
          <div className="w-40 border-b-2 border-purple mx-auto mb-8"></div>
          <Link
            href="/contact"
            className="inline-block bg-purple text-white px-8 py-3 rounded font-semibold hover:bg-purple-dark transition"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}