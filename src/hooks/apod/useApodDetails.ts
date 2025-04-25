import { useParams } from '@tanstack/react-router';
import { first } from 'lodash';
import { useSelector } from 'react-redux';
import type { ApodItem } from '@/types/Apod';
import type { RootState } from '@/state/store';
import { useGetApodQuery } from '@/state/apod/apodApiSlice';
import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

type UseApodDetailsType = {
  currentApod: ApodItem | undefined;
  isFetching: boolean;
  isError: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
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
    error,
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
    error
  };
}
