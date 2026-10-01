import Link from "next/link";

export default function PrePostSurgeryRehabPage() {
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
            Pre- &amp; Post-Surgery Rehab
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[420px] flex items-center justify-center text-purple font-semibold">
            Rehab Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Pre- &amp; Post-Surgery Rehab at Stellar Physio Health &amp;
              Wellness
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700">
              Proper rehabilitation before and after surgery significantly
              enhances recovery outcomes. At Stellar Physio Health &amp;
              Wellness Center, we provide specialized pre- and post-surgery
              rehab programs to strengthen muscles, improve mobility, and
              accelerate healing. Our expert therapists ensure a smooth
              recovery process, reducing complications and enhancing overall
              surgical success.
            </p>
          </div>
        </div>
      </section>

      {/* UNDERSTANDING — PURPLE SECTION */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Understanding Pre- &amp; Post-Surgery Rehab
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-6"></div>
          <p className="text-purple-light mb-8">
            Pre-surgical rehabilitation (prehab) prepares the body for surgery
            by improving strength, flexibility, and endurance. This proactive
            approach reduces post-surgical complications and shortens recovery
            time. Post-surgical rehabilitation focuses on pain management,
            restoring mobility, and rebuilding strength to ensure a full
            recovery. Whether undergoing orthopedic, neurological, or general
            surgery, a structured rehab plan is essential for regaining
            function and preventing long-term limitations.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-purple px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* COMPREHENSIVE TREATMENTS */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[480px] flex items-center justify-center text-purple font-semibold">
            Walking Aid Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Our Comprehensive Pre- &amp; Post-Surgery Rehab Treatments
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>
                    Pre-Surgical Strengthening &amp; Conditioning
                  </strong>{" "}
                  to optimize physical health before surgery
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Pain Management Strategies</strong> including ice
                  therapy, ultrasound therapy, and TENS therapy
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Manual Therapy &amp; Joint Mobilization</strong> to
                  reduce stiffness and enhance flexibility
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Post-Surgical Rehabilitation Exercises</strong> to
                  restore strength, mobility, and balance
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Scar Tissue Management &amp; Soft Tissue Therapy</strong>{" "}
                  to prevent adhesions and improve healing
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Guidance on Assistive Devices</strong> for safe
                  mobility and recovery
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
              Why Choose Stellar Physio for Pre- &amp; Post-Surgery Rehab?
            </h2>
            <div className="w-40 border-b-2 border-white/60 mb-8"></div>

            <ul className="space-y-4 text-white/95">
              <li className="flex gap-3">
                <span className="text-white font-bold">&#8226;</span>
                <span>
                  <strong>Experienced Rehabilitation Specialists</strong>{" "}
                  ensuring optimal pre- and post-surgical care
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">&#8226;</span>
                <span>
                  <strong>Personalized Recovery Plans</strong> tailored to the
                  type of surgery and patient needs
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">&#8226;</span>
                <span>
                  <strong>Evidence-Based Techniques</strong> to maximize
                  recovery and prevent complications
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">&#8226;</span>
                <span>
                  <strong>Holistic Approach</strong> integrating physical
                  therapy, pain management, and patient education
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-white/20 rounded-lg min-h-[400px] flex items-center justify-center text-white font-semibold border-2 border-white/30">
            Therapy Session Photo
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