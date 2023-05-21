import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const Layout = ({ children }: PropsWithChildren) => {
  return <SWrapper>{children}</SWrapper>;
};

const SWrapper = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 740px;
  margin: 0 auto;
`;
