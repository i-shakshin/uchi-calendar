import styled, { css } from 'styled-components';

import { MonthSelector } from './components';

export type DayItem = [string, string];

interface IProps {
  dayItems: DayItem[];
  selectedDayDigit: number;
}

export const DayList = ({ dayItems, selectedDayDigit }: IProps) => {
  return (
    <SWrapper>
      <SContentWrapper>
        <SList>
          {dayItems.map(([symbol, digit]) => (
            <SListItem key={digit}>
              <SDayItem>{symbol}</SDayItem>
              <SDayDigit isSelected={Number(digit) === selectedDayDigit}>
                {digit}
              </SDayDigit>
            </SListItem>
          ))}
        </SList>
        <MonthSelector />
      </SContentWrapper>
    </SWrapper>
  );
};

const SWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.colors.border};
  border-top: 2px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.secondary};
  margin: 0 auto;
  padding: 5px 30px;
  height: 90px;
  width: 100%;
`;

const SContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.theme.sizes.calendar.dayList}px;
  width: 100%;
`;

const SList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const SListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-weight: 400;
`;

const SDayItem = styled.span`
  font-size: 12px;
`;

const SDayDigit = styled.span<{ isSelected: boolean }>`
  ${(props) =>
    props.isSelected &&
    css`
      background: ${props.theme.colors.primary};
      border-radius: 50%;
      color: ${props.theme.colors.background};
    `}
  font-size: 16px;
  padding: 5px;
`;
