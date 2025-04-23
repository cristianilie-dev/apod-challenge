import { useCanGoBack, useRouter } from "@tanstack/react-router";

export function BackButton() {
  const router = useRouter()
  const canGoBack = useCanGoBack()

  const handleOnClick = () => {
    if (canGoBack)
      router.history.back()
    else
      router.navigate({ to: '/apod' })
  }

  return (
    <button
      className="btn btn-ghost text-sm flex items-center gap-2"
      onClick={handleOnClick}
    >
      <span className="text-lg">←</span>
      Back
    </button>
  );
}
