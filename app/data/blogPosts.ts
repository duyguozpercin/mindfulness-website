export type Category = "Teachers" | "Parents" | "Adults";

export const categories: readonly (Category | "All")[] = [
  "All",
  "Teachers",
  "Parents",
  "Adults",
] as const;

// 🔥 kategori renkleri tek yerde (Blog + BlogPost reuse)
export const categoryColors: Record<Category, string> = {
  Teachers: "bg-[#d4e8f9] text-[#4a7396]",
  Parents: "bg-[#f7d4df] text-[#8b4d67]",
  Adults: "bg-[#d4ead4] text-[#4a7a5a]",
};

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  readTime: string;
  date: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "5-mindfulness-activities-for-classrooms",
    title: "5 Mindfulness Activities for Busy Classrooms",
    excerpt:
      "Simple, no-prep mindfulness practices you can weave into your school day — even if you only have 3 minutes.",
    category: "Teachers",
    readTime: "5 min read",
    date: "March 28, 2026",
    image:
      "https://images.unsplash.com/photo-1761604478724-13fe879468cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    content: `
## Why Mindfulness in the Classroom?

Research consistently shows that short mindfulness practices can dramatically improve focus, reduce anxiety, and build emotional resilience in students of all ages. The best part? You don't need special training or equipment — just a few mindful moments woven into your existing routine.

## 1. The Breathing Star (Ages 5–10)

Hold up one hand. Starting at the bottom of the thumb, slowly trace up the outside of each finger as you breathe in, and trace down as you breathe out. By the time students finish tracing all five fingers, they've completed five slow, calming breaths.

*Why it works:* The physical act of tracing engages the senses and gives fidgety hands something to do while the mind settles.

## 2. The Body Scan Check-In (Ages 8+)

Before a test or challenging task, guide students through a 60-second body scan. Ask them to notice where they hold tension — shoulders, jaw, stomach — and gently let it go. This simple practice lowers cortisol and primes the brain for learning.

## 3. Gratitude Circle (All Ages)

At the end of the day, each student shares one thing they're grateful for. Keep it brief, keep it genuine. Over time, this simple ritual shifts the classroom culture toward noticing the good.

## 4. Mindful Listening (Ages 6+)

Ring a singing bowl or a soft bell. Ask students to listen until the sound completely fades, then raise their hands when they can no longer hear it. This trains sustained attention and creates a beautiful moment of shared silence.

## 5. Kindness Cards

Start a "kindness board" in your classroom. Students write anonymous compliments or appreciations for classmates on small cards and post them on the board. Revisit the board during challenging days — it's an instant mood lifter.

---

*These activities pair beautifully with our Mindfulness Cards for Classrooms, available in our Etsy shop in both digital and physical formats.*
    `,
  },
  {
    slug: "teaching-kids-to-breathe",
    title: "Teaching Kids to Take a Mindful Breath",
    excerpt:
      "Before you can teach children to calm themselves, they need to understand why breathing is so powerful. Here's how to make it click.",
    category: "Teachers",
    readTime: "4 min read",
    date: "March 15, 2026",
    image:
      "https://images.unsplash.com/photo-1630571050152-49d673ccfe13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    content: `
## The Science Behind the Breath

When we're anxious or dysregulated, our nervous system goes into "fight or flight" mode. The breath is one of the few automatic functions of the body we can consciously control — and controlling it sends a direct signal to the brain to calm down.

Children as young as four can learn this concept when it's framed in simple, relatable language.

## How to Explain It to Kids

Try this analogy: "Your brain is like a snow globe. When something shakes it up — a scary test, an argument with a friend — the snow swirls around and it's hard to see clearly. Slow breathing is like setting the snow globe down and letting everything settle."

## The 4-7-8 Breath (Ages 8+)

- Breathe in for 4 counts
- Hold for 7 counts
- Breathe out slowly for 8 counts

Repeat 3 times. This technique activates the parasympathetic nervous system, reducing heart rate and anxiety within minutes.

## Box Breathing (Ages 6+)

Draw a square in the air:
- Breathe in for 4 (draw the top)
- Hold for 4 (draw the right side)
- Breathe out for 4 (draw the bottom)
- Hold for 4 (draw the left side)

The visual, kinesthetic element makes this perfect for young learners.

## Making It Stick

Consistency is everything. A 2-minute breathing practice every morning builds a neural pathway over time. Students begin to reach for these tools independently — in the hallway, on the playground, before a big game.

*Pro tip: Our Breathing Exercise Cards make this routine effortless. Laminate them and keep a set at every table.*
    `,
  },
  {
    slug: "compassion-cards-with-your-child",
    title: "Compassion Cards: How to Use Them with Your Child",
    excerpt:
      "A gentle guide for parents on introducing compassion practices at home — making kindness a daily conversation.",
    category: "Parents",
    readTime: "6 min read",
    date: "April 1, 2026",
    image:
      "https://images.unsplash.com/photo-1572691489361-36d5562ca5b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    content: `
## What Are Compassion Cards?

