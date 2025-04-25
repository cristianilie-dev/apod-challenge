type PaginationButtonProps = {
  label?: string;
  onClick: () => void;
  disabled: boolean;
  children?: React.ReactNode;
};

export function PaginationButton({ label, onClick, disabled, children }: PaginationButtonProps) {
  return (
    <button
      className="btn text-sm sm:text-base"
      onClick={onClick}
      disabled={disabled}
    >
      {children || label}
    </button>
  );
}
