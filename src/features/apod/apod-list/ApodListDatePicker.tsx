import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@/state/store';
import ClearDateButton from '@/components/buttons/ClearDateButton';
import DatePicker from '@/components/date-pickers/DatePicker';
import { clearSelectedDate, setSelectedDate } from '@/state/apod/apodSlice';
import { formatApiDate } from '@/utils/date';

export function ApodListDatePicker() {
  const selectedDateStr = useSelector(
    (state: RootState) => state.apod.selectedDate,
  );
  const selectedDateObj = useMemo(
    () => (selectedDateStr ? new Date(selectedDateStr) : undefined),
    [selectedDateStr],
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleDateChange = (date?: Date) => {
    if (!date) return;
    const formattedDate = formatApiDate(date);
    dispatch(setSelectedDate(formattedDate));
  };

  const handleClearDate = () => {
    dispatch(clearSelectedDate());
  };

  return (
    <div className="flex justify-center items-center gap-2 py-4">
      <DatePicker date={selectedDateObj} onDateChange={handleDateChange} />

      {selectedDateObj && <ClearDateButton onClick={handleClearDate} />}
    </div>
  );
}
