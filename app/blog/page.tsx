import type { Metadata } from "next";
import BlogClientPage from "./BlogClientPage";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Mindfulness and compassion articles for teachers, parents, and adults. Practical tips, exercises, and insights for everyday life.",
};

export default function BlogPage() {
  return <BlogClientPage />;
}