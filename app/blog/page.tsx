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
  const remainingPosts = posts.slice(1);
  const recent = getRecentPosts(5);

  return (
    <>
      {/* CLEAN PAGE HEADER (No Hero Image) */}
      <section className="pt-20 pb-8 bg-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple mb-4">
            Articles &amp; News
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Health tips, physiotherapy insights, and news from the Stellar
            Physio team.
          </p>
        </div>
      </section>

      {/* MAIN LAYOUT: ARTICLES + SIDEBAR */}
      <section className="pb-16 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          
          {/* LEFT COLUMN — FEATURED + ARTICLE GRID */}
          <div className="space-y-8">
            
            {/* FEATURED ARTICLE */}
            <Link href={`/blog/${featured.slug}`} className="group block">
              <article className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="w-full h-[340px] overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="inline-block bg-green text-white font-bold px-3 py-1 rounded uppercase tracking-wide">
                      {featured.category}
                    </span>
                    <span>{formatDate(featured.date)}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-purple mb-3 leading-tight group-hover:text-purple-dark transition">
                    {featured.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center text-green font-semibold text-sm">
                    Read More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </article>
            </Link>

            {/* ARTICLES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {remainingPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="w-full h-44 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <span className="inline-block bg-purple text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide mb-3 self-start">
                        {post.category}
                      </span>
                      <h3 className="font-bold text-purple text-base mb-2 leading-tight group-hover:text-purple-dark transition">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-xs leading-relaxed mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                        <span>{formatDate(post.date)}</span>
                        <span className="text-green font-semibold flex items-center">
                          Read
                          <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN — SIDEBAR */}
          <aside className="space-y-6 pb-24">
            {/* Search */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <h3 className="text-base font-bold text-purple mb-3">Search</h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l outline-none text-sm"
                />
                <button className="bg-purple text-white px-3 py-2 rounded-r text-xs font-semibold">
                  Go
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <h3 className="text-base font-bold text-purple mb-3">
                Recent Posts
              </h3>
              <ul className="space-y-2">
                {recent.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="text-gray-700 hover:text-purple text-xs leading-snug block"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <h3 className="text-base font-bold text-purple mb-3">
                Categories
              </h3>
              <ul className="space-y-1.5">
                {categories.map((cat, i) => (
                  <li
                    key={cat}
                    className="flex justify-between items-center text-xs border-b border-gray-200 pb-1.5"
                  >
                    <span className="text-gray-700">{cat}</span>
                    <span className="bg-purple text-white text-[10px] px-2 py-0.5 rounded">
                      {i === 0 ? 8 : i === 1 ? 1 : i === 2 ? 1 : i === 3 ? 1 : i === 4 ? 12 : 5}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Posts */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <h3 className="text-base font-bold text-purple mb-3">
                Popular Posts
              </h3>
              <ul className="space-y-3">
                {recent.slice(0, 4).map((p) => (
                  <li key={p.slug} className="flex gap-3">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-14 h-14 object-cover rounded flex-shrink-0"
                    />
                    <div>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="text-gray-700 hover:text-purple text-xs font-medium leading-tight block mb-1"
                      >
                        {p.title}
                      </Link>
                      <span className="text-[10px] text-gray-500">
                        {formatDate(p.date)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <h3 className="text-base font-bold text-purple mb-3">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {tags.slice(0, 20).map((tag) => (
                  <span
                    key={tag}
                    className="bg-white border border-gray-200 text-gray-700 text-[10px] px-2 py-1 rounded-full hover:bg-purple hover:text-white cursor-pointer transition"
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