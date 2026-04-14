import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Mindfulness and compassion articles for teachers, parents, and adults.",
};

type SanityPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  mainImage?: {
    asset?: {
      url?: string;
    };
  };
};

function formatDate(date?: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts: SanityPost[] = await client.fetch(postsQuery);

  return (
    <div className="py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#d4e8f9] px-3 py-1.5 text-sm text-[#4a7396]">
            <span>📖</span>
            <span>All Articles</span>
          </div>

          <h1 className="font-serif text-[clamp(1.8rem,4vw,2.6rem)] leading-tight text-[#3d3456]">
            Mindfulness &amp; Compassion Blog
          </h1>

          <p className="mx-auto mt-3 max-w-lg leading-7 text-[#9e8aa0]">
            Practical articles for teachers, parents, and adults on the path to
            a more mindful life.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="py-20 text-center text-[#c4a8c0]">
            <div className="mb-3 text-4xl">🌸</div>
            <p>No articles published yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post._id}
                className="group overflow-hidden rounded-2xl border border-[#f0e6ee] bg-white transition-all duration-300 hover:shadow-md"
              >
                <div className="h-48 overflow-hidden bg-[#f7f1f5]">
                  {post.mainImage?.asset?.url ? (
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-4xl">
                      🌸
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="mb-3 inline-block rounded-full bg-[#f4eff7] px-3 py-1 text-xs text-[#9e8aa0]">
                    Article
                  </div>

                  <h2 className="mb-2 font-serif text-[1.05rem] leading-snug text-[#3d3456] transition-colors group-hover:text-[#b8839a]">
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-[#9e8aa0]">
                      {post.excerpt}
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#c4a8c0]">
                      {formatDate(post.publishedAt)}
                    </span>

                    <span className="inline-flex items-center gap-1 text-xs text-[#b8839a]">
                      Read
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}