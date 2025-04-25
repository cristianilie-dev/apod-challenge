import { PaginationButton } from "@/components/buttons/PaginationButton";

type ApodPaginationProps = {
  onPrevClick: () => void;
  onNextClick: () => void;
  prevButtonDisabled: boolean;
  nextButtonDisabled: boolean;
}

export default function ApodListPagination({ onPrevClick, onNextClick, prevButtonDisabled, nextButtonDisabled }: ApodPaginationProps) {
  return (
    <div className="flex justify-center gap-4 py-4">
      <PaginationButton onClick={onPrevClick} disabled={prevButtonDisabled}>
        ← Previous Week
      </PaginationButton>

      <PaginationButton onClick={onNextClick} disabled={nextButtonDisabled}>
        Next Week →
      </PaginationButton>
    </div>
  )
}
