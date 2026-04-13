import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";

export default async function BlogPage() {
  const posts = await client.fetch(postsQuery);

  return (
    <div className="p-10">
      <h1>Sanity Test</h1>

      {posts.map((post: any) => (
        <div key={post._id} className="mb-6">
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}