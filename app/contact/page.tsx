import Link from "next/link";

const branches = [
  {
    name: "Kenital Plaza, Ngong Road",
    mapEmbed:
      "https://www.google.com/maps?q=-1.298749885724835,36.79962250991531&z=15&output=embed",
    mapLink:
      "https://www.google.com/maps/dir/?api=1&destination=-1.298749885724835,36.79962250991531",
  },
  {
    name: "Karen Country Club",
    mapEmbed:
      "https://www.google.com/maps?q=-1.3405045,36.7150441&z=14&output=embed",
    mapLink: "https://maps.app.goo.gl/awTP1u9pHbDZnSuz6",
  },
  {
    name: "Parklands Sports Club",
    mapEmbed:
      "https://maps.google.com/maps?q=Parklands+Sports+Club+3+49+Parklands+Rd+Nairobi&z=14&output=embed",
    mapLink:
      "https://www.google.com/maps/dir/?api=1&destination=Parklands+Sports+Club+3+49+Parklands+Rd+Nairobi",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
        </div>
      </section>

      {/* MAP + CONTACT FORM */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Map — Kenital Plaza */}
          <div>
            <div className="bg-purple-light rounded-lg overflow-hidden h-[480px] relative">
              <iframe
                src={branches[0].mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={branches[0].name}
              ></iframe>
            </div>
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
                  <option>Counselling Services</option>
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

      {/* KAREN + PARKLANDS MAPS SIDE BY SIDE */}
      <section className="py-16 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12">
          {branches.slice(1).map((b) => (
            <div key={b.name}>
              <h2 className="text-2xl font-bold text-purple mb-4 text-center">
                {b.name}
              </h2>
              <div className="bg-purple-light rounded-lg overflow-hidden h-[360px] relative mb-4">
                <iframe
                  src={b.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={b.name}
                ></iframe>
              </div>
              <a
                href={b.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-purple font-semibold hover:underline"
              >
                Get Directions
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT INFO CARDS — ALL CLICKABLE */}
      <section className="py-16 bg-purple">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email — clickable */}
          <a
            href="mailto:info@stellarphysio.com"
            className="group bg-white rounded-lg p-6 flex items-center gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-purple flex items-center justify-center text-white flex-shrink-0 group-hover:bg-purple-dark transition">
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
            <span className="text-gray-800 font-semibold group-hover:text-purple transition">
              info@stellarphysio.com
            </span>
          </a>

          {/* Phone — clickable */}
          <a
            href="tel:+254719881291"
            className="group bg-white rounded-lg p-6 flex items-center gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-purple flex items-center justify-center text-white flex-shrink-0 group-hover:bg-purple-dark transition">
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
            <span className="text-gray-800 font-semibold group-hover:text-purple transition">
              +254 719 881 291
            </span>
          </a>

          {/* Address — clickable, opens Google Maps */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=-1.298749885724835,36.79962250991531"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-lg p-6 flex items-center gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-purple flex items-center justify-center text-white flex-shrink-0 group-hover:bg-purple-dark transition">
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
            <span className="text-gray-800 font-semibold group-hover:text-purple transition">
              Kenital Plaza, Ngong Road
            </span>
          </a>
        </div>
      </section>
    </>
  );
}