import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, ShoppingBag, ArrowRight } from "lucide-react";
import { getPostBySlug, blogPosts } from "@/app/data/blogPosts";

const categoryColors: Record<string, string> = {
  Teachers: "bg-[#d4e8f9] text-[#4a7396]",
  Parents: "bg-[#f7d4df] text-[#8b4d67]",
  Adults: "bg-[#d4ead4] text-[#4a7a5a]",
};

function renderMarkdown(content: string): React.ReactNode[] {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="mt-8 mb-3 font-serif text-[1.4rem] text-[#3d3456]"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="mt-6 mb-2 font-serif text-[1.15rem] text-[#5c5470]"
        >
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];

      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }

      elements.push(
        <ul key={`ul-${i}`} className="my-4 space-y-2 pl-2">
          {listItems.map((item, j) => {
            const parts = item.split(/\*\*(.*?)\*\*/g);

            return (
              <li
                key={j}
                className="flex items-start gap-2 text-[#7a7090] leading-7"
              >
                <span className="mt-1 text-[#f7c5d5]">✿</span>
                <span>
                  {parts.map((part, k) =>
                    k % 2 === 1 ? (
                      <strong key={k} className="text-[#5c5470]">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      );

      continue;
    } else if (line.startsWith("*") && line.endsWith("*") && line.length > 2) {
      const italic = line.slice(1, -1);

      elements.push(
        <p key={i} className="my-3 text-sm italic leading-7 text-[#b8a0b0]">
          {italic}
        </p>
      );
    } else if (line.startsWith("---")) {
      elements.push(<hr key={i} className="my-6 border-[#f0e6ee]" />);
    } else if (line.trim() === "") {
      // boş satırı geç
    } else {
      const parts = line.split(/\*\*(.*?)\*\*/g);

      elements.push(
        <p key={i} className="my-3 text-[#7a7090] leading-8">
          {parts.map((part, j) =>
            j % 2 === 1 ? (
              <strong key={j} className="text-[#5c5470]">
                {part}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    }

    i++;
  }

  return elements;
}

type PageProps = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug && item.category === post.category)
    .slice(0, 3);

  return (
    <div className="py-10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-[#b8839a] transition-all hover:gap-2.5"
        >
          <ArrowLeft size={14} />
          Back to Blog
        </Link>

        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span
            className={`rounded-full px-3 py-1 text-xs ${categoryColors[post.category]}`}
          >
            {post.category}
          </span>

          <span className="flex items-center gap-1 text-xs text-[#c4a8c0]">
            <Clock size={11} />
            {post.readTime}
          </span>

          <span className="text-xs text-[#c4a8c0]">{post.date}</span>
        </div>

        <h1 className="mb-5 font-serif text-[clamp(1.7rem,4vw,2.5rem)] leading-tight text-[#3d3456]">
          {post.title}
        </h1>

        <p className="mb-8 border-l-4 border-[#f7c5d5] pl-4 italic leading-7 text-[#9e8aa0]">
          {post.excerpt}
        </p>

        <div className="mb-10 overflow-hidden rounded-2xl">
          <img
            src={post.image}
            alt={post.title}
            className="h-64 w-full object-cover sm:h-80"
          />
        </div>

        <article className="max-w-none">
          {renderMarkdown(post.content)}
        </article>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-[#f0e6ee] bg-gradient-to-br from-[#fdf0f5] to-[#edf4fc] p-6 sm:flex-row sm:items-center">
          <div className="text-3xl">🌸</div>

          <div className="flex-1">
            <h4 className="mb-1 font-serif text-[#3d3456]">
              Love this topic?
            </h4>

            <p className="text-sm text-[#9e8aa0]">
              Explore our mindfulness cards and posters for{" "}
              {post.category.toLowerCase()} — available as digital downloads or
              physical sets.
            </p>
          </div>

          <a
            href="https://www.etsy.com/shop/MindfulMomentsShop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex whitespace-nowrap rounded-full bg-[#f7c5d5] px-5 py-2.5 text-sm text-[#7d4f6b] transition-colors hover:bg-[#f2b0c5]"
          >
            <span className="inline-flex items-center gap-2">
              <ShoppingBag size={14} />
              Shop on Etsy
            </span>
          </a>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-14">
            <h3 className="mb-6 font-serif text-[1.3rem] text-[#3d3456]">
              More for {post.category}
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  href={`/blog/${relatedPost.slug}`}
                  key={relatedPost.slug}
                  className="group overflow-hidden rounded-xl border border-[#f0e6ee] bg-white transition-shadow hover:shadow-sm"
                >
                  <div className="h-32 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4">
                    <h4 className="font-serif text-[0.9rem] leading-snug text-[#3d3456] transition-colors group-hover:text-[#b8839a]">
                      {relatedPost.title}
                    </h4>

                    <div className="mt-2 flex items-center gap-1 text-xs text-[#b8839a]">
                      Read
                      <ArrowRight size={11} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}