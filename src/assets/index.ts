import styled, { css } from 'styled-components';

import { ReactComponent as Chevron } from './chevron.svg';
import { ReactComponent as Plus } from './plus.svg';

export const SPlusButton = styled(Plus)`
  fill: ${(props) => props.theme.colors.primary};
`;

export const SChevron = styled(Chevron)<{ $isReversed?: boolean }>`
  fill: ${(props) => props.theme.colors.primary};
  width: 32px;
  height: 32px;
  ${(props) =>
    props.$isReversed &&
    css`
      transform: rotateY(180deg);
    `}
`;
