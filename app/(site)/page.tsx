import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  BookOpen,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import { client } from "@/sanity/lib/client";
import { featuredPostsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Mindful Moments",
  description:
    "Practical mindfulness resources for teachers, parents, and adults. Explore articles, printable cards, and tools for a calmer and more compassionate life.",
};

const heroImage =
  "https://images.unsplash.com/photo-1764192114257-ae9ecf97eb6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200";
const parentImage =
  "https://images.unsplash.com/photo-1572691489361-36d5562ca5b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600";
const teacherImage =
  "https://images.unsplash.com/photo-1761604478724-13fe879468cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600";
const adultImage =
  "https://images.unsplash.com/photo-1706714134209-bb8e32070586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600";
const productImage =
  "https://images.unsplash.com/photo-1708793699861-64aa340cdbef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";

const audiences = [
  {
    title: "For Teachers",
    subtitle: "Bring calm into the classroom",
    description:
      "Practical, no-prep mindfulness tools designed for the reality of teaching. Easy breathing exercises, emotion cards, and compassion prompts that fit into any school day.",
    image: teacherImage,
    color: "bg-[#d4e8f9]",
    textColor: "text-[#4a7396]",
    btnColor: "bg-[#c8dff5] hover:bg-[#b3d2ef] text-[#4a7396]",
    link: "/blog?category=teachers",
    emoji: "📚",
  },
  {
    title: "For Parents",
    subtitle: "Grow together, one breath at a time",
    description:
      "Nurture connection and emotional intelligence at home. Bedtime rituals, compassion conversations, and family mindfulness activities that children love.",
    image: parentImage,
    color: "bg-[#f7d4df]",
    textColor: "text-[#8b4d67]",
    btnColor: "bg-[#f7c5d5] hover:bg-[#f2b0c5] text-[#8b4d67]",
    link: "/blog?category=parents",
    emoji: "💕",
  },
  {
    title: "For Adults",
    subtitle: "A kinder relationship with yourself",
    description:
      "Self-compassion, daily mindfulness, and gratitude practices for anyone ready to slow down, turn inward, and cultivate more peace in everyday life.",
    image: adultImage,
    color: "bg-[#d4ead4]",
    textColor: "text-[#4a7a5a]",
    btnColor: "bg-[#c5e8c5] hover:bg-[#aed9ae] text-[#4a7a5a]",
    link: "/blog?category=adults",
    emoji: "🌿",
  },
];

