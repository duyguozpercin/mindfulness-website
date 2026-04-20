import { groq } from "next-sanity";

export const featuredPostsQuery = groq`
  *[_type == "post"] 
  | order(publishedAt desc, _createdAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    readTime,
    publishedAt,
    mainImage{
      asset->{
        url
      }
    },
    categories[]->{
      _id,
      title,
      "slug": slug.current
    }
  }
`;

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc, _createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    readTime,
    publishedAt,
    mainImage{
      asset->{
        url
      }
    },
    categories[]->{
      _id,
      title,
      "slug": slug.current
    }
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    excerpt,
    readTime,
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
    },
    categories[]->{
      _id,
      title,
      "slug": slug.current
    }
  }
`;

export const digitalProductsQuery = groq`
  *[_type == "product" && productType == "digital"] | order(sortOrder asc, _createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    productType,
    audience,
    description,
    price,
    etsyUrl,
    emoji,
    color,
    sortOrder
  }
`;

export const physicalProductsQuery = groq`
  *[_type == "product" && productType == "physical"] | order(sortOrder asc, _createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    productType,
    audience,
    description,
    price,
    etsyUrl,
    emoji,
    color,
    sortOrder
  }
`;