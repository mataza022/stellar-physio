import Link from "next/link";

type Package = {
  slug: string;
  name: string;
  tagline: string;
  price?: string;
  badge?: string;
  headerColor: string;
  buttonColor: string;
  features: { label: string; value: string }[];
};

type Offer = {
  slug: string;
  title: string;
  subtitle: string;
  items: string[];
  itemsLayout: "single" | "two-col";
  includesLine?: string;
  priceType: "single" | "was-now";
  price?: string;
  originalPrice?: string;
  currentPrice?: string;
};

const packages: Package[] = [
  {
    slug: "executive",
    name: "EXECUTIVE",
    tagline: "Premium personalized care",
    price: "4,000",
    badge: "PREFERRED",
    headerColor: "bg-black",
    buttonColor: "bg-black",
    features: [
      { label: "Treatment time", value: "1 ½ Hours" },
      { label: "Physio", value: "Specialized / most experienced" },
      {
        label: "Inclusions",
        value:
          "Chiropractor, Reflexology, Cupping, Stretch Therapy, Traction, Maintenance and Sports Massage",
      },
      { label: "Hospitality", value: "Waiting lounge, tea and snacks" },
      { label: "At Extra Cost", value: "Taping, supplements, dry needles" },
      {
        label: "Session Scheduling",
        value: "Express service, no waiting time",
      },
      { label: "Physio Preference", value: "Allowed" },
    ],
  },
  {
    slug: "corporate",
    name: "CORPORATE",
    tagline: "Wellness for professionals",
    headerColor: "bg-purple",
    buttonColor: "bg-purple",
    features: [
      { label: "Treatment time", value: "1 Hour" },
      {
        label: "Inclusions",
        value:
          "Tailored treatment plans with Manual, Electro, Exercise Therapy including Cupping, Traction and Stretch Therapy",
      },
      {
        label: "At Extra Cost",
        value: "Taping, Massage, Supplement, Dry Needling",
      },
      { label: "Session Scheduling", value: "Strictly on booking" },
      { label: "Physio Preference", value: "Allowed" },
    ],
  },
  {
    slug: "express",
    name: "EXPRESS",
    tagline: "Tailored solutions for quick, effective treatment",
    price: "2,500",
    headerColor: "bg-green",
    buttonColor: "bg-green",
    features: [
      { label: "Treatment time", value: "40 mins" },
      {
        label: "Covers",
        value: "Localized / specialized pain management",
      },
      {
        label: "At Extra Cost",
        value: "Taping, Cupping, Traction, Dry Needling",
      },
      { label: "Session Scheduling", value: "On first come first serve" },
      { label: "Physio Preference", value: "Not allowed" },
    ],
  },
  {
    slug: "dial-a-physio",
    name: "DIAL A PHYSIO",
    tagline: "Convenient Home-based Care",
    price: "6,000",
    badge: "POPULAR",
    headerColor: "bg-[#b593c9]",
    buttonColor: "bg-[#b593c9]",
    features: [
      { label: "Treatment time", value: "1 ½ Hours" },
      { label: "Physio", value: "Specialized Therapist" },
      {
        label: "Inclusions",
        value:
          "Chiropractor, Reflexology, Cupping, Stretch Therapy, Traction, Maintenance and Sports Massage",
      },
      { label: "Hospitality", value: "Comfort of your home / office" },
      { label: "At Extra Cost", value: "Taping, Supplements, Dry Needling" },
      {
        label: "Session Scheduling",
        value: "At least 2 Hours prior to preferred time",
      },
      { label: "Physio Preference", value: "Allowed" },
    ],
  },
];

const offers: Offer[] = [
  {
    slug: "expectant",
    title: "EXPECTANT",
    subtitle: "Mums Wellness Package",
    items: [
      "Antenatal Clinics",
      "Laboratory Screening",
      "Nutrition",
      "Counselling Session",
      "4 Lamaze Classes",
      "3 Massage Sessions",
    ],
    itemsLayout: "two-col",
    priceType: "single",
    price: "15,000",
  },
  {
    slug: "arthritis",
    title: "MANAGE ARTHRITIS",
    subtitle: "PAIN IN 5 WEEKS",
    items: [
      "Specialized orthopedic consultation & assessment.",
      "Personalized treatment plan for 4 weeks.",
      "10 physiotherapy sessions - Dietary consultation.",
    ],
    itemsLayout: "single",
    includesLine:
      "Including: Cupping, traction, exercise, electrotherapy taping & magnetic wave therapy.",
    priceType: "was-now",
    originalPrice: "45,000",
    currentPrice: "40,000",
  },
  {
    slug: "restart",
    title: "RESTART",
    subtitle: "WELLNESS PACKAGE",
    items: [
      "4 Counselling sessions",
      "2 Massage sessions",
      "Diabetic screening",
      "Blood pressure",
      "Nutrition",
      "BMI",
      "WhatsApp check-ins",
    ],
    itemsLayout: "two-col",
    priceType: "single",
    price: "22,000",
  },
];

