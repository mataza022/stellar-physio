import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-purple-dark text-white pt-16 pb-6 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-white mb-5">
              Subscribe to our Newsletter
            </h4>
            <p className="text-sm text-white/70 mb-4">
              Get the latest health tips and Stellar Physio updates delivered to
              your inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-3 py-2 rounded-l text-gray-800 outline-none text-sm"
              />
              <button
                type="submit"
                className="bg-green text-white px-4 py-2 rounded-r font-semibold text-sm hover:bg-green-dark transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-5">Contact Us</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>info@stellarphysio.com</li>
              <li>+254 719 881 291</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-5">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/services" className="hover:text-green transition">
                  General Consultation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green transition">
                  Physiotherapy
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green transition">
                  Home-Based Care
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green transition">
                  Occupational Therapy
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green transition">
                  Laboratory Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green transition">
                  Chiropractor Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green transition">
                  Pharmacy
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green transition">
                  Sports Massage
                </Link>
              </li>
            </ul>
          </div>

          {/* Dial A Physio */}
          <div>
            <h4 className="text-lg font-bold text-white mb-5">Dial A Physio</h4>
            <p className="text-sm text-white/70 mb-4">
              Need help? Chat with us on WhatsApp.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=254719881291"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <div className="bg-white rounded p-3">
                <span className="text-purple font-bold text-sm">
                  Dial A Physio
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Stellar Physio. All rights
            reserved. Created by{" "}
            <span className="underline hover:text-green cursor-pointer">
              Webora Digital Solutions
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}