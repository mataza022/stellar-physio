import Link from "next/link";

export default function StrokeRehabilitationPage() {
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
            Stroke Rehabilitation
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[420px] flex items-center justify-center text-purple font-semibold">
            Rehabilitation Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Stroke Rehabilitation in Nairobi – Expert Physiotherapy for
              Stroke Recovery at Stellar Physio
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700 mb-4">
              A stroke is a serious medical condition caused by an interruption
              of blood flow to the brain, leading to damage in brain cells.
              This often results in paralysis, muscle weakness, speech
              difficulties, balance problems, and loss of coordination.
            </p>
            <p className="text-gray-700 mb-4">
              For many patients, recovery does not end after hospital
              discharge—it begins a critical journey known as stroke
              rehabilitation.
            </p>
            <p className="text-gray-700 mb-4">
              Professional care is essential to restore mobility, independence,
              and quality of life.
            </p>
            <p className="text-gray-700">
              At Stellar Physio Health &amp; Wellness Centre, we provide expert
              stroke physiotherapy and neurorehabilitation services in Nairobi,
              helping patients recover faster through personalized,
              evidence-based treatment programs.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS STROKE REHAB — PURPLE SECTION */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What is Stroke Rehabilitation and Why is it Important?
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-green">
            Understanding Stroke and Its Effects
          </h3>
          <div className="w-40 border-b-2 border-white/60 mb-6"></div>

          <p className="text-purple-light mb-4">
            A stroke occurs when oxygen supply to the brain is disrupted,
            affecting vital functions such as:
          </p>
          <ul className="space-y-2 text-purple-light mb-6">
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              Movement and coordination
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              Speech and communication
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              Memory and cognitive ability
            </li>
          </ul>

          <p className="text-purple-light mb-4">
            Common Stroke Symptoms include:
          </p>
          <ul className="space-y-2 text-purple-light mb-6">
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              Muscle weakness or paralysis (especially on one side of the body)
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              Difficulty walking or balancing
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              Speech and swallowing difficulties
            </li>
            <li className="flex gap-3">
              <span className="text-purple-light">&#8226;</span>
              Loss of coordination and motor control
            </li>
          </ul>

          <p className="text-purple-light mb-8">
            Without proper stroke rehabilitation treatment, these challenges
            can significantly affect daily life.
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
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-purple mb-4">
            Comprehensive Stroke Rehabilitation Treatments
          </h2>
          <div className="w-40 border-b-2 border-purple mb-6"></div>
          <p className="text-gray-700 mb-6">
            The primary goal of stroke recovery physiotherapy is to:
          </p>
          <ul className="space-y-4 text-gray-700 mb-8">
            <li className="flex gap-3">
              <span className="text-purple font-bold">&#8226;</span>
              <span>
                <strong>Physiotherapy &amp; Motor Relearning Therapy</strong> to
                improve movement, balance, and muscle strength
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple font-bold">&#8226;</span>
              <span>
                <strong>Gait Training &amp; Mobility Assistance</strong> with
                assistive devices to restore walking ability and enhance
                stability
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple font-bold">&#8226;</span>
              <span>
                <strong>Neuromuscular Re-Education</strong> to retain weakened
                muscles and enhance motor control
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple font-bold">&#8226;</span>
              <span>
                <strong>Occupational Therapy for Daily Activities</strong> such
                as dressing, eating, and writing, promoting independence
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple font-bold">&#8226;</span>
              <span>
                <strong>Speech &amp; Swallowing Therapy</strong> to address
                speech difficulties and ensure safe eating and drinking
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple font-bold">&#8226;</span>
              <span>
                <strong>Cognitive &amp; Memory Training</strong> to enhance
                problem-solving skills and mental clarity
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple font-bold">&#8226;</span>
              <span>
                <strong>Home Exercise &amp; Caregiver Support</strong> to
                continue progress outside therapy sessions.
              </span>
            </li>
          </ul>
          <p className="text-gray-700 italic">
            At Stellar Physio Nairobi, our programs focus on
            neuroplasticity—the brain&apos;s ability to reorganize and relearn
            lost functions.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE — GREEN SECTION */}
      <section className="py-20 bg-green text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Stellar Physio for Stroke Rehabilitation in Nairobi?
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-8"></div>

          <ul className="space-y-4 text-white/95 mb-10">
            <li className="flex gap-3">
              <span className="text-white font-bold">&#8226;</span>
              <span>
                <strong>Specialized Stroke Rehabilitation Team</strong> with
                experience in neuro-recovery
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-white font-bold">&#8226;</span>
              <span>
                <strong>Personalized Treatment Plans</strong> for maximum
                recovery and independence
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-white font-bold">&#8226;</span>
              <span>
                <strong>Advanced Rehabilitation Techniques</strong> including
                robotic-assisted therapy and functional electrical stimulation
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-white font-bold">&#8226;</span>
              <span>
                <strong>Comprehensive Support System</strong> with patient and
                caregiver education
              </span>
            </li>
          </ul>

          <Link
            href="/contact"
            className="inline-block bg-white text-green px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
          >
            Book Appointment
          </Link>
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
            Don&apos;t let stroke related complications define your life. Take
            the first step toward relief and improved well-being with Stellar
            Physio. Call us at <strong>0706 101 999</strong>
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