export default function PackagesPage() {
  return (
    <div className="bg-gray-50">
      {/* ============================================
          PACKAGES SECTION
          ============================================ */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-14">
            <h1 className="text-3xl md:text-5xl font-bold text-purple mb-3">
              Service Packages
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
              Compare our packages and choose the one that fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.slug}
                className="relative bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {pkg.badge && (
                  <div className="absolute top-0 right-0 w-20 h-20 md:w-28 md:h-28 overflow-hidden z-20 pointer-events-none">
                    <span className="absolute top-3 md:top-5 -right-7 md:-right-10 w-28 md:w-40 bg-green text-white text-[8px] md:text-[11px] font-bold text-center py-1 md:py-1.5 rotate-45 shadow-md tracking-wider">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div
                  className={`${pkg.headerColor} text-white p-3 md:p-6 text-center`}
                >
                  <h2 className="text-sm md:text-2xl font-bold tracking-wide">
                    {pkg.name}
                  </h2>
                  <p className="text-[9px] md:text-sm mt-1 opacity-90 leading-tight">
                    {pkg.tagline}
                  </p>
                </div>

                <div className="text-center py-3 md:py-6 border-b border-gray-100">
                  {pkg.price ? (
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-xs md:text-base text-gray-500 font-semibold">
                        Ksh
                      </span>
                      <span className="text-2xl md:text-5xl font-bold text-gray-800">
                        {pkg.price}
                      </span>
                    </div>
                  ) : (
                    <p className="text-[9px] md:text-sm text-gray-500 italic px-2 leading-tight">
                      Price negotiated with your insurance provider
                    </p>
                  )}
                </div>

                <div className="px-3 md:px-6 pt-3 md:pt-6 flex-1">
                  <ul className="space-y-2 md:space-y-3">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex gap-1.5 md:gap-2 items-start">
                        <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="text-[10px] md:text-sm text-gray-600 leading-snug">
                          <strong className="text-gray-900">{f.label}:</strong>{" "}
                          {f.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 md:p-6 pt-4 md:pt-6">
                  <Link
                    href={`/book-appointment?service=${encodeURIComponent(pkg.name)}`}
                    className={`block w-full text-center ${pkg.buttonColor} text-white py-2 md:py-3 rounded font-semibold text-[10px] md:text-sm hover:opacity-90 transition tracking-wider`}
                  >
                    BOOK NOW
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SPECIAL OFFERS SECTION
          ============================================ */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-purple mb-3">
              Special Offers
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
              Limited-time bundled packages designed to give you more value.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            {offers.map((offer) => (
              <div
                key={offer.slug}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-[#8b5ca8]"
              >
                {/* Purple card body */}
                <div className="p-6 md:p-10 text-white">
                  <h3 className="text-3xl md:text-6xl font-black uppercase leading-none tracking-tight">
                    {offer.title}
                  </h3>
                  <p className="text-2xl md:text-5xl font-bold mt-1 md:mt-2 leading-none">
                    {offer.subtitle}
                  </p>

                  <div className="mt-5 md:mt-8">
                    <p className="font-bold text-base md:text-xl mb-3 md:mb-4">
                      {offer.slug === "arthritis"
                        ? "Package Includes:"
                        : "Monthly Package Includes:"}
                    </p>

                    <ul
                      className={
                        offer.itemsLayout === "two-col"
                          ? "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 md:gap-y-2"
                          : "space-y-1 md:space-y-2"
                      }
                    >
                      {offer.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm md:text-lg leading-relaxed flex gap-2"
                        >
                          <span className="flex-shrink-0">-</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {offer.includesLine && (
                      <p className="text-sm md:text-lg mt-4 md:mt-6 leading-relaxed">
                        <strong>Including:</strong>{" "}
                        {offer.includesLine.replace("Including: ", "")}
                      </p>
                    )}
                  </div>
                </div>

                {/* Green footer bar */}
                <div className="bg-green px-6 md:px-10 py-4 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
                  <div className="text-white">
                    {offer.priceType === "single" ? (
                      <p className="text-xl md:text-3xl font-bold">
                        Package goes for: KSH {offer.price}
                      </p>
                    ) : (
                      <div className="flex items-center gap-4 md:gap-8">
                        <p className="text-lg md:text-2xl font-bold">
                          Was:{" "}
                          <span className="line-through opacity-80">
                            KSH {offer.originalPrice}
                          </span>
                        </p>
                        <p className="text-xl md:text-3xl font-bold">
                          Now: KSH {offer.currentPrice}
                        </p>
                      </div>
                    )}
                  </div>
                  <p className="text-white font-semibold text-sm md:text-base">
                    T &amp; C apply
                  </p>
                </div>

                {/* Book Now button */}
                <div className="bg-green border-t border-white/20 px-6 md:px-10 py-3 md:py-4">
                  <Link
                    href={`/book-appointment?service=${encodeURIComponent(offer.title + " — " + offer.subtitle)}`}
                    className="block w-full text-center bg-white text-green font-bold py-2.5 md:py-3 rounded-lg text-sm md:text-base hover:bg-gray-100 transition tracking-wide"
                  >
                    BOOK THIS OFFER
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}