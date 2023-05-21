import styled, { css } from 'styled-components';

import { CalendarWeek, DayHour } from '../../../../types';
import { deepEqual } from '../../../../utils';
import { CELL_COLORS_MAP, CELL_STATE } from './constants';
import { formatTime } from './format-time';

interface IProps {
  week: CalendarWeek;
  selectCell: (dayHour: DayHour) => void;
  selectedCell?: DayHour;
}

const renderTable = (
  week: CalendarWeek,
  selectCell: (dayHour: DayHour) => void,
  selectedCell?: DayHour
) => {
  const result = [];

  for (let hour = 0; hour < 24; hour++) {
    const cells = [];
    cells.push(
      <SHeaderCell key={`hour-${hour}`} isFirstLine={hour === 0}>
        {formatTime(hour)}
      </SHeaderCell>
    );

    for (const dayDigit in week) {
      const day = week[dayDigit];
      const cellDayHour: DayHour = [Number(dayDigit), hour];

      let cellState = CELL_STATE.DEFAULT;

      if (day[hour]) {
        cellState = CELL_STATE.HAS_EVENT;
      }
      if (deepEqual(selectedCell, cellDayHour)) {
        cellState = CELL_STATE.SELECTED;
      }

      cells.push(
        <SCell
          key={`${dayDigit}-${hour}`}
          state={cellState}
          onClick={() => selectCell(cellDayHour)}
          withoutBottomBorder={hour === 23}
        />
      );
    }

    const row = <STableRow key={hour}>{cells}</STableRow>;
    result.push(row);
  }

  return result;
};

export const Table = ({ week, selectCell, selectedCell }: IProps) => {
  return (
    <STable>
      <STBody>{renderTable(week, selectCell, selectedCell)}</STBody>
    </STable>
  );
};
const STable = styled.table`
  border-spacing: 0;
  width: 100%;
  overflow-y: scroll;
  flex: 1;
  display: block;
`;

const STBody = styled.tbody`
  width: 100%;
  display: inline-table;
`;

const STableRow = styled.tr`
  height: 45px;
`;

const SHeaderCell = styled.th<{ isFirstLine: boolean }>`
  transform: translateY(${(props) => (props.isFirstLine ? '-25%' : '-50%')});
  width: 65px;
  color: ${(props) => props.theme.colors.calendar.text};
`;

const SCell = styled.td<{
  state: CELL_STATE;
  withoutBottomBorder: boolean;
}>`
  position: relative;
  border: 2px solid ${(props) => props.theme.colors.border};
  ${(props) =>
    props.withoutBottomBorder &&
    css`
      border-bottom: none;
    `}
  border-left: none;
  border-top: none;
  width: 100px
  background-color: ${(props) => CELL_COLORS_MAP[props.state]};

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background-color: ${(props) => CELL_COLORS_MAP[props.state]};
  }
`;
