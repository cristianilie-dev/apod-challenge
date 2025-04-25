import {
  createFileRoute,
  useCanGoBack,
  useRouter,
} from '@tanstack/react-router';

import { ApodDetailView } from '@/features/apod/apod-details/ApodDetailView';
import ApodDetailSkeleton from '@/features/apod/apod-details/ApodDetailsViewPlaceholder';
import { BackButton } from '@/components/buttons/BackButton';
import { useApodDetails } from '@/hooks/apod/useApodDetails';

export const Route = createFileRoute('/apod/$date')({
  component: ApodDateComponent,
});

export function ApodDateComponent() {
  // State
  const router = useRouter();
  const canGoBack = useCanGoBack();
  const { currentApod, isError, isFetching } = useApodDetails();

  // Events
  const handleOnClick = () => {
    if (canGoBack) router.history.back();
    else router.navigate({ to: '/apod' });
  };

  // Render
  if (isFetching) return <ApodDetailSkeleton />;
  if (!currentApod || isError) return <div>No data available</div>;

  const { date, explanation, title, hdurl, thumbnail_url } = currentApod;

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 pt-4">
        <BackButton onClick={handleOnClick} />
      </div>

      <ApodDetailView
        title={title}
        date={date}
        explanation={explanation}
        url={hdurl || thumbnail_url}
      />
    </>
  );
}
