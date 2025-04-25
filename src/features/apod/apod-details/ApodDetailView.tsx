import {
  useCanGoBack,
  useRouter,
} from '@tanstack/react-router';

import { ImageDetailView } from '@/components/views/ImageDetailView';
import ApodDetailSkeleton from '@/features/apod/apod-details/ApodDetailsViewPlaceholder';
import { BackButton } from '@/components/buttons/BackButton';
import { useApodDetails } from '@/hooks/apod/useApodDetails';
import Error from '@/components/ui/Error';


export default function ApodDetailView() {
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
  if (!currentApod || isError) return <Error />;

  const { date, explanation, title, hdurl, thumbnail_url } = currentApod;

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 pt-4">
        <BackButton onClick={handleOnClick} />
      </div>

      <ImageDetailView
        title={title}
        date={date}
        explanation={explanation}
        url={hdurl || thumbnail_url}
      />
    </>
  );
}
