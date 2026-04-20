export default function BlogPostLoading() {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-6 h-5 w-28 animate-pulse rounded bg-[#f4eff7]" />

        <div className="mb-4 flex gap-3">
          <div className="h-6 w-20 animate-pulse rounded-full bg-[#f4eff7]" />
          <div className="h-6 w-20 animate-pulse rounded-full bg-[#f7f1f5]" />
          <div className="h-6 w-24 animate-pulse rounded-full bg-[#f7f1f5]" />
        </div>

        <div className="mb-5 h-12 w-4/5 animate-pulse rounded-xl bg-[#f4eff7]" />
        <div className="mb-8 h-16 w-full animate-pulse rounded-xl bg-[#f7f1f5]" />
        <div className="mb-10 h-64 w-full animate-pulse rounded-2xl bg-[#f7f1f5] sm:h-80" />

        <div className="space-y-4">
          <div className="h-5 w-full animate-pulse rounded bg-[#f7f1f5]" />
          <div className="h-5 w-11/12 animate-pulse rounded bg-[#f7f1f5]" />
          <div className="h-5 w-4/5 animate-pulse rounded bg-[#f7f1f5]" />
          <div className="h-5 w-full animate-pulse rounded bg-[#f7f1f5]" />
          <div className="h-5 w-10/12 animate-pulse rounded bg-[#f7f1f5]" />
        </div>
      </div>
    </div>
  );
}