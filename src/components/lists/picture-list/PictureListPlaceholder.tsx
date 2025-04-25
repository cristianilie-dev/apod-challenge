import PictureList from './PictureList';
import PictureItemSkeleton from '@/components/list-items/picture-item/PictureItemPlaceholder';

type PictureListPlaceholder = {
  length?: number;
};

export default function PictureListPlaceholder({
  length = 7,
}: PictureListPlaceholder) {
  return (
    <PictureList>
      {Array.from({ length }).map((_, i) => (
        <PictureItemSkeleton key={i} />
      ))}
    </PictureList>
  );
}
