import Link from "next/link";

export default function PrePostNatalMassagesPage() {
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
            Pre &amp; Post-Natal Massages
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[400px] flex items-center justify-center text-purple font-semibold">
            Massage Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Pre &amp; Post-Natal Massages at Stellar Physio Health &amp;
              Wellness
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700">
              Pregnancy and childbirth bring significant changes to a
              woman&apos;s body, often leading to discomfort, muscle tension,
              and stress. At <strong>Stellar Physio Health &amp; Wellness
              Center</strong>, we offer specialized <strong>pre and
              post-natal massage therapies</strong> designed to promote
              relaxation, relieve pain, and support overall well-being during
              and after pregnancy. Our expert therapists use safe and effective
              techniques to help expectant mothers ease back pain, improve
              circulation, and reduce swelling, while also aiding postpartum
              recovery by restoring muscle tone and alleviating tension.
            </p>
          </div>
        </div>
      </section>

      {/* UNDERSTANDING — PURPLE SECTION */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Understanding Pre &amp; Post-Natal Massages
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-6"></div>
          <p className="text-purple-light mb-8">
            Pregnancy can cause hormonal changes, postural adjustments, and
            increased strain on muscles and joints, leading to issues such as
            back pain, swollen ankles, and fatigue. Pre-natal massages focus on
            reducing stress, improving sleep quality, and enhancing flexibility
            in preparation for childbirth. After delivery, post-natal massages
            help new mothers recover by promoting muscle relaxation, improving
            blood circulation, reducing swelling, and alleviating postpartum
            pain. These massages also assist in hormone regulation and
            emotional well-being, helping mothers transition smoothly into
            postpartum life.
          </p>
          <Link
            href="/contact"
            className="inline-block border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-purple transition"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* COMPREHENSIVE THERAPIES */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[500px] flex items-center justify-center text-purple font-semibold">
            Pregnancy Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Our Comprehensive Pre &amp; Post-Natal Massage Therapies
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Gentle Prenatal Massage Techniques</strong> to relieve
                  lower back pain, reduce muscle tightness, and improve overall
                  comfort during pregnancy
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Postpartum Recovery Massage</strong> to help ease
                  muscle soreness, support the body&apos;s natural healing
                  process, and aid in emotional relaxation
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Lymphatic Drainage Therapy</strong> to reduce swelling
                  and improve circulation, preventing fluid retention that is
                  common in pregnancy and postpartum recovery
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Pelvic Floor &amp; Core Strengthening Massage</strong>{" "}
                  to support muscle recovery and restore post-birth body balance
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Stress-Relief &amp; Relaxation Therapy</strong> using
                  soothing techniques to promote mental well-being and improve
                  sleep quality for new mothers
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
              Why Choose Stellar Physio?
            </h2>
            <div className="w-40 border-b-2 border-white/60 mb-8"></div>

            <ul className="space-y-4 text-white/95">
              <li className="flex gap-3">
                <span className="text-white font-bold">&#8226;</span>
                <span>
                  <strong>Certified Maternal Massage Specialists:</strong> Our
                  team is trained in safe, evidence-based techniques tailored
                  for pregnancy and postpartum recovery.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">&#8226;</span>
                <span>
                  <strong>Customized Care Plans for Each Stage of Motherhood:</strong>{" "}
                  We assess individual needs and provide targeted treatments to
                  promote long-term well-being.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">&#8226;</span>
                <span>
                  <strong>Holistic Approach to Maternal Health:</strong> Our
                  therapies are designed to complement other wellness
                  practices, ensuring a well-rounded recovery.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">&#8226;</span>
                <span>
                  <strong>Safe, Comfortable, and Relaxing Environment:</strong>{" "}
                  We provide a soothing atmosphere where mothers can experience
                  relief and rejuvenation with complete peace of mind.
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-white/20 rounded-lg min-h-[420px] flex items-center justify-center text-white font-semibold border-2 border-white/30">
            Postnatal Massage Photo
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
            Take the first step toward relief and improved well-being with
            Stellar Physio. Call us at <strong>0706 101 999</strong>
          </p>
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