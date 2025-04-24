
type BackButtonProps = {
  onClick: () => void;
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      className="btn btn-ghost text-sm flex items-center gap-2"
      onClick={onClick}
    >
      <span className="text-lg">←</span>
      Back
    </button>
  );
}
