import Link from "next/link";
import { services } from "@/lib/services";

export default function ServicesPage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-purple mb-4">
            Clinical Services
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg">
            Specialist care across all major medical disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Full-width hero image */}
              <div className="w-full h-52 overflow-hidden bg-gray-50">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-purple mb-2 group-hover:text-purple-dark transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {service.shortDescription}
                </p>

                {/* Action buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                  <Link
                    href="/book-appointment"
                    className="bg-green text-white px-4 py-2 rounded text-sm font-semibold hover:bg-green-dark transition"
                  >
                    Book Now
                  </Link>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-purple font-semibold text-sm flex items-center hover:text-purple-dark transition-colors"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}