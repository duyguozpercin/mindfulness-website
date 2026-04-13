import { groq } from "next-sanity";

export const postsQuery = groq`
  *[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    excerpt
  }
`;