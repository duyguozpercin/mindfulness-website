import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="mx-auto max-w-xl text-center">
        <div className="mb-4 text-5xl">🌸</div>

        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#c4a8c0]">
          404
        </p>

        <h1 className="mb-4 font-serif text-[clamp(2rem,4vw,2.8rem)] text-[#3d3456]">
          This page could not be found
        </h1>

        <p className="mb-8 leading-7 text-[#9e8aa0]">
          The page you are looking for may have moved, been removed, or never
          existed.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-[#5c5470] px-6 py-3 text-white transition-colors hover:bg-[#4a4360]"
          >
            Back to Home
          </Link>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-[#e0d0e8] bg-white px-6 py-3 text-[#5c5470] transition-colors hover:bg-[#fdf0f5]"
          >
            <ArrowLeft size={16} />
            Browse the Blog
          </Link>
        </div>
      </div>
    </div>
  );
}