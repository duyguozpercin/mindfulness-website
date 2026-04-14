export type ProductType = "digital" | "physical";
export type ProductColor = "pink" | "blue" | "green" | "yellow";

export interface Product {
  id: string;
  name: string;
  description: string;
  type: ProductType;
  audience: string;
  price: string;
  etsyUrl: string;
  color: ProductColor;
  emoji: string;
}

export const ETSY_SHOP_URL = "https://www.etsy.com/shop/LotusCreativeTR";

export const productColors: Record<ProductColor, string> = {
  pink: "bg-[#f7c5d5] hover:bg-[#f2b0c5] text-[#7d4f6b]",
  blue: "bg-[#c8dff5] hover:bg-[#b3d2ef] text-[#4a7396]",
  green: "bg-[#c5e8c5] hover:bg-[#aed9ae] text-[#4a7a5a]",
  yellow: "bg-[#fde9a0] hover:bg-[#fcd96d] text-[#7a6030]",
};

export const products: Product[] = [
  {
    id: "d1",
    name: "Mindfulness Cards for Kids – Printable PDF",
    description:
      "40 beautifully illustrated mindfulness activity cards for children ages 4–12. Print at home, laminate, and use in classrooms or at home. Includes breathing exercises, body scans, and compassion prompts.",
    type: "digital",
    audience: "Teachers & Parents",
    price: "$8",
    etsyUrl: ETSY_SHOP_URL,
    color: "pink",
    emoji: "🌸",
  },
  {
    id: "d2",
    name: "Self-Compassion Affirmation Poster Set – Digital",
    description:
      "8 high-resolution printable posters (A4 & US Letter) featuring gentle affirmations for self-compassion. Soft pastel designs perfect for classrooms, therapy rooms, and home spaces.",
    type: "digital",
    audience: "Adults & Teens",
    price: "$6",
    etsyUrl: ETSY_SHOP_URL,
    color: "blue",
    emoji: "💙",
  },
  {
    id: "d3",
    name: "Breathing Exercise Cards – Printable PDF",
    description:
      "20 guided breathing technique cards with child-friendly illustrations. Includes box breathing, star breathing, 4-7-8, and more. Instant download, ready to print and use.",
    type: "digital",
    audience: "Teachers & Parents",
    price: "$5",
    etsyUrl: ETSY_SHOP_URL,
    color: "green",
    emoji: "🌿",
  },
  {
    id: "d4",
    name: "Gratitude Journal Templates – Printable PDF",
    description:
      "30 days of guided gratitude journal pages for adults, with a separate set for children. Designed to build a consistent, meaningful gratitude practice.",
    type: "digital",
    audience: "Adults & Families",
    price: "$7",
    etsyUrl: ETSY_SHOP_URL,
    color: "yellow",
    emoji: "✨",
  },
  {
    id: "d5",
    name: "Emotions Vocabulary Cards – Printable PDF",
    description:
      "Illustrated cards for 30 emotions with child-friendly definitions and body-sensation descriptions. Helps children identify and communicate their inner experience.",
    type: "digital",
    audience: "Teachers & Parents",
    price: "$8",
    etsyUrl: ETSY_SHOP_URL,
    color: "pink",
    emoji: "🌈",
  },
  {
    id: "p1",
    name: "Mindful Moments Card Deck for Kids",
    description:
      "A beautifully printed 40-card deck on premium card stock. Features mindfulness activities, compassion prompts, and breathing exercises for children ages 4–12. Perfect gift for families and educators.",
    type: "physical",
    audience: "Teachers & Parents",
    price: "$22",
    etsyUrl: ETSY_SHOP_URL,
    color: "pink",
    emoji: "🌸",
  },
  {
    id: "p2",
    name: "Self-Compassion Affirmation Cards",
    description:
      "A deck of 30 affirmation cards for adults, printed on premium matte card stock with rounded corners. Each card features a gentle affirmation and a short reflection prompt. Comes in a kraft paper box.",
    type: "physical",
    audience: "Adults",
    price: "$18",
    etsyUrl: ETSY_SHOP_URL,
    color: "blue",
    emoji: "💙",
  },
  {
    id: "p3",
    name: "Mindful Family Activity Cards",
    description:
      "40 activity cards designed for families to use together. Includes connection games, gratitude practices, breathing exercises, and kindness challenges for all ages. Beautifully illustrated on durable card stock.",
    type: "physical",
    audience: "Families",
    price: "$24",
    etsyUrl: ETSY_SHOP_URL,
    color: "green",
    emoji: "🌿",
  },
  {
    id: "p4",
    name: "Classroom Mindfulness Poster Set",
    description:
      "Set of 5 A3 posters for classroom walls. Features breathing techniques, emotion wheels, and mindfulness reminders in soft, child-friendly designs. Printed on heavyweight paper.",
    type: "physical",
    audience: "Teachers",
    price: "$28",
    etsyUrl: ETSY_SHOP_URL,
    color: "yellow",
    emoji: "✨",
  },
  {
    id: "p5",
    name: "Compassion Cards for Educators",
    description:
      "A curated set of 25 cards for teachers and school counselors — featuring strategies for supporting student wellbeing, self-care reminders for educators, and classroom culture-building prompts.",
    type: "physical",
    audience: "Teachers",
    price: "$20",
    etsyUrl: ETSY_SHOP_URL,
    color: "blue",
    emoji: "💛",
  },
];

export function getProductsByType(type: ProductType): Product[] {
  return products.filter((product) => product.type === type);
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}