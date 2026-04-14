import { groq } from "next-sanity";



export const featuredPostsQuery = groq`
  *[_type == "post"] 
  | order(publishedAt desc, _createdAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage{
      asset->{
        url
      }
    }
  }
`;

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc, _createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage{
      asset->{
        url
      }
    }
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    excerpt,
    publishedAt,
    body,
    mainImage{
      asset->{
        url
      }
    },
    "slug": slug.current,
    author->{
      name
    }
  }
`;