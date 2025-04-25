import LazyImage from '@/components/ui/LazyImage';

type ApodDetailViewProps = {
  url?: string;
  title: string;
  date: string;
  explanation: string;
};

export function ApodDetailView({
  url,
  title,
  date,
  explanation,
}: ApodDetailViewProps) {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="relative mb-6">
        <div className="absolute inset-0 -z-10 rounded-xl blur-2xl bg-white/10"></div>

        <div className="card bg-base-100 shadow-xl">
          {url && (
            <LazyImage
              src={url}
              alt={title}
              imageClassName="object-cover w-full rounded-t-lg"
            />
          )}

          <div
            className={`card-body justify-end text-white bg-opacity-60 ${url ? 'rounded-b-lg' : 'rounded'
              }`}
          >
            <h2 className="card-title text-xl sm:text-3xl">{title}</h2>
            <p className="text-xs sm:text-sm opacity-80">{date}</p>
          </div>
        </div>
      </div>

      <div className="prose prose-xs sm:prose-sm lg:prose max-w-none text-white">
        <h3 className="text-[0.6rem] sm:text-xs uppercase font-semibold opacity-60">
          Details
        </h3>
        <p>{explanation}</p>
      </div>
    </div>
  );
}
