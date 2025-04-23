import PictureItem, { type PictureItemData } from "@/components/ListItems/PictureItem";
import PictureList from "@/components/Lists/PictureList";
import { useGetApodQuery } from "@/state/apod/apodApiSlice"
import { setSelectedApod } from "@/state/apod/apodSlice";
import type { AppDispatch } from "@/state/store";
import type { ApodItem } from "@/types/Apod";
import { formatApiDate, getOneWeekAgoDate } from "@/utils/date";
import { useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

function HomeApodList() {
  const formattedDate = useMemo(() => formatApiDate(getOneWeekAgoDate()), [])
  const { data: apodData, isLoading } = useGetApodQuery({ start_date: formattedDate })
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()


  const handleClick = (item: ApodItem) => {
    dispatch(setSelectedApod(item))
    navigate({ to: `/apod/$date`, params: { date: item.date } })
  }

  if (isLoading) return <div>Loading...</div>
  if (!apodData?.length) return <div>No data available</div>

  return <>
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
  </>
}

export default HomeApodList
