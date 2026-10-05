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

      {/* POST + SIDEBAR */}
      <section className="pb-16 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          {/* LEFT — POST CONTENT */}
          <article>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[340px] object-cover rounded-lg mb-5"
            />
            <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
              <span>30 Views</span>
              <span>0 Comments</span>
              <span>{formatDate(post.date)}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-purple mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="prose prose-sm md:prose-base max-w-none text-gray-700 space-y-4 whitespace-pre-line">
              {post.body}
            </div>

            {/* Comment form */}
            <div className="mt-12 bg-gray-50 rounded-lg p-6">
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple resize-none mb-3 text-sm"
              ></textarea>
              <button className="bg-purple text-white px-6 py-2.5 rounded font-semibold hover:bg-purple-dark transition text-sm">
                Post Comment &#8594;
              </button>
            </div>
          </article>

          {/* RIGHT — SIDEBAR */}
          <aside className="space-y-6">
            {/* Search */}
            <div className="bg-gray-50 rounded-lg p-5">
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
            <div className="bg-gray-50 rounded-lg p-5">
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

            {/* Back to Blog */}
            <div className="bg-purple text-white rounded-lg p-5 text-center">
              <h3 className="font-bold mb-2 text-sm">Looking for more?</h3>
              <p className="text-purple-light text-xs mb-3">
                Browse all our health articles.
              </p>
              <Link
                href="/blog"
                className="inline-block bg-white text-purple px-4 py-2 rounded font-semibold text-xs hover:bg-gray-100 transition"
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