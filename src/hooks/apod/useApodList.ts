import { useSearch } from '@tanstack/react-router';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/state/store';
import type { ApodItem } from '@/types/Apod';
import { formatApiDate, getOneWeekAgoDate } from '@/utils/date';
import { useGetApodQuery } from '@/state/apod/apodApiSlice';

type UseApodListReturnType = {
  data: Array<ApodItem> | undefined;
  isFetching: boolean;
  currentDate: Date | undefined;
  queryDate: string | undefined;
};

export const useApodList = (): UseApodListReturnType => {
  const { date: queryDate } = useSearch({ from: '/apod/' });
  const selectedDateStr = useSelector(
    (state: RootState) => state.apod.selectedDate,
  );

  // Convert currentDate to object
  const currentDateStr = selectedDateStr ?? queryDate;
  const currentDate = useMemo(
    () => (currentDateStr ? new Date(currentDateStr) : undefined),
    [currentDateStr],
  );

  // Format the APOD API call params
  const formattedApodParams = useMemo(
    () =>
      currentDateStr
        ? { date: currentDateStr }
        : { start_date: formatApiDate(getOneWeekAgoDate()) },
    [currentDateStr],
  );

  const { data, isFetching } = useGetApodQuery(formattedApodParams);

  return {
    data,
    isFetching,
    currentDate,
    queryDate,
  };
};
