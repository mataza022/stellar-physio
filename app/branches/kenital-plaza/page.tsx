import Link from "next/link";

export default function KenitalPlazaPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/branches-hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Kenital Plaza, Ngong Road
          </h1>
        </div>
      </section>

      {/* MAP + CONTACT FORM */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div>
            <div className="bg-purple-light rounded-lg overflow-hidden h-[480px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8192!2d36.7995796!3d-1.2988786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnNTYuMCJTIDM2wrA0OCcwMC4wIkU!5e0!3m2!1sen!2ske!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kenital Plaza Location"
              ></iframe>
            </div>
            <p className="text-center text-purple font-semibold mt-4">
              Get Directions to Ngong Road Branch
            </p>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-purple mb-2">Contact Us</h2>
            <p className="text-gray-600 mb-8">Drop us a line...</p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple bg-white text-gray-700">
                  <option>Consultation &amp; Clinic</option>
                  <option>Physiotherapy Session</option>
                  <option>Laboratory Services</option>
                  <option>Pharmacy</option>
                </select>
              </div>
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-purple text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-dark transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARDS — PURPLE SECTION */}
      <section className="py-16 bg-purple">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple flex items-center justify-center text-white flex-shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 6 10-6" />
              </svg>
            </div>
            <span className="text-gray-800 font-semibold">
              info@stellarphysio.com
            </span>
          </div>

          <div className="bg-white rounded-lg p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple flex items-center justify-center text-white flex-shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-800 font-semibold">
                +254 719 881 291
              </span>
              <span className="text-gray-600 text-sm">+254 706 101 999</span>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple flex items-center justify-center text-white flex-shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <span className="text-gray-800 font-semibold">
              Kenital Plaza, Ngong Road
            </span>
          </div>
        </div>
      </section>
    </>
  );
}