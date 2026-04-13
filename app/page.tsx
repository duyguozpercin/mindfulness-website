import Link from "next/link";
import { ArrowRight, Heart, BookOpen, Sparkles, ShoppingBag } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

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
    link: "/blog?category=Teachers",
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
    link: "/blog?category=Parents",
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
    link: "/blog?category=Adults",
    emoji: "🌿",
  },
];

const featuredPosts = blogPosts.slice(0, 3);

const categoryColors: Record<string, string> = {
  Teachers: "bg-[#d4e8f9] text-[#4a7396]",
  Parents: "bg-[#f7d4df] text-[#8b4d67]",
  Adults: "bg-[#d4ead4] text-[#4a7a5a]",
};

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdfaf7]/95 via-[#fdfaf7]/75 to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-[#f7c5d5]/60 text-[#8b4d67] px-4 py-1.5 rounded-full text-sm mb-6">
              <Sparkles size={14} />
              Mindfulness & Compassion Resources
            </div>
            <h1
              style={{ fontFamily: "'Lora', serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.25 }}
              className="text-[#3d3456] mb-5"
            >
              A Gentler Way to Live, Learn & Grow
            </h1>
            <p
              style={{ fontSize: "1.1rem", lineHeight: 1.75 }}
              className="text-[#7a7090] mb-8 max-w-md"
            >
              Practical mindfulness resources for teachers, parents, and anyone
              seeking more presence, kindness, and compassion in everyday life.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-[#5c5470] text-white px-6 py-3 rounded-full hover:bg-[#4a4360] transition-colors"
              >
                Read the Blog <ArrowRight size={16} />
              </Link>
              <a
                href="https://www.etsy.com/shop/MindfulMomentsShop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f7c5d5] text-[#7d4f6b] px-6 py-3 rounded-full hover:bg-[#f2b0c5] transition-colors"
              >
                <ShoppingBag size={16} />
                Shop on Etsy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: "'Lora', serif", fontSize: "2rem" }}
              className="text-[#3d3456] mb-3"
            >
              Where Do You Begin?
            </h2>
            <p className="text-[#9e8aa0] max-w-md mx-auto" style={{ lineHeight: 1.7 }}>
              Whether you're a teacher, a parent, or on your own personal
              journey — there's something here for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((aud) => (
              <div
                key={aud.title}
                className={`${aud.color} rounded-3xl overflow-hidden group hover:shadow-md transition-shadow duration-300`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={aud.image}
                    alt={aud.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-2xl mb-2">{aud.emoji}</div>
                  <h3
                    style={{ fontFamily: "'Lora', serif" }}
                    className={`${aud.textColor} mb-1`}
                  >
                    {aud.title}
                  </h3>
                  <p className="text-sm text-[#7a7090] mb-1">{aud.subtitle}</p>
                  <p className="text-sm text-[#9e8aa0] leading-relaxed mb-5">
                    {aud.description}
                  </p>
                  <Link
                    href={aud.link}
                    className={`inline-flex items-center gap-1.5 ${aud.btnColor} px-4 py-2 rounded-full text-sm transition-colors`}
                  >
                    Explore Articles <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-16 bg-[#fef9f0]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-3xl mb-4">🌼</div>
          <blockquote
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
              lineHeight: 1.6,
            }}
            className="text-[#5c5470] italic mb-4"
          >
            "You can't stop the waves, but you can learn to surf."
          </blockquote>
          <cite className="text-[#b8a0b0] text-sm not-italic">— Jon Kabat-Zinn</cite>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2
                style={{ fontFamily: "'Lora', serif", fontSize: "2rem" }}
                className="text-[#3d3456]"
              >
                Latest from the Blog
              </h2>
              <p className="text-[#9e8aa0] mt-1">
                Practical insights for your mindfulness journey
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1.5 text-[#b8839a] text-sm hover:gap-2.5 transition-all"
            >
              All posts <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="group bg-[#fdfaf7] rounded-2xl overflow-hidden border border-[#f0e6ee] hover:shadow-md transition-all duration-300"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span
                    className={`inline-block text-xs px-3 py-1 rounded-full mb-3 ${categoryColors[post.category]}`}
                  >
                    {post.category}
                  </span>
                  <h3
                    style={{ fontFamily: "'Lora', serif", fontSize: "1.05rem" }}
                    className="text-[#3d3456] mb-2 group-hover:text-[#b8839a] transition-colors leading-snug"
                  >
                    {post.title}
                  </h3>
                  <p className="text-[#9e8aa0] text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-4 text-xs text-[#c4a8c0]">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[#b8839a] text-sm"
            >
              See all posts <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-gradient-to-br from-[#fdf0f5] to-[#f0f5fd]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={productImage}
                  alt="Mindfulness Cards"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#fef0c7] rounded-full flex items-center justify-center text-3xl shadow-md">
                🌸
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-[#fef0c7] text-[#8a7040] px-3 py-1.5 rounded-full text-sm mb-5">
                <ShoppingBag size={13} /> Available on Etsy
              </div>
              <h2
                style={{ fontFamily: "'Lora', serif", fontSize: "1.9rem", lineHeight: 1.3 }}
                className="text-[#3d3456] mb-4"
              >
                Mindfulness Cards & Posters for Every Space
              </h2>
              <p className="text-[#9e8aa0] leading-relaxed mb-6">
                Our beautifully designed cards and posters bring mindfulness into
                classrooms, therapy rooms, and homes. Available as instant
                digital downloads or shipped physical sets.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/products/digital"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#5c5470] border border-[#e0d0e8] px-5 py-2.5 rounded-full text-sm hover:bg-[#fdf0f5] transition-colors"
                >
                  💻 Digital Downloads
                </Link>
                <Link
                  href="/products/physical"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#5c5470] border border-[#e0d0e8] px-5 py-2.5 rounded-full text-sm hover:bg-[#fdf0f5] transition-colors"
                >
                  📦 Physical Products
                </Link>
              </div>
              <div className="mt-6">
                <a
                  href="https://www.etsy.com/shop/MindfulMomentsShop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#f7c5d5] text-[#7d4f6b] px-6 py-3 rounded-full hover:bg-[#f2b0c5] transition-colors"
                >
                  <ShoppingBag size={16} />
                  Visit Our Etsy Shop
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mindfulness */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: "'Lora', serif", fontSize: "2rem" }}
              className="text-[#3d3456] mb-3"
            >
              Why Mindfulness & Compassion?
            </h2>
            <p className="text-[#9e8aa0] max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
              The science is clear. The evidence is growing. And the need has
              never been greater.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                <h4
                  style={{ fontFamily: "'Lora', serif" }}
                  className="text-[#3d3456] mb-2"
                >
                  {item.title}
                </h4>
                <p className="text-[#9e8aa0] text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#f7d4df]/40">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="text-3xl mb-4">💌</div>
          <h2
            style={{ fontFamily: "'Lora', serif", fontSize: "1.7rem" }}
            className="text-[#3d3456] mb-3"
          >
            Join the Mindful Community
          </h2>
          <p className="text-[#9e8aa0] mb-6 leading-relaxed">
            Get new articles, mindfulness prompts, and exclusive discounts
            delivered gently to your inbox. No spam — ever.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-full border border-[#f0e6ee] bg-white text-[#5c5470] placeholder:text-[#c4a8c0] outline-none focus:border-[#f7c5d5] focus:ring-2 focus:ring-[#f7c5d5]/30 text-sm"
            />
            <button
              type="submit"
              className="bg-[#5c5470] text-white px-6 py-3 rounded-full text-sm hover:bg-[#4a4360] transition-colors whitespace-nowrap"
            >
              Subscribe 🌸
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
