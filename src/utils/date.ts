import { format, subWeeks } from 'date-fns';

export const getOneWeekAgoDate = () => subWeeks(new Date(), 1);
export const formatApiDate = (date: Date) => format(date, 'yyyy-MM-dd');

export const calculateStartEndDate = (weekOffset: number = 0) => {
  const today = new Date();

  const end = new Date(today);
  end.setDate(end.getDate() - 7 * weekOffset);

  const start = new Date(end);
  start.setDate(end.getDate() - 6);

  return {
    startDate: formatApiDate(start),
    endDate: formatApiDate(end),
  };
};
