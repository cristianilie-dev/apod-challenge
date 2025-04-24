
export default function ApodDetailSkeleton() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Back Button Placeholder */}
      <div className="mb-4">
        <div className="w-24 h-9 rounded-btn bg-base-300 animate-pulse flex items-center gap-2 px-3">
          <div className="w-4 h-4 bg-base-200 rounded" />
          <div className="w-12 h-3 bg-base-200 rounded" />
        </div>
      </div>

      {/* Card Placeholder */}
      <div className="card bg-base-100 shadow-xl mb-6 animate-pulse">
        {/* Responsive image placeholder */}
        <div className="aspect-[4/3] sm:aspect-[16/9] w-full max-h-[740px] overflow-hidden rounded-t-lg bg-base-300" />

        <div className="card-body justify-end bg-opacity-60 bg-black rounded-b-lg text-white">
          <div className="h-8 w-2/3 bg-base-300 rounded mb-2" />
          <div className="h-4 w-1/4 bg-base-300 rounded opacity-80" />
        </div>
      </div>

      {/* Text Placeholder */}
      <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
        <h3 className="text-xs uppercase font-semibold opacity-60 mb-2">Details</h3>
        <div className="space-y-2">
          <div className="h-4 bg-base-300 rounded w-full" />
          <div className="h-4 bg-base-300 rounded w-11/12" />
          <div className="h-4 bg-base-300 rounded w-10/12" />
          <div className="h-4 bg-base-300 rounded w-9/12" />
        </div>
      </div>
    </div>
  );
}
