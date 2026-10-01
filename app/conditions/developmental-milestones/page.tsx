import Link from "next/link";

export default function DevelopmentalMilestonesPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/conditions-hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">
            Developmental Milestones for Autism &amp; Cerebral Palsy
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[400px] flex items-center justify-center text-purple font-semibold">
            Mother and Child Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Developmental Milestones for Autism &amp; Cerebral Palsy
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700">
              Early childhood development is crucial, especially for children
              diagnosed with Autism Spectrum Disorder (ASD) or Cerebral Palsy
              (CP). At Stellar Physio Health &amp; Wellness Center, we provide
              specialized therapy programs to support children in achieving
              essential developmental milestones in motor skills,
              communication, coordination, and social interaction. Our goal is
              to enhance independence, mobility, and quality of life by
              offering individualized treatment plans tailored to each
              child&apos;s unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* UNDERSTANDING — PURPLE SECTION */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Understanding Developmental Milestones in Autism &amp; Cerebral
            Palsy
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-6"></div>
          <p className="text-purple-light mb-4">
            Children with Autism and Cerebral Palsy may experience delays in
            movement, speech, coordination, and cognitive processing, requiring
            early intervention therapies to help them develop essential life
            skills.
          </p>
          <p className="text-purple-light mb-4">
            <strong className="text-white">
              Autism Spectrum Disorder (ASD):
            </strong>{" "}
            Developmental challenges often include delayed speech, difficulty
            with social interactions, sensory processing issues, and repetitive
            behaviors. Physical therapy, occupational therapy, and sensory
            integration techniques help children improve motor skills and daily
            functioning.
          </p>
          <p className="text-purple-light mb-8">
            <strong className="text-white">Cerebral Palsy (CP):</strong> A
            condition affecting muscle tone, posture, and movement. CP can cause
            stiffness, muscle weakness, and coordination difficulties. Therapy
            focuses on improving strength, balance, and mobility to enhance
            independence.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-purple px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* COMPREHENSIVE THERAPY */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-purple mb-4">
            Our Comprehensive Therapy for Developmental Milestones
          </h2>
          <div className="w-40 border-b-2 border-purple mb-8"></div>

          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-purple font-bold">&#8226;</span>
              <span>
                <strong>Gross &amp; Fine Motor Skill Development</strong> to
                help children improve movement coordination, balance, and
                hand-eye coordination for daily tasks
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple font-bold">&#8226;</span>
              <span>
                <strong>Sensory Integration Therapy</strong> to assist children
                with Autism in processing and responding appropriately to
                sensory stimuli
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple font-bold">&#8226;</span>
              <span>
                <strong>Postural &amp; Gait Training for CP</strong> to enhance
                mobility, reduce muscle tightness, and improve walking patterns
                using customized exercises
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple font-bold">&#8226;</span>
              <span>
                <strong>Speech &amp; Communication Therapy</strong> in
                collaboration with specialists to help children develop verbal
                and non-verbal communication skills
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple font-bold">&#8226;</span>
              <span>
                <strong>Play-Based &amp; Cognitive Therapy</strong> to encourage
                learning through interactive and engaging activities that
                support brain development
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple font-bold">&#8226;</span>
              <span>
                <strong>Adaptive Equipment &amp; Assistive Technology</strong>{" "}
                to aid movement, independence, and learning in children with
                mobility challenges
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* WHY CHOOSE — GREEN SECTION */}
      <section className="py-20 bg-green text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Stellar Physio?
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-8"></div>

          <ul className="space-y-4 text-white/95 mb-8">
            <li className="flex gap-3">
              <span className="text-white font-bold">&#8226;</span>
              <span>
                <strong>Multidisciplinary Approach to Pediatric Therapy:</strong>{" "}
                We combine physiotherapy, occupational therapy, and behavioral
                therapy to address the diverse needs of children with Autism and
                CP.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-white font-bold">&#8226;</span>
              <span>
                <strong>Tailored Intervention Plans for Every Child:</strong>{" "}
                Our treatment programs are designed to meet each child&apos;s
                unique developmental needs.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-white font-bold">&#8226;</span>
              <span>
                <strong>Experienced Pediatric Therapists:</strong> Our team
                specializes in working with children with neurodevelopmental
                conditions, ensuring compassionate and effective care.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-white font-bold">&#8226;</span>
              <span>
                <strong>Family-Centered Support &amp; Guidance:</strong> We
                involve parents in therapy sessions and provide training on how
                to support their child&apos;s development at home.
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
            Take the first step toward relief and improved well-being for your
            child, with Stellar Physio.
            <br />
            Call us at <strong>0706 101 999</strong>
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