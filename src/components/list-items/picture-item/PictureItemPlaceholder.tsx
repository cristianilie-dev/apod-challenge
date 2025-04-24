
export default function PictureItemSkeleton() {
  return (
    <li className="border-none">
      <div className="flex items-center gap-4 px-4 py-3 m-2 rounded-box cursor-wait animate-pulse">
        {/* Image placeholder */}
        <div className="w-12 h-12 rounded-box bg-base-300" />

        {/* Text placeholders */}
        <div className="flex flex-col gap-1">
          <div className="h-4 bg-base-300 rounded w-40" />
          <div className="h-3 bg-base-300 rounded w-24 opacity-60" />
        </div>
      </div>
    </li>
  );
}
