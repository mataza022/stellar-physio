import Link from "next/link";
import { getPosts, getRecentPosts, formatDate } from "@/lib/posts";
import { getActiveVideos } from "@/lib/videos";
import VideoEmbed from "../components/VideoEmbed";

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPosts();
  const featured = posts[0];
  const remainingPosts = posts.slice(1);
  const recent = await getRecentPosts(5);
  const videos = await getActiveVideos();

  // Derive categories from real posts
  const categoryCounts = posts.reduce<Record<string, number>>((acc, p) => {
    const cat = p.category?.trim() || "Uncategorized";
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});
  const categories = Object.entries(categoryCounts).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );

  // Derive tags from real posts
  const tagCounts = posts.reduce<Record<string, number>>((acc, p) => {
    (p.tags || []).forEach((tag) => {
      const t = tag.trim();
      if (t) acc[t] = (acc[t] || 0) + 1;
    });
    return acc;
  }, {});
  const tags = Object.entries(tagCounts).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );

  // Popular posts by views
  const popularPosts = [...posts]
    .sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
    .slice(0, 4);

  return (
    <>
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

      <section className="pb-16 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          <div className="space-y-8">
            <Link href={`/blog/${featured.slug}`} aria-label={`Read featured article: ${featured.title}`} className="group block">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {remainingPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} aria-label={`Read full article: ${post.title}`} className="group block"
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

            {videos.length > 0 && (
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-purple mb-6 border-b border-gray-200 pb-3">
                  Videos from Stellar Physio
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {videos.map((video) => (
                    <div key={video.slug}>
                      <VideoEmbed video={video} />
                      {video.title && (
                        <p className="text-sm text-gray-600 mt-3 text-center italic">
                          {video.title}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-6 pb-24 lg:sticky lg:top-24 h-fit">
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

            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <h3 className="text-base font-bold text-purple mb-3">
                Categories
              </h3>
              {categories.length === 0 ? (
                <p className="text-xs text-gray-500">No categories yet.</p>
              ) : (
                <ul className="space-y-1.5">
                  {categories.map(([cat, count]) => (
                    <li
                      key={cat}
                      className="flex justify-between items-center text-xs border-b border-gray-200 pb-1.5"
                    >
                      <span className="text-gray-700">{cat}</span>
                      <span className="bg-purple text-white text-[10px] px-2 py-0.5 rounded">
                        {count}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <h3 className="text-base font-bold text-purple mb-3">
                Popular Posts
              </h3>
              {popularPosts.length === 0 ? (
                <p className="text-xs text-gray-500">No posts yet.</p>
              ) : (
                <ul className="space-y-3">
                  {popularPosts.map((p) => (
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
              )}
            </div>

            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <h3 className="text-base font-bold text-purple mb-3">
                Popular Tags
              </h3>
              {tags.length === 0 ? (
                <p className="text-xs text-gray-500">No tags yet.</p>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {tags.slice(0, 20).map(([tag, count]) => (
                    <span
                      key={tag}
                      title={`${count} post${count === 1 ? "" : "s"}`}
                      className="bg-white border border-gray-200 text-gray-700 text-[10px] px-2 py-1 rounded-full hover:bg-purple hover:text-white cursor-pointer transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}