import { useMemo, useState } from 'react';

import { CalendarWeek, DayHour } from '../types';
import { deepClone } from '../utils';

const initialState: CalendarWeek = {
  25: {
    12: true,
  },
  26: {
    12: true,
    20: true,
  },
  27: {
    5: true,
    12: true,
  },
  28: {
    12: true,
    15: true,
  },
  29: {
    12: true,
    17: true,
  },
  30: {
    8: true,
    12: true,
  },
  31: {
    12: true,
  },
};

export const useCalendar = () => {
  const [week, setWeek] = useState(initialState);
  const [selectedCell, setSelectedCell] = useState<DayHour>();

  const addEvent = ([day, hour]: DayHour) => {
    const clonedWeek = deepClone(week);
    clonedWeek[day][hour] = true;

    setWeek(clonedWeek);
  };

  const deleteEvent = ([day, hour]: DayHour) => {
    const clonedWeek = deepClone(week);
    delete clonedWeek[day][hour];

    setWeek(clonedWeek);
    setSelectedCell(undefined);
  };

  const selectCell = (dayHour: DayHour) => {
    setSelectedCell(dayHour);
  };

  const canRemoveEvent = useMemo(() => {
    if (!selectedCell) {
      return false;
    }

    const [day, hour] = selectedCell;

    return Boolean(week[day][hour]);
  }, [selectedCell, week]);

  return {
    week,
    selectedCell,
    canRemoveEvent,
    addEvent,
    deleteEvent,
    selectCell,
  };
};
