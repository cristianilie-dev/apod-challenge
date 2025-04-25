import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import ApodList from '@/features/apod/apod-list/ApodList';

export const Route = createFileRoute('/apod/')({
  component: ApodComponent,
  validateSearch: z.object({
    date: z.string().optional(),
    week_offset: z.number().optional(),
  }),
});

function ApodComponent() {
  return (
    <div className="mx-2 sm:mx-auto sm:max-w-3xl pt-8">
      <h1 className="text-xl sm:text-2xl font-bold mb-2 text-center">
        Astronomy Picture of the Day
      </h1>
      <p className="mb-4 text-xs sm:text-sm opacity-70 text-center">
        Discover the wonders of the universe through stunning space imagery,
        updated daily.
      </p>

      <ApodList />
    </div>
  );
}
