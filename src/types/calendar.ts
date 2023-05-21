type CalendarDay = {
  [hour in number]: true;
};
export type CalendarWeek = Record<number, CalendarDay>;
export type DayHour = [number, number];
