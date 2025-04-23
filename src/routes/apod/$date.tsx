import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/apod/$date')({
  component: RouteComponent,
})

import { useSelector } from 'react-redux';
import type { RootState } from '@/state/store';
import { ApodDetailView } from '@/features/apod/ApodDetailView';
import { useGetApodByDateQuery } from '@/state/apod/apodApiSlice';

export function RouteComponent() {
  const selectedApod = useSelector((state: RootState) => state.apod.selectedApod);

  // Only fetch if we don't have it in the store
  const { date: paramDate } = useParams({ from: '/apod/$date' });
  const { data: fetchedApod, isLoading, isError } = useGetApodByDateQuery({ date: paramDate }, {
    skip: !!selectedApod,
  });

  const currentApod = selectedApod ?? fetchedApod;

  if (isLoading) return <div className="flex items-center justify-center min-h-[100dvh] min-w-[100dvw] px-4 text-center">
    <div>Loading...</div>
  </div>;
  if (!currentApod || isError) return <div>No data available</div>;

  const { date, explanation, title, hdurl } = currentApod

  return (
    <ApodDetailView
      title={title}
      date={date}
      explanation={explanation}
      hdurl={hdurl}
    />
  );
}
