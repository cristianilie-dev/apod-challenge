import { format, subWeeks } from 'date-fns';

export const getOneWeekAgoDate = () => subWeeks(new Date(), 1);
export const formatApiDate = (date: Date) => format(date, 'yyyy-MM-dd')