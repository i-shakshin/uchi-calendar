import { theme } from '../../../../constants';

export const enum CELL_STATE {
  DEFAULT = 'DEFAULT',
  HAS_EVENT = 'HAS_EVENT',
  SELECTED = 'SELECTED',
}

export const CELL_COLORS_MAP: Record<CELL_STATE, string> = {
  [CELL_STATE.DEFAULT]: theme.colors.background,
  [CELL_STATE.HAS_EVENT]: theme.colors.calendar.eventCell,
  [CELL_STATE.SELECTED]: theme.colors.calendar.selectedCell,
};
