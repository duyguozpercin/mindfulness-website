import { ShoppingBag } from "lucide-react";

export type Product = {
  _id: string;
  name: string;
  slug: string;
  productType: "digital" | "physical";
  audience: string;
  description: string;
  price: string;
  etsyUrl: string;
  emoji: string;
  color: "pink" | "blue" | "green" | "yellow";
  sortOrder?: number;
};

const productColors: Record<Product["color"], string> = {
  pink: "bg-[#e9b7cc] hover:bg-[#de9fba] text-[#7d4f6b]",
  blue: "bg-[#b9d7f3] hover:bg-[#a4caed] text-[#4a7396]",
  green: "bg-[#bfe3bf] hover:bg-[#abd7ab] text-[#4a7a5a]",
  yellow: "bg-[#efd77a] hover:bg-[#e7cb5f] text-[#7a6228]",
};

export default function ProductCard({ product }: { product: Product }) {
  const colors = productColors[product.color];

  return (
    <div className="flex flex-col rounded-2xl border border-[#f0e6ee] bg-white p-6 transition-shadow duration-300 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div className="text-3xl">{product.emoji}</div>

        <span className="rounded-full bg-[#f4eff7] px-2.5 py-1 text-xs text-[#9e8aa0]">
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