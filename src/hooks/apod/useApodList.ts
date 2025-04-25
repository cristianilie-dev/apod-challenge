import { useSearch } from '@tanstack/react-router';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/state/store';
import type { ApodItem } from '@/types/Apod';
import { calculateStartEndDate, formatApiDate } from '@/utils/date';
import { useGetApodQuery } from '@/state/apod/apodApiSlice';

type UseApodListReturnType = {
  data: Array<ApodItem> | undefined;
  isFetching: boolean;
  weekOffset: number;
  isDateSelected: boolean;
};

export const useApodList = (): UseApodListReturnType => {
  const selectedDateStr = useSelector(
    (state: RootState) => state.apod.selectedDate,
  );
  const weekOffset = useSelector((state: RootState) => state.apod.weekOffset);

  // Set startDate and endDate using weekOffset
  const { startDate, endDate } = useMemo(
    () => calculateStartEndDate(weekOffset),
    [weekOffset],
  );

  // Format the APOD API call params
  const formattedApodParams = useMemo(
    () =>
      selectedDateStr
        ? { date: selectedDateStr }
        : { start_date: startDate, end_date: endDate },
    [selectedDateStr, startDate, endDate],
  );

  const { data, isFetching } = useGetApodQuery(formattedApodParams);
  const formattedData = useMemo(() => data?.slice().reverse(), [data]);

  return {
    data: formattedData,
    isFetching,
    weekOffset,
    isDateSelected: !!selectedDateStr,
  };
};
