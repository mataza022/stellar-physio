import Link from "next/link";

const branches = [
  {
    title: "Kenital Plaza, Ngong Road",
    slug: "kenital-plaza",
    address: "Kenital Plaza, Ngong Road, Nairobi",
    phone: "+254 706 101999",
    image: "/images/ngongrdbranch.jpg",
  },
  {
    title: "Karen Country Club",
    slug: "karen-country-club",
    address: "Karen Country Club, Nairobi",
    phone: "+254 739 110110",
    image: "/images/karenbranch.webp",
  },
  {
    title: "Parklands Sports Club",
    slug: "parklands-sports-club",
    address: "Sports Club, 49 Parklands Road, Nairobi",
    phone: "+254 755 901942",
    image: "/images/parklandsbranch.jpg",
  },
];

export default function BranchesPage() {
  return (
    <>
      {/* HERO — Ngong Road Branch */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ngongrdbranch.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Our Branches</h1>
          <p className="text-lg mt-4 max-w-2xl opacity-90">
            Convenient access to specialist care across Nairobi. Choose the
            branch closest to you.
          </p>
        </div>
      </section>

      {/* BRANCHES GRID */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((b) => (
              <div
                key={b.slug}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col"
              >
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-purple mb-2">
                    {b.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-2">{b.address}</p>
                  <p className="text-gray-600 text-sm mb-6">{b.phone}</p>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <Link
                      href={`/branches/${b.slug}`}
                      className="inline-block bg-green text-white px-4 py-2 rounded text-sm font-semibold hover:bg-green-dark transition"
                    >
                      Get Directions
                    </Link>
                    <Link
                      href="/book-appointment"
                      className="inline-block border-2 border-purple text-purple px-4 py-2 rounded text-sm font-semibold hover:bg-purple hover:text-white transition"
                    >
                      Book Here
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">
            Need home-based care instead?
          </h2>
          <p className="text-purple-light mb-8">
            We bring our expert therapists to your doorstep across Nairobi.
          </p>
          <Link
            href="/services/home-based-care"
            className="inline-block bg-green text-white px-8 py-3 rounded font-semibold hover:bg-green-dark transition"
          >
            Learn About Home-Based Care
          </Link>
        </div>
      </section>
    </>
  );
}