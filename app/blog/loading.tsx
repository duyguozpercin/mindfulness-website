export default function BlogLoading() {
  return (
    <div className="py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 h-8 w-32 animate-pulse rounded-full bg-[#f4eff7]" />
          <div className="mx-auto h-10 w-72 animate-pulse rounded-xl bg-[#f4eff7]" />
          <div className="mx-auto mt-4 h-5 w-96 max-w-full animate-pulse rounded-lg bg-[#f7f1f5]" />
        </div>

        <div className="mb-10 flex flex-col gap-4 sm:flex-row">
          <div className="h-11 flex-1 animate-pulse rounded-full bg-[#f7f1f5]" />
          <div className="flex gap-2">
            <div className="h-10 w-24 animate-pulse rounded-full bg-[#f4eff7]" />
            <div className="h-10 w-24 animate-pulse rounded-full bg-[#f4eff7]" />
            <div className="h-10 w-24 animate-pulse rounded-full bg-[#f4eff7]" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-[#f0e6ee] bg-white"
            >
              <div className="h-48 animate-pulse bg-[#f7f1f5]" />
              <div className="p-5">
                <div className="mb-3 h-6 w-20 animate-pulse rounded-full bg-[#f4eff7]" />
                <div className="mb-3 h-5 w-3/4 animate-pulse rounded bg-[#f7f1f5]" />
                <div className="mb-2 h-4 w-full animate-pulse rounded bg-[#f7f1f5]" />
                <div className="h-4 w-5/6 animate-pulse rounded bg-[#f7f1f5]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}