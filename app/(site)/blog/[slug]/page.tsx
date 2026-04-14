import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery, postsQuery } from "@/sanity/lib/queries";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type SanityPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  body?: any[];
  mainImage?: {
    asset?: {
      url?: string;
    };
  };
  author?: {
    name?: string;
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

export async function generateStaticParams() {
  const posts: { slug: string }[] = await client.fetch(postsQuery);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post: SanityPost | null = await client.fetch(postBySlugQuery, { slug });

  if (!post) {
    return {
      title: "Article",
      description: "Mindfulness and compassion article from Mindful Moments.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt || "Mindfulness article from Mindful Moments.",
  };
}

const portableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="mt-8 mb-3 font-serif text-[1.4rem] text-[#3d3456]">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="mt-6 mb-2 font-serif text-[1.15rem] text-[#5c5470]">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="my-3 leading-8 text-[#7a7090]">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-4 border-l-4 border-[#f7c5d5] pl-4 italic text-[#9e8aa0]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="my-4 space-y-2 pl-2">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex items-start gap-2 leading-7 text-[#7a7090]">
        <span className="mt-1 text-[#f7c5d5]">✿</span>
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="text-[#5c5470]">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="text-[#b8a0b0]">{children}</em>
    ),
  },
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const post: SanityPost | null = await client.fetch(postBySlugQuery, { slug });

  if (!post) {
    notFound();
  }

  const allPosts: SanityPost[] = await client.fetch(postsQuery);

  const relatedPosts = allPosts
    .filter((item) => item.slug !== post.slug)
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

        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-[#c4a8c0]">
          {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
          {post.author?.name && <span>By {post.author.name}</span>}
        </div>

        <h1 className="mb-5 font-serif text-[clamp(1.7rem,4vw,2.5rem)] leading-tight text-[#3d3456]">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="mb-8 border-l-4 border-[#f7c5d5] pl-4 italic leading-7 text-[#9e8aa0]">
            {post.excerpt}
          </p>
        )}

        <div className="mb-10 overflow-hidden rounded-2xl bg-[#f7f1f5]">
          {post.mainImage?.asset?.url ? (
            <img
              src={post.mainImage.asset.url}
              alt={post.title}
              className="h-64 w-full object-cover sm:h-80"
            />
          ) : (
            <div className="flex h-64 items-center justify-center text-5xl sm:h-80">
              🌸
            </div>
          )}
        </div>

        <article className="max-w-none">
          {post.body ? (
            <PortableText value={post.body} components={portableTextComponents} />
          ) : (
            <p className="text-[#9e8aa0]">No content available.</p>
          )}
        </article>

        {relatedPosts.length > 0 && (
          <div className="mt-14">
            <h3 className="mb-6 font-serif text-[1.3rem] text-[#3d3456]">
              More Articles
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  href={`/blog/${relatedPost.slug}`}
                  key={relatedPost._id}
                  className="group overflow-hidden rounded-xl border border-[#f0e6ee] bg-white transition-shadow hover:shadow-sm"
                >
                  <div className="h-32 overflow-hidden bg-[#f7f1f5]">
                    {relatedPost.mainImage?.asset?.url ? (
                      <img
                        src={relatedPost.mainImage.asset.url}
                        alt={relatedPost.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-3xl">
                        🌸
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h4 className="font-serif text-[0.9rem] leading-snug text-[#3d3456] transition-colors group-hover:text-[#b8839a]">
                      {relatedPost.title}
                    </h4>
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