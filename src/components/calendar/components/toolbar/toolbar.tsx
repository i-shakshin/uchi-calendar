import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const Toolbar = ({ children }: PropsWithChildren) => {
  return <SWrapper>{children}</SWrapper>;
};

const SWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  background: ${(props) => props.theme.colors.secondary};
  border-top: 2px solid ${(props) => props.theme.colors.border};
  height: 50px;
`;
