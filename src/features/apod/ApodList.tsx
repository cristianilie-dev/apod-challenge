import ClearDateButton from "@/components/buttons/ClearDateButton";
import DatePicker from "@/components/date-pickers/DatePicker";
import PictureItem from "@/components/list-items/picture-item/PictureItem";
import PictureList from "@/components/lists/picture-list/PictureList";
import PictureListPlaceholder from "@/components/lists/picture-list/PictureListPlaceholder";
import { useGetApodQuery } from "@/state/apod/apodApiSlice"
import { clearSelectedDate, setSelectedApod, setSelectedDate } from "@/state/apod/apodSlice";
import type { AppDispatch, RootState } from "@/state/store";
import type { ApodItem } from "@/types/Apod";
import { formatApiDate, getOneWeekAgoDate } from "@/utils/date";
import { useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ApodList() {
  // State
  const selectedDate = useSelector((state: RootState) => state.apod.selectedDate);
  const formattedApodParams = useMemo(() =>
    selectedDate
      ? { date: selectedDate }
      : { start_date: formatApiDate(getOneWeekAgoDate()) }, [selectedDate])
  const { data: apodData, isFetching } = useGetApodQuery(formattedApodParams);

  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  // Events
  const handleClick = (item: ApodItem) => {
    dispatch(setSelectedApod(item))
    navigate({ to: `/apod/$date`, params: { date: item.date } })
  }

  const handleDateChange = (date?: Date) => {
    if (!date) return;
    const formattedDate = formatApiDate(date)
    dispatch(setSelectedDate(formattedDate))
  }
  const handleClearDate = () => dispatch(clearSelectedDate())

  // Render
  if (!apodData?.length) return <div>No data available</div>

  return <>
    <div className="flex justify-center items-center gap-2 py-4">
      <DatePicker
        date={selectedDate ? new Date(selectedDate) : undefined}
        onDateChange={handleDateChange}
      />

      {selectedDate && (
        <ClearDateButton onClick={handleClearDate} />
      )}
    </div>

    {isFetching ? (
      <PictureListPlaceholder />
    ) : (
      <PictureList>
        {/* TODO */}
        {apodData.slice().reverse().map((item) => (
          <PictureItem
            key={item.date}
            title={item.title}
            imageSrc={item.url}
            date={item.date}
            onClick={() => handleClick(item)}
          />
        ))}
      </PictureList>
    )}
  </>
}
