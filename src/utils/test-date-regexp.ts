import { DATE_FORMAT_REGEXP } from '../constants';
import { DayHour } from '../types';

export const testDateRegexp = (value: string): DayHour | undefined => {
  const dateMatchArray = value.match(DATE_FORMAT_REGEXP);
  if (!dateMatchArray) {
    return;
  }

  const [, , , day, hour] = dateMatchArray;

  return [Number(day), Number(hour)];
};
