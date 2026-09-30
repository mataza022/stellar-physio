import Link from "next/link";

export default function CounsellingServicesPage() {
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
            Counselling Services
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[380px] flex items-center justify-center text-purple font-semibold">
            Counselling Room Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Counselling services by Frankly Speaking
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700">
              Your mental health is just as important as your physical health.
              At <strong>Frankly Speaking</strong>, we offer professional
              counselling services to help individuals cope with a variety of
              challenges such as stress, anxiety, depression, trauma, grief,
              relationship and family issues, and more. Our compassionate
              therapists provide a safe and supportive space for clients to
              explore their emotions, develop coping strategies, and enhance
              their overall well-being.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS COUNSELLING */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What is Counselling, Really?
          </h2>
          <div className="w-40 border-b-2 border-white/60 mb-6"></div>
          <p className="text-purple-light mb-10">
            Counselling is a conversation — a space just for you, where you can
            speak freely, feel seen, and start making sense of the things life
            throws your way. It&apos;s not about being &quot;broken&quot; or
            being &quot;weak.&quot; It&apos;s about being human. And at Frankly
            Speaking, we hold that space with care, curiosity, and compassion —
            no judgement, no pressure, just real talk that helps you move
            forward.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-purple px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-purple-light rounded-lg min-h-[520px] flex items-center justify-center text-purple font-semibold">
            Counselling Session Photo
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Our Services
            </h2>
            <div className="w-40 border-b-2 border-purple mb-6"></div>
            <p className="text-gray-700 mb-6">
              We offer a range of support options to meet you where you are —
              whether you&apos;re navigating personal growth, relationship
              challenges, career shifts, or simply need a safe place to land
              for a while.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Individual Therapy</strong> – One-on-one sessions to
                  help you unpack, heal, and grow at your own pace.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Couples Therapy</strong> – Support for partners to
                  reconnect, communicate better, or work through challenges
                  together.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Family Therapy</strong> – A guided space to improve
                  connection, resolve tensions, and strengthen family dynamics.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Adolescent Therapy</strong> – Support tailored for
                  teens and young adults navigating identity, emotions, and
                  life transitions.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Career &amp; Life Coaching</strong> – Goal-oriented
                  sessions to help you make informed decisions and gain clarity
                  for your next move.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple font-bold">&#8226;</span>
                <span>
                  <strong>Group Sessions &amp; Workshops</strong> – Themed
                  conversations and guided group experiences for community,
                  learning, and shared growth.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-purple mb-4">
            Our Packages
          </h2>
          <div className="w-40 border-b-2 border-purple mb-6"></div>
          <p className="text-gray-700 mb-12">
            <strong>In partnership with Stellar Physio:</strong> Our integrated
            wellness packages offer both physical and emotional support —
            because you&apos;re more than just a body or a mind. You&apos;re the
            whole package, and we care for you that way.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-purple mb-6">
                Restart <span className="text-gray-500 font-normal">(4 Weeks)</span>
              </h3>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex gap-3">
                  <span className="text-purple">&#10003;</span>
                  1 psychotherapy session/week (4 total)
                </li>
                <li className="flex gap-3">
                  <span className="text-purple">&#10003;</span>
                  1 massage therapy session/weekly (2 total)
                </li>
                <li className="flex gap-3">
                  <span className="text-purple">&#10003;</span>
                  Check-ins via WhatsApp
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-purple text-white px-6 py-2 rounded font-semibold hover:bg-purple-dark transition"
              >
                Book Appointment
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-purple mb-6">
                Rebuild <span className="text-gray-500 font-normal">(4 Weeks)</span>
              </h3>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex gap-3">
                  <span className="text-purple">&#10003;</span>
                  1 psychotherapy session/week (4 total)
                </li>
                <li className="flex gap-3">
                  <span className="text-purple">&#10003;</span>
                  1 physiotherapy session/week (4 total)
                </li>
                <li className="flex gap-3">
                  <span className="text-purple">&#10003;</span>
                  1 massage therapy session/week (4 total)
                </li>
                <li className="flex gap-3">
                  <span className="text-purple">&#10003;</span>
                  Personalised home-care plan + follow-up calls/ WhatsApp
                  Check Ins
                </li>
                <li className="flex gap-3">
                  <span className="text-purple">&#10003;</span>
                  Email support &amp; symptom tracking
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-purple text-white px-6 py-2 rounded font-semibold hover:bg-purple-dark transition"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-green text-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Frankly Speaking?
            </h2>
            <div className="w-40 border-b-2 border-white/60 mb-8"></div>

            <ul className="space-y-4 text-white/95">
              <li className="flex gap-3">
                <span>&#8226;</span>
                We keep it real — you don&apos;t have to &quot;fix&quot;
                yourself before showing up here.
              </li>
              <li className="flex gap-3">
                <span>&#8226;</span>
                Our therapists are warm, professional, and compassionate.
              </li>
              <li className="flex gap-3">
                <span>&#8226;</span>
                We create a safe space where you can speak freely and feel heard.
              </li>
              <li className="flex gap-3">
                <span>&#8226;</span>
                We honor your pace — whether you&apos;re ready to dive deep or
                take it slow.
              </li>
              <li className="flex gap-3">
                <span>&#8226;</span>
                We blend compassion with evidence-based approaches, so you feel
                both supported and empowered.
              </li>
              <li className="flex gap-3">
                <span>&#8226;</span>
                We believe in hearing you, not just listening to you.
              </li>
            </ul>

            <Link
              href="/contact"
              className="inline-block bg-purple text-white px-6 py-3 rounded font-semibold hover:bg-purple-dark transition mt-8 self-start"
            >
              Book Appointment
            </Link>
          </div>
          <div className="bg-white/20 rounded-lg min-h-[420px] flex items-center justify-center text-white font-semibold border-2 border-white/30">
            Family Session Photo
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
            Take the first step and improve your life with Frankly Speaking.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
            {/* Call */}
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-10 h-10 rounded-full bg-purple-light flex items-center justify-center text-purple">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span>
                Call Us: <strong>0706-101-999</strong>
              </span>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center text-green">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </div>
              <span>
                WhatsApp: <strong>0711662954</strong>
              </span>
            </div>
          </div>

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