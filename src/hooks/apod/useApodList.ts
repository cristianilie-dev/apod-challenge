import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/state/store';
import type { ApodItem } from '@/types/Apod';
import { calculateStartEndDate } from '@/utils/date';
import { useGetApodQuery } from '@/state/apod/apodApiSlice';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';

type UseApodListReturnType = {
  data: Array<ApodItem> | undefined;
  isFetching: boolean;
  isError: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
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

  const { data, isError, isFetching, error } = useGetApodQuery(formattedApodParams);
  const formattedData = useMemo(() => data?.slice().reverse(), [data]);

  return {
    data: formattedData,
    isFetching,
    isError,
    error,
    weekOffset,
    isDateSelected: !!selectedDateStr,
  };
};
