import Link from "next/link";

export default function SportsMassagePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Sports Massage</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[340px] flex items-center justify-center text-purple font-semibold">
            Sports Massage Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Sports Massage at Stellar Physio Health &amp; Wellness
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700">
              Our sports massage therapy at Stellar Physio is designed for
              athletes, active individuals, and anyone looking to reduce muscle
              tension, enhance flexibility, and prevent injuries. Whether you
              are training for a competition or need relief from soreness, our
              specialized massage techniques will help you recover faster and
              perform at your peak.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS — PURPLE SECTION */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Benefits of Sports Massage
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-8"></div>

          <ol className="list-decimal list-inside space-y-3 text-purple-light">
            <li>Reduces Muscle Soreness &amp; Improves Recovery Time</li>
            <li>Enhances Flexibility &amp; Reduces the Risk of Injury</li>
            <li>Increases Blood Circulation &amp; Removes Toxins</li>
            <li>Boosts Performance &amp; Eases Stress on Muscles</li>
          </ol>
        </div>
      </section>

      {/* TECHNIQUES */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[420px] flex items-center justify-center text-purple font-semibold">
            Massage Technique Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Techniques Used
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Deep Tissue Massage:</strong> Focused pressure to
                  release knots and muscle tightness.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Trigger Point Therapy:</strong> Targeting specific
                  areas to relieve pain and improve mobility.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Pre-Event &amp; Post-Event Massage:</strong> Preparing
                  muscles for performance and aiding recovery.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Myofascial Release:</strong> Working on connective
                  tissue to restore muscle elasticity.
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
              Why Choose Our Sports Massage?
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                Tailored for Athletes &amp; Active Lifestyles
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                Expert Therapists with Experience in Sports Recovery
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                Relieves Tension, Reduces Stress &amp; Improves Flexibility
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
            Massage Photo
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Affordable Sports Massage in Nairobi
          </h2>
          <div className="w-40 border-b-2 border-white mx-auto mb-6"></div>
          <p className="text-lg mb-8 opacity-90">
            Looking for affordable Sports Massage near you or the best Sports
            Massage services in Nairobi? At Stellar Physio, we offer premium
            care at competitive rates to make quality healthcare accessible to
            all.
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