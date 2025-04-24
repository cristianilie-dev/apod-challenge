import LazyImage from "@/components/ui/LazyImage";

type ApodDetailViewProps = {
  hdurl: string;
  title: string;
  date: string;
  explanation: string;
};

export function ApodDetailView({ hdurl, title, date, explanation }: ApodDetailViewProps) {
  return (
    <>
      <div className="max-w-3xl mx-auto p-4">
        <div className="card bg-base-100 shadow-xl mb-6">

          <LazyImage
            src={hdurl}
            alt={title}
            imageClassName="object-cover w-full rounded-t-lg"
          />

          <div className="card-body justify-end text-white bg-opacity-60 bg-black rounded-b-lg">
            <h2 className="card-title text-3xl">{title}</h2>
            <p className="opacity-80">{date}</p>
          </div>
        </div>

        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <h3 className="text-xs uppercase font-semibold opacity-60">Details</h3>
          <p>{explanation}</p>
        </div>
      </div>
    </>
  );
}
