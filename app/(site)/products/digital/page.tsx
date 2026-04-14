import type { Metadata } from "next";
import Link from "next/link";
import { Download, ExternalLink, ShoppingBag } from "lucide-react";
import ProductCard from "@/components/product-card"
import { getProductsByType } from "@/app/data/products";

const ETSY_SHOP_URL = "https://www.etsy.com/shop/LotusCreativeTR";

export const metadata: Metadata = {
  title: "Digital Products",
  description:
    "Printable mindfulness cards, affirmation posters, and downloadable resources for teachers, parents, and personal practice.",
};
export default function DigitalProductsPage() {
  const digitalProducts = getProductsByType("digital");

  return (
    <div className="py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#fef0c7] px-3 py-1.5 text-sm text-[#8a7040]">
            <ShoppingBag size={13} />
            Available on Etsy
          </div>

          <h1 className="font-serif text-[clamp(1.8rem,4vw,2.6rem)] text-[#3d3456]">
            Digital Mindfulness Products
          </h1>

          <p className="mx-auto mt-3 max-w-xl leading-7 text-[#9e8aa0]">
            Instant-download resources for classrooms, homes, and personal
            practice. Print them anytime and use them again and again.
          </p>

          <div className="mt-5">
            <a
              href={ETSY_SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#b8839a] transition-colors hover:text-[#a0607c]"
            >
              View all products in our Etsy shop
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 rounded-2xl bg-[#edf4fc] px-5 py-3 text-sm text-[#4a7396]">
            <Download size={16} />
            <span>
              <strong>Instant download</strong> — receive your files immediately
              after purchase. Print at home, at a local print shop, or keep them
              digitally.
            </span>
          </div>
        </div>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex gap-1 rounded-full bg-[#f4eff7] p-1">
            <Link
              href="/products/digital"
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm text-[#5c5470] shadow-sm"
            >
              <Download size={14} />
              Digital Products
            </Link>

            <Link
              href="/products/physical"
              className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-[#9e8aa0] transition-colors hover:text-[#5c5470]"
            >
              📦 Physical Products
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {digitalProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-[#f0e6ee] bg-gradient-to-r from-[#fdf0f5] via-[#f5edfb] to-[#edf4fc] p-8 text-center sm:p-10">
          <div className="mb-4 text-4xl">🛍️</div>

          <h2 className="mb-3 font-serif text-[1.8rem] text-[#3d3456]">
            See Everything in Our Etsy Shop
          </h2>

          <p className="mx-auto mb-6 max-w-md leading-7 text-[#9e8aa0]">
            Browse the full collection of printable mindfulness cards,
            affirmation posters, breathing exercise decks, and family activity
            resources.
          </p>

          <a
            href={ETSY_SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#5c5470] px-7 py-3.5 text-white transition-colors hover:bg-[#4a4360]"
          >
            <ShoppingBag size={16} />
            Visit Our Etsy Shop
          </a>
        </div>
      </div>
    </div>
  );
}