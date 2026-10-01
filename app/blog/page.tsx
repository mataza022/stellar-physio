import Link from "next/link";
import { posts, getRecentPosts, formatDate } from "@/lib/posts";

const categories = [
  "Allergen",
  "Blood",
  "Food",
  "Health",
  "Health & Wellness",
  "Mental Health",
  "Sports Injury",
  "Therapy",
  "Walking",
];

const tags = [
  "ACL", "Adhesive Capsulitis", "Anterior Cruciate Ligament", "Back & Neck Pain",
  "Best Ergonomic Practices For Lower Back Health", "Chiropractic", "Chiropractic Care",
  "Chronic Back Pain", "Disc Bulge", "Foot Pain", "Health & Wellness",
  "How Your Daily Habits Impact Spine Health", "Knee Physiotherapy", "Lower Back",
  "Lower Back Pain", "Lumbar Spondylosis", "MRI Interpretation Guide",
  "Ngong Road Physiotherapy", "Office Workers", "Osgood-Schlatter Disease", "Pain",
  "Parklands Physiotherapy", "Physio", "Physiotherapy And MRI Scans",
  "Physiotherapy For Office Workers", "Physiotherapy For Sleep Quality",
  "Physiotherapy Techniques To Improve Balance", "Plantar Fasciitis",
  "Post-Surgery Recovery", "Sciatica", "Spine Degeneration", "Stroke Recovery Therapy",
  "Stroke Rehabilitation", "Symptoms Of Disc Bulge", "Tennis Elbow", "Traction Therapy",
  "Traction Therapy Effective Spinal Pain Relief", "Types Of Traction Therapy",
  "Understanding And Managing Tennis Elbow", "Understanding Disc Bulge",
  "What Is Chiropractic Care?", "What Is Lumbar Spondylosis?", "What Is Osgood-Schlatter Disease?",
  "Why Office Workers Experience Back & Neck Pain",
];

export default function BlogPage() {
  const featured = posts[0];
  const recent = getRecentPosts(5);

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Articles &amp; News</h1>
        </div>
      </section>

      {/* MAIN LAYOUT: ARTICLE + SIDEBAR */}
      <section className="py-16 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          {/* LEFT COLUMN — FEATURED ARTICLE */}
          <div>
            <article>
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-[420px] object-cover rounded-lg mb-6"
              />
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span>30 Views</span>
                <span>0 Comments</span>
                <span>{formatDate(featured.date)}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-purple mb-4">
                {featured.title}
              </h2>
              <p className="text-gray-700 mb-6">{featured.excerpt}</p>

              {/* Quick links to other posts */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-xl font-bold text-purple mb-4">
                  More Articles
                </h3>
                <ul className="space-y-3">
                  {posts.slice(1).map((p) => (
                    <li key={p.slug} className="flex gap-3 items-start">
                      <span className="text-purple">&#8226;</span>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="text-gray-700 hover:text-purple font-medium"
                      >
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>

          {/* RIGHT COLUMN — SIDEBAR */}
          <aside className="space-y-10">
            {/* Search */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple mb-4">Search</h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l outline-none text-sm"
                />
                <button className="bg-purple text-white px-4 py-2 rounded-r text-sm font-semibold">
                  Search
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple mb-4">
                Recent Posts
              </h3>
              <ul className="space-y-3">
                {recent.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="text-gray-700 hover:text-purple text-sm"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((cat, i) => (
                  <li
                    key={cat}
                    className="flex justify-between items-center text-sm border-b border-gray-200 pb-2"
                  >
                    <span className="text-gray-700">{cat}</span>
                    <span className="bg-purple text-white text-xs px-2 py-1 rounded">
                      {i === 0 ? 8 : i === 1 ? 1 : i === 2 ? 1 : i === 3 ? 1 : i === 4 ? 12 : 5}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Posts */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple mb-4">
                Popular Posts
              </h3>
              <ul className="space-y-4">
                {recent.slice(0, 4).map((p) => (
                  <li key={p.slug} className="flex gap-3">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-16 h-16 object-cover rounded flex-shrink-0"
                    />
                    <div>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="text-gray-700 hover:text-purple text-sm font-medium leading-tight block mb-1"
                      >
                        {p.title}
                      </Link>
                      <span className="text-xs text-gray-500">
                        {formatDate(p.date)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple mb-4">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.slice(0, 20).map((tag) => (
                  <span
                    key={tag}
                    className="bg-white border border-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full hover:bg-purple hover:text-white cursor-pointer transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}