import { useParams } from '@tanstack/react-router';
import { first } from 'lodash';
import { useSelector } from 'react-redux';
import type { ApodItem } from '@/types/Apod';
import type { RootState } from '@/state/store';
import { useGetApodQuery } from '@/state/apod/apodApiSlice';

type UseApodDetailsType = {
  currentApod: ApodItem | undefined;
  isFetching: boolean;
  isError: boolean;
};

export function useApodDetails(): UseApodDetailsType {
  const selectedApod = useSelector(
    (state: RootState) => state.apod.selectedApod,
  );

  // Only fetch if we don't have it in the store
  const { date: paramDate } = useParams({ from: '/apod/$date' });
  const {
    data: fetchedApod,
    isFetching,
    isError,
  } = useGetApodQuery(
    { date: paramDate },
    {
      skip: !!selectedApod,
    },
  );
  const currentApod = selectedApod ?? first(fetchedApod);

  return {
    currentApod,
    isFetching,
    isError,
  };
}