Compassion cards are simple prompt cards designed to open conversations about feelings, kindness, and self-understanding. They're especially powerful because they meet children where they are — using age-appropriate language and gentle, non-threatening prompts.

## Starting the Conversation

The best time to introduce compassion practices is not in the middle of a meltdown. Start during calm, connected moments — after dinner, during a car ride, or as part of a bedtime routine.

Try saying: "I found this little card. Want to try it together?"

## Sample Prompts for Different Ages

**Ages 3–6:**
- "What's one thing that made you smile today?"
- "If you could give a hug to someone who is sad, who would it be?"
- "What makes you feel safe and cozy?"

**Ages 7–10:**
- "Tell me about a time you helped someone without being asked."
- "What do you do when you make a mistake? How do you talk to yourself?"
- "What's one nice thing you could say to yourself right now?"

**Ages 11+:**
- "What does it feel like in your body when someone is kind to you?"
- "Is there someone who might need extra kindness this week?"
- "What would you say to a friend who was being really hard on themselves?"

## The Magic of Consistency

Children learn compassion by experiencing it — from you, and in structured, gentle moments of reflection. Even two or three minutes with a compassion card before bedtime creates a ritual of warmth and connection that children carry with them.

*Our Mindful Family Card Deck includes 40 prompts organized by age and theme, available as both a physical deck and a printable PDF.*
    `,
  },
  {
    slug: "bedtime-mindfulness-family",
    title: "Bedtime Mindfulness Rituals for the Whole Family",
    excerpt:
      "Wind down together. Simple, screen-free rituals that help everyone sleep — and connect before the day ends.",
    category: "Parents",
    readTime: "5 min read",
    date: "March 20, 2026",
    image:
      "https://images.unsplash.com/photo-1608245326179-8fb4c332b96f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    content: `
## Why the Last 30 Minutes Matter

The transition from the busyness of the day to sleep is one of the most important windows for emotional processing. For children, this is often when big feelings surface — worries about tomorrow, replays of social situations, unprocessed emotions from the school day.

Instead of rushing through bedtime, what if we leaned into this window?

## The "Rose, Thorn, Bud" Practice

Share three things before sleep:
- **Rose:** Something good that happened today
- **Thorn:** Something that was hard or disappointing
- **Bud:** Something you're looking forward to tomorrow

This practice teaches children that life holds both difficulty and beauty, and that both deserve acknowledgment.

## Body Scan for Sleep

Guide your child through a gentle body scan: starting at the toes, tensing each body part gently and then releasing it. By the time you reach the head, most children are deeply relaxed — and often already asleep.

## Gratitude Breathing

Take three slow breaths together. With each exhale, whisper one thing you're grateful for. Simple. Quiet. Connecting.

## Creating the Ritual

The power isn't in any single practice — it's in the consistency. Children thrive on predictable, loving rituals. A 10-minute mindful bedtime routine creates safety, teaches self-regulation, and strengthens your bond.

*Our Bedtime Mindfulness Card Set walks you through five gentle rituals designed for families with children ages 3–12.*
    `,
  },
  {
    slug: "self-compassion-for-adults",
    title: "Self-Compassion: The Art of Being Kind to Yourself",
    excerpt:
      "Most of us are much kinder to strangers than to ourselves. What would happen if we changed that?",
    category: "Adults",
    readTime: "7 min read",
    date: "April 3, 2026",
    image:
      "https://images.unsplash.com/photo-1706714134209-bb8e32070586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    content: `
## The Inner Critic

Most of us have an inner voice that is relentlessly critical. It notices every mistake, magnifies every flaw, and compares us unfavorably to others. We rarely question this voice — we just accept its assessments as truth.

But here's what research, led by pioneering psychologist Dr. Kristin Neff, consistently shows: **self-criticism actually undermines performance, wellbeing, and resilience**. It's not the motivator we think it is.

Self-compassion — treating yourself with the same warmth and understanding you'd offer a good friend — is.

## The Three Components of Self-Compassion

Neff identifies three core elements:

1. **Self-kindness:** Being warm and understanding toward yourself when you suffer, fail, or feel inadequate, rather than ignoring your pain or flagellating yourself with self-criticism.

2. **Common humanity:** Recognizing that suffering and personal inadequacy are part of the shared human experience — something we all go through.

3. **Mindfulness:** Holding painful thoughts and feelings in balanced awareness rather than over-identifying with them.

## A Practice to Try

The next time you make a mistake or face a difficult moment, pause and ask:

*"What would I say to a dear friend in this exact situation?"*

Then say that to yourself. Notice what shifts.

## Why This Matters

Self-compassion isn't self-indulgence. It isn't lowering your standards. It's the foundation from which genuine growth, courage, and care for others can emerge.

*Our Self-Compassion Affirmation Cards offer 30 daily prompts to gently rewire the inner critic. Available as a printable PDF or physical card deck.*
    `,
  },
  {
    slug: "starting-daily-mindfulness",
    title: "Starting a Daily Mindfulness Practice (Even on Hard Days)",
    excerpt:
      "You don't need a meditation cushion, an hour of free time, or a perfectly quiet mind. Here's how to begin.",
    category: "Adults",
    readTime: "5 min read",
    date: "March 10, 2026",
    image:
      "https://images.unsplash.com/photo-1766413580354-fb8030da16f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    content: `
