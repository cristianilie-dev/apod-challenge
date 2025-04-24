import PictureItemSkeleton from "@/components/list-items/picture-item/PictureItemPlaceholder";
import PictureList from "./PictureList";

type PictureListPlaceholder = {
  length?: number
}

export default function PictureListPlaceholder({ length = 5 }: PictureListPlaceholder) {
  return (
    <PictureList>
      {Array.from({ length }).map((_, i) => (
        <PictureItemSkeleton key={i} />
      ))}
    </PictureList>
  )
}
