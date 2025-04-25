import {
  createFileRoute,
} from '@tanstack/react-router';
import ApodDetailView from '@/features/apod/apod-details/ApodDetailView';

export const Route = createFileRoute('/apod/$date')({
  component: ApodDateComponent,
});

export function ApodDateComponent() {
  return (
    <ApodDetailView />
  );
}
