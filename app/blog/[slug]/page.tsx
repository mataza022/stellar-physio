import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getRecentPosts, posts, formatDate } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

// Parser for markdown-like content (headings, bullets, paragraphs)
const renderBody = (body: string) => {
  const blocks = body.split("\n\n");
  return blocks.map((block, index) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={index} className="text-xl font-bold text-purple mt-8 mb-3">
          {trimmed.replace("### ", "")}
        </h3>
      );
    }
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={index} className="text-2xl font-bold text-purple mt-10 mb-4">
          {trimmed.replace("## ", "")}
        </h2>
      );
    }
    if (trimmed.startsWith("- ")) {
      const items = trimmed
        .split("\n")
        .map((i) => i.replace("- ", "").trim())
        .filter(Boolean);
      return (
        <ul key={index} className="list-disc pl-5 my-4 space-y-1">
          {items.map((item, i) => (
            <li key={i} className="text-gray-700 text-sm md:text-base leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p key={index} className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
        {trimmed}
      </p>
    );
  });
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const recent = getRecentPosts(5);

  if (!post) {
    notFound();
  }

  // Get related posts for the bottom of the page
  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* CLEAN PAGE HEADER */}
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

      {/* POST + SIDEBAR */}
      <section className="pb-24 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          
          {/* LEFT — POST CONTENT */}
          <article className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[340px] object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="inline-block bg-green text-white font-bold px-3 py-1 rounded uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span>30 Views</span>
                  <span>{formatDate(post.date)}</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-purple mb-6 leading-tight">
                  {post.title}
                </h1>
                <div className="max-w-none text-gray-700">
                  {renderBody(post.body)}
                </div>
              </div>
            </div>

            {/* Comment form */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-purple mb-4">
                Leave a Comment
              </h3>
              <p className="text-gray-600 mb-3 text-xs">
                Logged in as Stellar Physio.{" "}
                <a href="#" className="text-purple underline">
                  Log out?
                </a>
              </p>
              <textarea
                placeholder="Write Your Comment *"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple resize-none mb-4 text-sm bg-white"
              ></textarea>
              <button className="bg-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-dark transition text-sm">
                Post Comment &#8594;
              </button>
            </div>

            {/* RELATED POSTS (Fills the empty space at the bottom left) */}
            <div className="pt-4">
              <h3 className="text-2xl font-bold text-purple mb-6 border-b border-gray-200 pb-3">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group block bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-full h-36 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <span className="inline-block bg-purple text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide mb-2">
                        {p.category}
                      </span>
                      <h4 className="font-bold text-purple text-sm leading-tight group-hover:text-purple-dark transition mb-2">
                        {p.title}
                      </h4>
                      <span className="text-[10px] text-gray-500">
                        {formatDate(p.date)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </article>

          {/* RIGHT — SIDEBAR (Sticky & Populated) */}
          <aside className="space-y-6 lg:sticky lg:top-24 h-fit pb-24">
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
              <ul className="space-y-3">
                {recent.map((p) => (
                  <li key={p.slug} className="flex gap-3">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-12 h-12 object-cover rounded flex-shrink-0"
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

            {/* Categories */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <h3 className="text-base font-bold text-purple mb-3">
                Categories
              </h3>
              <ul className="space-y-1.5">
                {["Health & Wellness", "Sports Injury", "Therapy", "Mental Health", "Nutrition"].map((cat) => (
                  <li
                    key={cat}
                    className="flex justify-between items-center text-xs border-b border-gray-200 pb-1.5"
                  >
                    <span className="text-gray-700">{cat}</span>
                    <span className="bg-purple text-white text-[10px] px-2 py-0.5 rounded">
                      {Math.floor(Math.random() * 10) + 1}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Book Appointment CTA */}
            <div className="bg-purple text-white rounded-lg p-6 text-center shadow-sm">
              <h3 className="font-bold mb-2 text-base">Need Expert Care?</h3>
              <p className="text-purple-light text-xs mb-4 leading-relaxed">
                Book an appointment with our specialists today.
              </p>
              <Link
                href="/book-appointment"
                className="inline-block bg-white text-purple px-6 py-2.5 rounded-lg font-semibold text-xs hover:bg-gray-100 transition w-full"
              >
                Book Appointment
              </Link>
            </div>
          </aside>

        </div>
      </section>
    </>
  );
}