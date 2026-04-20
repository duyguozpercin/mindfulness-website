import Link from "next/link";
import { Heart, BookOpen, Users } from "lucide-react";

const aboutImage =
  "https://images.unsplash.com/photo-1706714134209-bb8e32070586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";

export const metadata = {
  title: "About",
  description:
    "Learn about the mission behind Mindful Lotus.",
};

export default function AboutPage() {
  return (
    <div className="py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#f7d4df] px-3 py-1.5 text-sm text-[#8b4d67]">
              🌸 About This Space
            </div>

            <h1 className="mb-5 font-serif text-[clamp(1.8rem,4vw,2.6rem)] leading-tight text-[#3d3456]">
              A Space for Presence, Kindness & Connection
            </h1>

            <p className="mb-4 text-[#7a7090] leading-8">
              Welcome. I'm so glad you found your way here.
            </p>

            <p className="mb-4 text-[#7a7090] leading-8">
              Mindful Lotus was born from a deep belief: that the most
              powerful thing we can offer children — and ourselves — is the
              ability to pause, breathe, and respond rather than react. That
              kindness toward ourselves and others isn't a luxury — it's a
              foundation.
            </p>

            <p className="text-[#7a7090] leading-8">
              I'm a mindfulness educator and creator of resources for teachers,
              parents, and anyone on the path toward a more intentional life.
              Everything you find here — the articles, the cards, the posters —
              is made with genuine care and grounded in the science of
              wellbeing.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img
                src={aboutImage}
                alt="Mindful morning practice"
                className="h-96 w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#f7c5d5] text-3xl shadow-md">
              🌸
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="mb-16 rounded-3xl border border-[#f0e6ee] bg-gradient-to-br from-[#fdf0f5] to-[#edf4fc] p-8 text-center sm:p-12">
          <div className="mb-4 text-4xl">🌿</div>

          <h2 className="mb-4 font-serif text-[1.9rem] text-[#3d3456]">
            Our Mission
          </h2>

          <p className="mx-auto max-w-2xl text-[1.1rem] leading-8 text-[#7a7090]">
            To make mindfulness and compassion accessible — for every classroom,
            every family, every individual who is ready to slow down and come
            home to themselves. One breath, one moment, one card at a time.
          </p>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="mb-8 text-center font-serif text-[1.8rem] text-[#3d3456]">
            What I Believe
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                icon: <Heart size={20} className="text-[#b8839a]" />,
                bg: "bg-[#fdf0f5]",
                title: "Compassion Starts Within",
                text: "We cannot pour from an empty cup. Self-compassion is the root from which genuine care for others grows.",
              },
              {
                icon: <BookOpen size={20} className="text-[#4a7396]" />,
                bg: "bg-[#edf4fc]",
                title: "Evidence Matters",
                text: "Every practice I share is grounded in research and science of human flourishing.",
              },
              {
                icon: <Users size={20} className="text-[#4a7a5a]" />,
                bg: "bg-[#edf7ed]",
                title: "Community Heals",
                text: "When one person practices mindfulness, entire systems shift.",
              },
              {
                icon: <span className="text-xl">🌻</span>,
                bg: "bg-[#fef8ec]",
                title: "Simplicity is a Gift",
                text: "The most effective mindfulness tools are the simplest.",
              },
            ].map((item, i) => (
              <div key={i} className={`${item.bg} flex gap-4 rounded-2xl p-6`}>
                <div className="mt-1 shrink-0">{item.icon}</div>

                <div>
                  <h4 className="mb-2 font-serif text-[#3d3456]">
                    {item.title}
                  </h4>

                  <p className="text-sm leading-relaxed text-[#9e8aa0]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What You'll Find */}
        <div className="mb-16">
          <h2 className="mb-8 text-center font-serif text-[1.8rem] text-[#3d3456]">
            What You'll Find Here
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              {
                emoji: "📖",
                title: "The Blog",
                link: "/blog",
                textColor: "text-[#8b4d67]",
                bg: "bg-[#fdf0f5] border-[#f7d4df]",
              },
              {
                emoji: "💻",
                title: "Digital Products",
                link: "/products/digital",
                textColor: "text-[#4a7396]",
                bg: "bg-[#edf4fc] border-[#d4e8f9]",
              },
              {
                emoji: "📦",
                title: "Physical Products",
                link: "/products/physical",
                textColor: "text-[#4a7a5a]",
                bg: "bg-[#edf7ed] border-[#d4ead4]",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.bg} flex flex-col items-center rounded-2xl border p-6 text-center`}
              >
                <div className="mb-3 text-3xl">{item.emoji}</div>

                <h4 className={`${item.textColor} mb-2 font-serif`}>
                  {item.title}
                </h4>

                <Link
                  href={item.link}
                  className="text-sm text-[#b8839a] transition-colors hover:text-[#a0607c]"
                >
                  Explore →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mb-16 rounded-3xl bg-[#fef9f0] p-10 text-center">
          <div className="mb-4 text-3xl">✨</div>

          <blockquote className="mb-3 font-serif text-[clamp(1.1rem,2.5vw,1.4rem)] italic leading-7 text-[#5c5470]">
            "In a gentle way, you can shake the world."
          </blockquote>

          <cite className="text-sm text-[#c4a8c0] not-italic">
            — Mahatma Gandhi
          </cite>
        </div>

        {/* CTA */}
        <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
          <Link
            href="/blog"
            className="rounded-2xl bg-[#5c5470] px-8 py-4 text-white transition-colors hover:bg-[#4a4360]"
          >
            <div className="mb-1 text-xl">📖</div>
            <div className="font-serif">Start Reading</div>
            <div className="mt-1 text-xs text-white/70">
              Explore mindfulness articles
            </div>
          </Link>

          <a
            href="https://www.etsy.com/shop/LotusCreativeTR"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-[#f7c5d5] px-8 py-4 text-[#7d4f6b] transition-colors hover:bg-[#f2b0c5]"
          >
            <div className="mb-1 text-xl">🛍️</div>
            <div className="font-serif">Visit the Etsy Shop</div>
            <div className="mt-1 text-xs text-[#7d4f6b]/60">
              Cards & posters for every space
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}