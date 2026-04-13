import { ShoppingBag } from "lucide-react";
import type { Product } from "@/app/data/products";
import { productColors } from "@/app/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const colors = productColors[product.color];

  return (
    <div className="flex flex-col rounded-2xl border border-[#f0e6ee] bg-white p-6 transition-shadow duration-300 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div className="text-3xl">{product.emoji}</div>

        <span className="rounded-full px-2.5 py-1 text-xs bg-[#f4eff7] text-[#9e8aa0]">
          {product.audience}
        </span>
      </div>

      <h3 className="mb-2 font-serif text-[1.05rem] leading-snug text-[#3d3456]">
        {product.name}
      </h3>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-[#9e8aa0]">
        {product.description}
      </p>

      <div className="mt-auto flex items-center justify-between">
        <span className="text-lg font-serif text-[#5c5470]">
          {product.price}
        </span>

        <a
          href={product.etsyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm transition-colors ${colors}`}
        >
          <ShoppingBag size={13} />
          Buy
        </a>
      </div>
    </div>
  );
}