"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Clock, Search } from "lucide-react";
import { blogPosts, type Category } from "@/app/data/blogPosts"

const categoryColors: Record<string, string> = {
  Teachers: "bg-[#d4e8f9] text-[#4a7396]",
  Parents: "bg-[#f7d4df] text-[#8b4d67]",
  Adults: "bg-[#d4ead4] text-[#4a7a5a]",
};

const categories = ["All", "Teachers", "Parents", "Adults"] as const;

export default function BlogPage() {
  const searchParams = useSearchParams();

  const initialCategory =
    (searchParams.get("category") as Category | "All") || "All";

  const [activeCategory, setActiveCategory] = useState<Category | "All">(
    initialCategory
  );
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();

      const matchesSearch =
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#d4e8f9] px-3 py-1.5 text-sm text-[#4a7396]">
            <span>📖</span>
            <span>All Articles</span>
          </div>

          <h1 className="text-[clamp(1.8rem,4vw,2.6rem)] font-serif leading-tight text-[#3d3456]">
            Mindfulness &amp; Compassion Blog
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-[#9e8aa0] leading-7">
            Practical articles for teachers, parents, and adults on the path to
            a more mindful life.
          </p>
        </div>

        <div className="mb-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
          <div className="relative max-w-sm flex-1">
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#c4a8c0]"
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-[#f0e6ee] bg-white py-2.5 pl-9 pr-4 text-sm text-[#5c5470] outline-none placeholder:text-[#c4a8c0] focus:border-[#f7c5d5] focus:ring-2 focus:ring-[#f7c5d5]/30"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${
                    isActive
                      ? cat === "All"
                        ? "bg-[#5c5470] text-white"
                        : categoryColors[cat]
                      : "bg-[#f4eff7] text-[#9e8aa0] hover:bg-[#eee5f5]"
                  }`}
                >
                  {cat === "All"
                    ? "All Posts"
                    : cat === "Teachers"
                      ? "📚 Teachers"
                      : cat === "Parents"
                        ? "💕 Parents"
                        : "🌿 Adults"}
                </button>
              );
            })}
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="py-20 text-center text-[#c4a8c0]">
            <div className="mb-3 text-4xl">🌸</div>
            <p>No articles found. Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#f0e6ee] bg-white transition-all duration-300 hover:shadow-md"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-xs ${categoryColors[post.category]}`}
                    >
                      {post.category}
                    </span>

                    <span className="flex items-center gap-1 text-xs text-[#c4a8c0]">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mb-2 flex-1 font-serif text-[1.05rem] leading-snug text-[#3d3456] transition-colors group-hover:text-[#b8839a]">
                    {post.title}
                  </h3>

                  <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-[#9e8aa0]">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs text-[#c4a8c0]">{post.date}</span>

                    <span className="flex items-center gap-1 text-xs text-[#b8839a] transition-all group-hover:gap-1.5">
                      Read <ArrowRight size={12} />
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