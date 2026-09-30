import Link from "next/link";

export default function OccupationalTherapyPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Occupational Therapy
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[400px] flex items-center justify-center text-purple font-semibold">
            Mother &amp; Child Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Occupational Therapy at Stellar Physio Health &amp; Wellness
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700">
              At Stellar Physio Health &amp; Wellness, our Occupational Therapy
              (OT) services focus on helping children develop the skills they
              need to participate in daily activities with confidence and
              independence. We specialize in working with children diagnosed
              with Autism, Cerebral Palsy, and Erb&apos;s Palsy, using
              evidence-based interventions to enhance their functional
              abilities, motor coordination, and social engagement.
            </p>
          </div>
        </div>
      </section>

      {/* HOW OT SUPPORTS YOUR CHILD — PURPLE SECTION */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Occupational Therapy Supports Your Child
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-6"></div>
          <p className="text-purple-light mb-8">
            Our expert occupational therapists assess each child&apos;s unique
            challenges and create personalized therapy plans that focus on:
          </p>

          <ol className="list-decimal list-inside space-y-4 text-purple-light">
            <li>
              <strong className="text-white">
                Fine &amp; Gross Motor Skills Development
              </strong>{" "}
              – Helping children improve their ability to grasp, hold, and
              manipulate objects for essential tasks like writing, dressing,
              and self-care.
            </li>
            <li>
              <strong className="text-white">Sensory Integration Therapy</strong>{" "}
              – Managing sensory sensitivities and helping children process and
              respond to sensory input effectively.
            </li>
            <li>
              <strong className="text-white">Daily Living Skills Training</strong>{" "}
              – Teaching essential self-care activities such as dressing,
              feeding, toileting, and grooming to foster independence.
            </li>
            <li>
              <strong className="text-white">
                Postural &amp; Movement Support
              </strong>{" "}
              – Enhancing posture, strength, and mobility for children with
              physical challenges related to Cerebral Palsy and Erb&apos;s
              Palsy.
            </li>
            <li>
              <strong className="text-white">
                Social &amp; Communication Skills
              </strong>{" "}
              – Encouraging engagement, play, and interaction to build
              confidence in social settings.
            </li>
            <li>
              <strong className="text-white">
                Adaptive Strategies &amp; Assistive Devices
              </strong>{" "}
              – Providing tools and techniques to help children overcome
              physical limitations and participate in daily life.
            </li>
          </ol>
        </div>
      </section>

      {/* WHO CAN BENEFIT */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[500px] flex items-center justify-center text-purple font-semibold">
            Therapist &amp; Child Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Who Can Benefit from Occupational Therapy?
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>
                    Children with Autism Spectrum Disorder (ASD)
                  </strong>{" "}
                  – We focus on improving sensory processing, motor skills, and
                  social interaction to enhance overall function and
                  independence.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Children with Cerebral Palsy</strong> – Therapy is
                  designed to strengthen muscles, improve coordination, and
                  develop adaptive strategies for everyday activities.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Children with Erb&apos;s Palsy</strong> – Our
                  specialized interventions help improve arm movement,
                  strength, and functional use of the affected limb.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Children with Developmental Delays</strong> – OT
                  supports children struggling with age-appropriate
                  milestones, helping them gain the necessary skills for daily
                  life.
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
              Why Choose Stellar Physio for Occupational Therapy?
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                Experienced Pediatric Therapists Specializing in Neurological
                &amp; Developmental Conditions
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                Customized Therapy Plans Tailored to Each Child&apos;s Needs
                &amp; Goals
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                Family-Centered Approach: Involving Parents in the Therapy
                Process
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                Holistic Techniques Combining Play-Based Learning &amp;
                Functional Training
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                Convenient Home-Based Therapy Options for Comfort &amp;
                Accessibility
              </li>
            </ul>
          </div>
          <div className="bg-purple-light rounded-lg min-h-[400px] flex items-center justify-center text-purple font-semibold">
            Children Playing Photo
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Affordable Occupational Therapy in Nairobi
          </h2>
          <div className="w-40 border-b-2 border-white mx-auto mb-6"></div>
          <p className="text-lg mb-8 opacity-90">
            Looking for affordable Occupational Therapy near you or the best
            physiotherapy services in Nairobi? At Stellar Physio, we offer
            premium care at competitive rates to make quality healthcare
            accessible to all.
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