export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#fdf0f5] text-3xl animate-pulse">
          🌸
        </div>

        <h2 className="font-serif text-[1.5rem] text-[#3d3456]">
          Loading gently...
        </h2>

        <p className="mt-2 text-sm text-[#9e8aa0]">
          Preparing your mindful space.
        </p>
      </div>
    </div>
  );
}