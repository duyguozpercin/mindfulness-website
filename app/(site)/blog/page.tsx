import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import BlogClientPage from "@/app/blog/BlogClientPage";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Mindfulness and compassion articles for teachers, parents, and adults.",
};

export type SanityPost = {
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
  categories?: {
    _id: string;
    title: string;
    slug: string;
  }[];
};

type BlogPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const posts: SanityPost[] = await client.fetch(postsQuery);

  return (
    <BlogClientPage
      posts={posts}
      initialCategory={params?.category || "all"}
    />
  );
}