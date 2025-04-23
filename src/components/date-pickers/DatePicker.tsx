import { DayPicker } from "react-day-picker";

type DatePickerProps = {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
};

export default function DatePicker({ date, onDateChange }: DatePickerProps) {
  return (
    <>
      <button popoverTarget="rdp-popover" className="input input-border" style={{ anchorName: "--rdp" } as React.CSSProperties}>
        {date ? date.toLocaleDateString() : "Pick a date"}
      </button>
      <div popover="auto" id="rdp-popover" className="dropdown" style={{ positionAnchor: "--rdp" } as React.CSSProperties}>
        <DayPicker className="react-day-picker" mode="single" selected={date} onSelect={(date) => onDateChange?.(date)} />
      </div>
    </>
  );
}
