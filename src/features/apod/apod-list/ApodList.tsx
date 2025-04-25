import { useNavigate } from '@tanstack/react-router';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/state/store';
import type { ApodItem } from '@/types/Apod';
import ClearDateButton from '@/components/buttons/ClearDateButton';
import DatePicker from '@/components/date-pickers/DatePicker';
import PictureItem from '@/components/list-items/picture-item/PictureItem';
import PictureList from '@/components/lists/picture-list/PictureList';
import PictureListPlaceholder from '@/components/lists/picture-list/PictureListPlaceholder';
import { useApodList } from '@/hooks/apod/useApodList';
import {
  clearSelectedDate,
  decrementWeekOffset,
  incrementWeekOffset,
  setSelectedApod,
  setSelectedDate,
} from '@/state/apod/apodSlice';
import { formatApiDate } from '@/utils/date';
import ApodListPagination from './ApodListPagination';
import { ApodListDatePicker } from './ApodListDatePicker';

export default function ApodList() {
  // State & Hooks
  const { data, isFetching, weekOffset, isDateSelected } = useApodList();
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
