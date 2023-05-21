import styled from 'styled-components';

import { SPlusButton } from '../assets';
import { DayHour } from '../types';
import { testDateRegexp } from '../utils';
import { Button } from './button';

interface IProps {
  onAddEvent: (date: DayHour) => void;
}

export const Header = ({ onAddEvent }: IProps) => {
  const addEventHandler = () => {
    const userInput = window.prompt('Enter event time: YYYY-MM-DD HH:mm:ss');
    if (!userInput) {
      return;
    }
    const eventDayHour = testDateRegexp(userInput);
    if (!eventDayHour) {
      return;
    }

    onAddEvent(eventDayHour);
  };

  return (
    <SWrapper>
      <SHeading>Interview Calendar</SHeading>
      <Button icon={<SPlusButton />} onClick={addEventHandler} />
    </SWrapper>
  );
};

const SWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  color: ${(props) => props.theme.colors.header.text};
  height: 65px;
`;

const SHeading = styled.h1`
  font-size: 22px;
  font-weight: 400;
`;
