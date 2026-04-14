"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Clock, Search } from "lucide-react";
import type { SanityPost } from "../(site)/blog/page";

type BlogClientPageProps = {
  posts: SanityPost[];
  initialCategory?: string;
};

const categories = ["all", "teachers", "parents", "adults"] as const;
type CategoryFilter = (typeof categories)[number];

function formatDate(date?: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getCategoryClasses(category?: string) {
  switch (category) {
    case "Teachers":
      return "bg-[#d4e8f9] text-[#4a7396]";
    case "Parents":
      return "bg-[#f7d4df] text-[#8b4d67]";
    case "Adults":
      return "bg-[#d4ead4] text-[#4a7a5a]";
    default:
      return "bg-[#f4eff7] text-[#9e8aa0]";
  }
}

function getHeading(category: string) {
  switch (category) {
    case "teachers":
      return "Teachers Articles";
    case "parents":
      return "Parents Articles";
    case "adults":
      return "Adults Articles";
    default:
      return "All Articles";
  }
}

export default function BlogClientPage({
  posts,
  initialCategory = "all",
}: BlogClientPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const normalizedInitialCategory = categories.includes(
    initialCategory.toLowerCase() as CategoryFilter
  )
    ? (initialCategory.toLowerCase() as CategoryFilter)
    : "all";

  const [activeCategory, setActiveCategory] =
    useState<CategoryFilter>(normalizedInitialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const postCategories = post.categories ?? [];
      const primaryCategory = postCategories[0]?.title?.toLowerCase();

      const matchesCategory =
        activeCategory === "all" ||
        primaryCategory === activeCategory ||
        postCategories.some(
          (category) => category.slug?.toLowerCase() === activeCategory
        );

      const query = searchQuery.trim().toLowerCase();

      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt?.toLowerCase().includes(query) ||
        postCategories.some((category) =>
          category.title.toLowerCase().includes(query)
        );

      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  function handleCategoryChange(category: CategoryFilter) {
    setActiveCategory(category);

    const params = new URLSearchParams(searchParams.toString());

    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    const queryString = params.toString();
    router.replace(`/blog${queryString ? `?${queryString}` : ""}`);
  }

  return (
    <div className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#d4e8f9] px-3 py-1.5 text-sm text-[#4a7396]">
            <span>📖</span>
            <span>{getHeading(activeCategory)}</span>
          </div>

          <h1 className="font-serif text-[clamp(1.8rem,4vw,2.6rem)] leading-tight text-[#3d3456]">
            Mindfulness &amp; Compassion Blog
          </h1>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-[#9e8aa0]">
            Practical articles for teachers, parents, and adults on the path to
            a more mindful life.
          </p>
        </div>

        <div className="mb-10 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-center">
          <div className="relative w-full max-w-[520px]">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c4a8c0]"
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-[#f0e6ee] bg-white py-3 pl-12 pr-4 text-sm text-[#5c5470] outline-none placeholder:text-[#c4a8c0] focus:border-[#f7c5d5] focus:ring-2 focus:ring-[#f7c5d5]/30"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => handleCategoryChange("all")}
              className={`rounded-full px-5 py-2.5 text-sm transition-colors ${
                activeCategory === "all"
                  ? "bg-[#5c5470] text-white"
                  : "bg-[#f4eff7] text-[#9e8aa0] hover:bg-[#eee5f5]"
              }`}
            >
              All Posts
            </button>

            <button
              type="button"
              onClick={() => handleCategoryChange("teachers")}
              className={`rounded-full px-5 py-2.5 text-sm transition-colors ${
                activeCategory === "teachers"
                  ? "bg-[#d4e8f9] text-[#4a7396]"
                  : "bg-[#f4eff7] text-[#9e8aa0] hover:bg-[#eee5f5]"
              }`}
            >
              📚 Teachers
            </button>

            <button
              type="button"
              onClick={() => handleCategoryChange("parents")}
              className={`rounded-full px-5 py-2.5 text-sm transition-colors ${
                activeCategory === "parents"
                  ? "bg-[#f7d4df] text-[#8b4d67]"
                  : "bg-[#f4eff7] text-[#9e8aa0] hover:bg-[#eee5f5]"
              }`}
            >
              💕 Parents
            </button>

            <button
              type="button"
              onClick={() => handleCategoryChange("adults")}
              className={`rounded-full px-5 py-2.5 text-sm transition-colors ${
                activeCategory === "adults"
                  ? "bg-[#d4ead4] text-[#4a7a5a]"
                  : "bg-[#f4eff7] text-[#9e8aa0] hover:bg-[#eee5f5]"
              }`}
            >
              🌿 Adults
            </button>
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="py-20 text-center text-[#c4a8c0]">
            <div className="mb-3 text-4xl">🌸</div>
            <p>No articles found. Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredPosts.map((post) => {
              const categoryTitle = post.categories?.[0]?.title;
              const categoryClass = getCategoryClasses(categoryTitle);

              return (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post._id}
                  className="group flex flex-col overflow-hidden rounded-[28px] border border-[#f0e6ee] bg-white transition-all duration-300 hover:shadow-md"
                >
                  <div className="h-64 overflow-hidden bg-[#f7f1f5]">
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

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span
                        className={`inline-block rounded-full px-4 py-1.5 text-xs ${categoryClass}`}
                      >
                        {categoryTitle || "Uncategorized"}
                      </span>

                      <span className="inline-flex items-center gap-1 text-xs text-[#c4a8c0]">
                        <Clock size={12} />
                        5 min read
                      </span>
                    </div>

                    <h2 className="mb-3 font-serif text-[1.15rem] leading-snug text-[#3d3456] transition-colors group-hover:text-[#b8839a]">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-[#9e8aa0]">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-xs text-[#c4a8c0]">
                        {formatDate(post.publishedAt)}
                      </span>

                      <span className="inline-flex items-center gap-1 text-xs text-[#b8839a] transition-all group-hover:gap-1.5">
                        Read
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}