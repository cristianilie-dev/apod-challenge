import { useMemo, useState } from 'react';
import { DayPicker } from 'react-day-picker';

type DatePickerProps = {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
};

export default function DatePicker({ date, onDateChange }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const today = useMemo(() => new Date(), []);

  return (
    <>
      <button
        popoverTarget="rdp-popover"
        className="input input-border text-sm sm:text-base"
        style={{ anchorName: '--rdp' } as React.CSSProperties}
        onClick={() => setIsOpen(true)}
      >
        {date ? date.toLocaleDateString() : 'Pick a date'}
      </button>

      {isOpen && (
        <div
          popover="auto"
          id="rdp-popover"
          className="dropdown"
          style={{ positionAnchor: '--rdp' } as React.CSSProperties}
        >
          <DayPicker
            className="react-day-picker"
            mode="single"
            selected={date}
            hidden={{ after: today }}
            onSelect={(newDate) => {
              setIsOpen(false);
              onDateChange?.(newDate);
            }}
            endMonth={today}
          />
        </div>
      )}
    </>
  );
}
