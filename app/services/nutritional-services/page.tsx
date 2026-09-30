import Link from "next/link";

export default function NutritionalServicesPage() {
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
            Nutritional Services
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[360px] flex items-center justify-center text-purple font-semibold">
            Nutritionist Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Nutritional Services at Stellar Physio Health &amp; Wellness
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700">
              At Stellar Physio Health &amp; Wellness, we believe that proper
              nutrition plays a vital role in healing, recovery, and overall
              well-being. Whether you&apos;re an athlete looking to optimize
              performance, a patient recovering from surgery, or someone
              managing a chronic condition, our personalized nutritional
              services are designed to support your health goals and promote
              long-term wellness.
            </p>
          </div>
        </div>
      </section>

      {/* WHO CAN BENEFIT — PURPLE SECTION */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who Can Benefit from Our Nutritional Services?
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-8"></div>

          <ol className="list-decimal list-inside space-y-4 text-purple-light">
            <li>
              <strong className="text-white">
                Individuals Recovering from Injury or Surgery
              </strong>{" "}
              – Proper nutrition accelerates the healing process by supporting
              tissue repair and reducing inflammation.
            </li>
            <li>
              <strong className="text-white">
                Patients Managing Chronic Conditions
              </strong>{" "}
              – Our expert guidance can help individuals with diabetes,
              hypertension, obesity, and digestive disorders maintain balanced
              and controlled diets.
            </li>
            <li>
              <strong className="text-white">
                Athletes and Active Individuals
              </strong>{" "}
              – We provide sports-specific meal plans that enhance endurance,
              muscle recovery, and overall performance.
            </li>
            <li>
              <strong className="text-white">Weight Management Clients</strong>{" "}
              – Whether you&apos;re looking to lose weight, gain muscle, or
              maintain a healthy body composition, we create sustainable
              nutrition strategies.
            </li>
            <li>
              <strong className="text-white">
                Individuals Seeking Preventive Health Care
              </strong>{" "}
              – If you want to improve immunity, gut health, and overall energy
              levels, our nutrition plans can help optimize your well-being.
            </li>
          </ol>
        </div>
      </section>

      {/* OUR SERVICES INCLUDE */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[560px] flex items-center justify-center text-purple font-semibold">
            Healthy Eating Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Our Nutritional Services Include
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Personalized Diet Planning:</strong> Tailored meal
                  plans based on your unique needs, dietary preferences, and
                  medical conditions.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>
                    Nutrition for Injury Recovery &amp; Rehabilitation:
                  </strong>{" "}
                  Guidance on anti-inflammatory foods and essential nutrients to
                  speed up healing.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Sports &amp; Performance Nutrition:</strong>{" "}
                  Strategies for optimizing endurance, muscle recovery, and
                  hydration for athletes.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Weight Management &amp; Lifestyle Coaching:</strong>{" "}
                  Practical, achievable plans for healthy weight loss, muscle
                  gain, and balanced nutrition.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Medical Nutrition Therapy (MNT):</strong> Specialized
                  diets for individuals with diabetes, hypertension, heart
                  disease, and other chronic illnesses.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Digestive Health &amp; Gut Wellness:</strong> Meal
                  plans that improve digestion, prevent bloating, and promote
                  gut microbiome balance.
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
              Why Choose Our Nutritional Services?
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>
                    Science-Based, Practical Nutrition Advice
                  </strong>{" "}
                  – No fad diets or quick fixes, just evidence-based strategies.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>
                    Comprehensive Approach to Health &amp; Wellness
                  </strong>{" "}
                  – We focus on nutrition as part of a holistic lifestyle
                  change.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Customized Plans for Every Individual</strong> – No
                  one-size-fits-all approach—your nutrition plan is tailored
                  just for you.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Long-Term, Sustainable Results</strong> – Our
                  approach helps you develop lasting, healthy eating habits.
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-purple-light rounded-lg min-h-[380px] flex items-center justify-center text-purple font-semibold">
            Dining Photo
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Affordable Nutritional Services in Nairobi
          </h2>
          <div className="w-40 border-b-2 border-white mx-auto mb-6"></div>
          <p className="text-lg mb-8 opacity-90">
            Whether you want to improve your energy, recover faster, manage a
            health condition, or just feel your best, we&apos;re here to guide
            you every step of the way!
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