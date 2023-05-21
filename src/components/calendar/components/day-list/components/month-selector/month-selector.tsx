import styled from 'styled-components';

import { SChevron } from '../../../../../../assets';

export const MonthSelector = () => {
  return (
    <SWrapper>
      <SChevron $isReversed />
      <span>March 2019</span>
      <SChevron />
    </SWrapper>
  );
};

const SWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
