import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getRecentPosts, posts, formatDate } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

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

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">
            Articles &amp; News
          </h1>
        </div>
      </section>

      {/* POST + SIDEBAR */}
      <section className="py-16 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          {/* LEFT — POST CONTENT */}
          <article>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[420px] object-cover rounded-lg mb-6"
            />
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>30 Views</span>
              <span>0 Comments</span>
              <span>{formatDate(post.date)}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-purple mb-6">
              {post.title}
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4 whitespace-pre-line">
              {post.body}
            </div>

            {/* Comment form */}
            <div className="mt-16 bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-purple mb-6">
                Leave a Comment
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Logged in as Stellar Physio.{" "}
                <a href="#" className="text-purple underline">
                  Log out?
                </a>
              </p>
              <textarea
                placeholder="Write Your Comment *"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple resize-none mb-4"
              ></textarea>
              <button className="bg-purple text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-dark transition">
                Post Comment &#8594;
              </button>
            </div>
          </article>

          {/* RIGHT — SIDEBAR */}
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

            {/* Back to Blog */}
            <div className="bg-purple text-white rounded-lg p-6 text-center">
              <h3 className="font-bold mb-2">Looking for more?</h3>
              <p className="text-purple-light text-sm mb-4">
                Browse all our health articles.
              </p>
              <Link
                href="/blog"
                className="inline-block bg-white text-purple px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-100"
              >
                All Articles
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}