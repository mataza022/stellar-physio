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
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple/30 transition-all duration-300 group flex flex-col"
            >
              <div className="flex items-start gap-4">
                {/* Image Thumbnail (Replaces the letter placeholder) */}
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-sm bg-gray-100">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div>
                  <h2 className="text-xl font-bold text-purple mb-2 group-hover:text-purple-dark transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
              </div>
              
              <div className="mt-4 flex items-center text-sm font-semibold text-green">
                Read More
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}