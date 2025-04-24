
type ClearDateButtonProps = {
  onClick: () => void;
}

export default function ClearDateButton({ onClick }: ClearDateButtonProps) {
  return (
    <button
      className="btn btn-outline btn-sm border-base-content"
      onClick={onClick}
      aria-label="Clear selected date"
    >
      ✕
    </button>
  )
};