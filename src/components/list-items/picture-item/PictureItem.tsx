type PictureItemProps = {
  imageSrc?: string;
  title: string;
  date: string;
  onClick: (item: PictureItemData) => void;
};
export type PictureItemData = Omit<PictureItemProps, 'onClick'>;

export default function PictureItem({
  imageSrc,
  title,
  date,
  onClick,
}: PictureItemProps) {
  return (
    <li className="border-none">
      <div
        className="flex items-center gap-4 px-4 py-3 m-2 hover:bg-base-200 transition rounded-box text-left cursor-pointer"
        onClick={() => onClick({ imageSrc, title, date })}
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-12 h-12 rounded-box object-cover"
        />
        <div>
          <div className="font-semibold text-sm sm:text-base">{title}</div>
          <div className="text-[0.6rem] sm:text-xs uppercase font-semibold opacity-60">
            {date}
          </div>
        </div>
      </div>
    </li>
  );
}
