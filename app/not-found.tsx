import Link from "next/link";

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

        <p className="mb-8 text-[#9e8aa0]">
          The page you are looking for may have moved or does not exist.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#5c5470] px-6 py-3 text-white hover:bg-[#4a4360]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}