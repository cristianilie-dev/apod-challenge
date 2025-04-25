import { Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-20 bg-[url('/images/background.png')] bg-cover bg-fixed bg-center" />

      <Outlet />
    </div>
  ),
});