## The Myth of the Perfect Practice

One of the biggest barriers to starting a mindfulness practice is the idea that we need to do it "right." That we need silence, stillness, and a mind that cooperates.

The truth is: a wandering mind isn't a failing mind. Noticing that your mind has wandered — and gently bringing it back — *is* the practice. That's the bicep curl of meditation.

## Starting Small

Research suggests that consistency matters far more than duration. Five minutes every day will change you more than an hour-long session once a week.

**Start with just 5 minutes:**
1. Sit comfortably, close your eyes
2. Focus your attention on the physical sensation of breathing
3. When your mind wanders (and it will), gently notice, and return
4. Repeat

That's it. That's the practice.

## Anchor It to an Existing Habit

The easiest way to build a new habit is to attach it to one you already have. Try meditating:
- Right after brushing your teeth
- While your coffee brews
- Before opening your phone in the morning
- In your parked car before walking into work

## Dealing with "I Don't Have Time"

On the days when life feels most full — those are the days you most need even two mindful breaths. Not because it will fix everything, but because it reconnects you to yourself.

You are worth two minutes.

*Our Morning Mindfulness Card Set includes 30 daily prompts for building a consistent, nourishing practice.*
    `,
  },
  {
    slug: "power-of-gratitude",
    title: "The Power of Gratitude: A Simple Daily Practice",
    excerpt:
      "Gratitude isn't toxic positivity — it's a neuroscience-backed practice that literally rewires the brain for wellbeing.",
    category: "Adults",
    readTime: "4 min read",
    date: "February 28, 2026",
    image:
      "https://images.unsplash.com/photo-1555650677-cc8c2672ea20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    content: `
## What the Science Says

Multiple studies have found that writing down three things you're grateful for each day — for as few as three weeks — measurably increases happiness and decreases symptoms of depression. The effects persist for months after the practice ends.

Neuroimaging shows that gratitude activates the medial prefrontal cortex — the brain region associated with learning and decision-making. It literally builds new neural pathways.

## Gratitude vs. Toxic Positivity

Gratitude is not pretending everything is fine. It's not dismissing pain or bypassing difficult emotions.

Genuine gratitude coexists with hardship. You can be exhausted and grateful. You can be grieving and grateful. The practice isn't about replacing difficult feelings — it's about expanding your awareness to hold more of the full picture.

## How to Make It Stick

The most common pitfall is habituating — writing the same three things every day until it becomes mechanical. To keep the practice alive:

- **Be specific.** Not "I'm grateful for my family" but "I'm grateful for the way my daughter laughed at dinner tonight."
- **Notice small things.** The smell of coffee. A kind email. A patch of sunlight.
- **Feel it.** Don't just list it — spend a few seconds actually feeling the appreciation.

## For Families

Making gratitude a shared family ritual creates compound benefits — for your children and for your relationships. Even very young children can participate.

*Our Gratitude Card Set includes 30 illustrated prompts designed to spark genuine appreciation in adults and children alike.*
    `,
  },
  {
    slug: "helping-kids-manage-emotions",
    title: "Helping Kids Manage Big Emotions with Mindfulness",
    excerpt:
      "Big feelings in small bodies can be overwhelming for everyone. Mindfulness gives children language, tools, and safety.",
    category: "Parents",
    readTime: "6 min read",
    date: "March 5, 2026",
    image:
      "https://images.unsplash.com/photo-1764192114257-ae9ecf97eb6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    content: `
## Why Children Struggle with Big Emotions

The prefrontal cortex — the part of the brain responsible for emotional regulation — isn't fully developed until our mid-twenties. Children are literally working with an incomplete toolkit. They're not being "dramatic" or "difficult" — their nervous systems are genuinely overwhelmed.

Understanding this changes everything about how we respond.

## Name It to Tame It

Research by neuroscientist Dan Siegel shows that labeling an emotion activates the prefrontal cortex and reduces the intensity of the emotional response. Simply helping a child put words to what they're feeling — "It sounds like you're really frustrated" — begins to calm the storm.

This is why emotional vocabulary matters. The more words children have for their inner experience, the more agency they have over it.

## The STOP Technique

Teach children to STOP when they feel overwhelmed:
- **S**top what you're doing
- **T**ake a breath
- **O**bserve how you're feeling (body sensations, thoughts)
- **P**roceed with intention

This four-step pause creates space between stimulus and response. Over time, it becomes an automatic tool.

## Your Regulation Comes First

Children co-regulate with their caregivers. Before you can help your child calm down, you need to be regulated yourself. Taking one slow breath before responding to a meltdown isn't a luxury — it's the most effective parenting tool you have.

*Our Emotions Mindfulness Card Set helps children identify and navigate 20 different emotions through guided activities, breathing practices, and gentle affirmations.*
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: Category): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