type FeaturedPost = {
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

function formatDate(date?: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function HomePage() {
  const featuredPosts: FeaturedPost[] = await client.fetch(featuredPostsQuery);

  return (
    <div>
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdfaf7]/95 via-[#fdfaf7]/75 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#f7c5d5]/60 px-4 py-1.5 text-sm text-[#8b4d67]">
              <Sparkles size={14} />
              Mindfulness &amp; Compassion Resources
            </div>

            <h1 className="mb-5 font-serif text-[clamp(2rem,5vw,3.2rem)] leading-tight text-[#3d3456]">
              A Gentler Way to Live, Learn &amp; Grow
            </h1>

            <p className="mb-8 max-w-md text-[1.1rem] leading-8 text-[#7a7090]">
              Practical mindfulness resources for teachers, parents, and anyone
              seeking more presence, kindness, and compassion in everyday life.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-[#5c5470] px-6 py-3 text-white transition-colors hover:bg-[#4a4360]"
              >
                Read the Blog
                <ArrowRight size={16} />
              </Link>

              <a
                href="https://www.etsy.com/shop/MindfulMomentsShop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#f7c5d5] px-6 py-3 text-[#7d4f6b] transition-colors hover:bg-[#f2b0c5]"
              >
                <ShoppingBag size={16} />
                Shop on Etsy
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-serif text-[2rem] text-[#3d3456]">
              Where Do You Begin?
            </h2>
            <p className="mx-auto max-w-md leading-7 text-[#9e8aa0]">
              Whether you&apos;re a teacher, a parent, or on your own personal
              journey — there&apos;s something here for you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {audiences.map((aud) => (
              <div
                key={aud.title}
                className={`${aud.color} group overflow-hidden rounded-3xl transition-shadow duration-300 hover:shadow-md`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={aud.image}
                    alt={aud.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-2 text-2xl">{aud.emoji}</div>

                  <h3 className={`${aud.textColor} mb-1 font-serif`}>
                    {aud.title}
                  </h3>

                  <p className="mb-1 text-sm text-[#7a7090]">{aud.subtitle}</p>

                  <p className="mb-5 text-sm leading-relaxed text-[#9e8aa0]">
                    {aud.description}
                  </p>

                  <Link
                    href={aud.link}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm transition-colors ${aud.btnColor}`}
                  >
                    Explore Articles
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fef9f0] py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="mb-4 text-3xl">🌼</div>

          <blockquote className="mb-4 font-serif text-[clamp(1.2rem,3vw,1.6rem)] italic leading-7 text-[#5c5470]">
            &quot;You can&apos;t stop the waves, but you can learn to surf.&quot;
          </blockquote>

          <cite className="text-sm not-italic text-[#b8a0b0]">
            — Jon Kabat-Zinn
          </cite>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="font-serif text-[2rem] text-[#3d3456]">
                Latest from the Blog
              </h2>
              <p className="mt-1 text-[#9e8aa0]">
                Practical insights for your mindfulness journey
              </p>
            </div>

            <Link
              href="/blog"
              className="hidden items-center gap-1.5 text-sm text-[#b8839a] transition-all hover:gap-2.5 sm:inline-flex"
            >
              All posts
              <ArrowRight size={14} />
            </Link>
          </div>

          {featuredPosts.length === 0 ? (
            <div className="py-12 text-center text-[#c4a8c0]">
              <div className="mb-3 text-4xl">🌸</div>
              <p>No articles published yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {featuredPosts.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post._id}
                  className="group overflow-hidden rounded-2xl border border-[#f0e6ee] bg-[#fdfaf7] transition-all duration-300 hover:shadow-md"
                >
                  <div className="h-44 overflow-hidden bg-[#f7f1f5]">
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

                  <div className="p-5">
                    <span className="mb-3 inline-block rounded-full bg-[#f4eff7] px-3 py-1 text-xs text-[#9e8aa0]">
                      {post.categories?.[0]?.title || "Uncategorized"}
                    </span>
                    <h3 className="mb-2 font-serif text-[1.05rem] leading-snug text-[#3d3456] transition-colors group-hover:text-[#b8839a]">
                      {post.title}
                    </h3>

                    {post.excerpt && (
                      <p className="line-clamp-2 text-sm leading-relaxed text-[#9e8aa0]">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="mt-4 flex items-center justify-between text-xs text-[#c4a8c0]">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span className="inline-flex items-center gap-1 text-[#b8839a]">
                        Read
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-[#b8839a]"
            >
              See all posts
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#fdf0f5] to-[#f0f5fd] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={productImage}
                  alt="Mindfulness Cards"
                  className="h-80 w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 flex h-24 w-24 items-center justify-center rounded-full bg-[#fef0c7] text-3xl shadow-md">
                🌸
              </div>
            </div>

            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#fef0c7] px-3 py-1.5 text-sm text-[#8a7040]">
                <ShoppingBag size={13} />
                Available on Etsy
              </div>

              <h2 className="mb-4 font-serif text-[1.9rem] leading-tight text-[#3d3456]">
                Mindfulness Cards &amp; Posters for Every Space
              </h2>

              <p className="mb-6 leading-relaxed text-[#9e8aa0]">
                Our beautifully designed cards and posters bring mindfulness
                into classrooms, therapy rooms, and homes. Available as instant
                digital downloads or shipped physical sets.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/digital"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e0d0e8] bg-white px-5 py-2.5 text-sm text-[#5c5470] transition-colors hover:bg-[#fdf0f5]"
                >
                  💻 Digital Downloads
                </Link>

                <Link
                  href="/products/physical"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e0d0e8] bg-white px-5 py-2.5 text-sm text-[#5c5470] transition-colors hover:bg-[#fdf0f5]"
                >
                  📦 Physical Products
                </Link>
              </div>

              <div className="mt-6">
                <a
                  href="https://www.etsy.com/shop/MindfulMomentsShop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f7c5d5] px-6 py-3 text-[#7d4f6b] transition-colors hover:bg-[#f2b0c5]"
                >
                  <ShoppingBag size={16} />
                  Visit Our Etsy Shop
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-serif text-[2rem] text-[#3d3456]">
              Why Mindfulness &amp; Compassion?
            </h2>
            <p className="mx-auto max-w-xl leading-7 text-[#9e8aa0]">
              The science is clear. The evidence is growing. And the need has
              never been greater.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Heart size={22} className="text-[#b8839a]" />,
                bg: "bg-[#fdf0f5]",
                title: "Reduces Anxiety",
                text: "Regular mindfulness practice measurably reduces stress and anxiety in both children and adults.",
              },
              {
                icon: <BookOpen size={22} className="text-[#4a7396]" />,
                bg: "bg-[#edf4fc]",
                title: "Improves Focus",
                text: "Even 5 minutes of daily practice improves sustained attention and academic performance.",
              },
              {
                icon: <Sparkles size={22} className="text-[#7a9a4a]" />,
                bg: "bg-[#edf7ed]",
                title: "Builds Resilience",
                text: "Children who learn emotional regulation tools handle setbacks and challenges with greater ease.",
              },
              {
                icon: <span className="text-xl">🌻</span>,
                bg: "bg-[#fef8ec]",
                title: "Deepens Connection",
                text: "Compassion practices strengthen relationships — between students, between parents and children, and within ourselves.",
              },
            ].map((item, i) => (
              <div key={i} className={`${item.bg} rounded-2xl p-6`}>
                <div className="mb-3">{item.icon}</div>

                <h4 className="mb-2 font-serif text-[#3d3456]">
                  {item.title}
                </h4>

                <p className="text-sm leading-relaxed text-[#9e8aa0]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7d4df]/40 py-16">
        <div className="mx-auto max-w-xl px-4 text-center">
          <div className="mb-4 text-3xl">💌</div>

          <h2 className="mb-3 font-serif text-[1.7rem] text-[#3d3456]">
            Join the Mindful Community
          </h2>

          <p className="mb-6 leading-relaxed text-[#9e8aa0]">
            Get new articles, mindfulness prompts, and exclusive discounts
            delivered gently to your inbox. No spam — ever.
          </p>

          <form className="mx-auto flex max-w-sm flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-full border border-[#f0e6ee] bg-white px-4 py-3 text-sm text-[#5c5470] outline-none placeholder:text-[#c4a8c0] focus:border-[#f7c5d5] focus:ring-2 focus:ring-[#f7c5d5]/30"
            />

            <button
              type="submit"
              className="whitespace-nowrap rounded-full bg-[#5c5470] px-6 py-3 text-sm text-white transition-colors hover:bg-[#4a4360]"
            >
              Subscribe 🌸
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}