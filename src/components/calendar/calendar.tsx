import { CalendarWeek, DayHour } from '../../types';
import { Button } from '../button';
import { DayItem, DayList, Table, Toolbar } from './components';
import { DAYS_SYMBOLS } from './constants';

interface IProps {
  week: CalendarWeek;
  canRemoveEvent: boolean;
  deleteEvent: (dayHour: DayHour) => void;
  selectCell: (dayHour: DayHour) => void;
  selectedCell?: DayHour;
}

export const Calendar = ({
  week,
  selectCell,
  selectedCell,
  canRemoveEvent,
  deleteEvent,
}: IProps) => {
  const dayItems: DayItem[] = Object.keys(week).map((dayDigit, index) => [
    DAYS_SYMBOLS[index],
    dayDigit,
  ]);

  return (
    <>
      <DayList dayItems={dayItems} selectedDayDigit={29} />
      <Table week={week} selectCell={selectCell} selectedCell={selectedCell} />
      <Toolbar>
        <Button>Today</Button>
        {canRemoveEvent && selectedCell && (
          <Button onClick={() => deleteEvent(selectedCell)}>Delete</Button>
        )}
      </Toolbar>
    </>
  );
};
