import { useNavigate } from '@tanstack/react-router';
import { useDispatch } from 'react-redux';
import ApodListPagination from './ApodListPagination';
import { ApodListDatePicker } from './ApodListDatePicker';
import type { AppDispatch } from '@/state/store';
import type { ApodItem } from '@/types/Apod';
import PictureItem from '@/components/list-items/picture-item/PictureItem';
import PictureList from '@/components/lists/picture-list/PictureList';
import PictureListPlaceholder from '@/components/lists/picture-list/PictureListPlaceholder';
import { useApodList } from '@/hooks/apod/useApodList';
import {
  decrementWeekOffset,
  incrementWeekOffset,
  setSelectedApod,
} from '@/state/apod/apodSlice';
import Error from '@/components/ui/Error';

export default function ApodList() {
  // State & Hooks
  const { data, isFetching, isError, weekOffset, isDateSelected } = useApodList();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // Events
  const handleClick = (item: ApodItem) => {
    dispatch(setSelectedApod(item));
    navigate({ to: `/apod/$date`, params: { date: item.date } });
  };

  const handlePrevWeek = () => dispatch(incrementWeekOffset());
  const handleNextWeek = () => dispatch(decrementWeekOffset());

  // Render
  if (isError) return <Error />;
  return (
    <>
      <ApodListDatePicker />

      {isFetching ? (
        <PictureListPlaceholder />
      ) : (
        <PictureList>
          {data?.map((item) => (
            <PictureItem
              key={item.date}
              title={item.title}
              imageSrc={
                item.media_type != 'image' ? item.thumbnail_url : item.url
              }
              date={item.date}
              onClick={() => handleClick(item)}
            />
          ))}
        </PictureList>
      )}

      {!isDateSelected && (
        <ApodListPagination
          onPrevClick={handlePrevWeek}
          prevButtonDisabled={isFetching}
          onNextClick={handleNextWeek}
          nextButtonDisabled={isFetching || weekOffset == 0}
        />
      )}
    </>
  );
}
