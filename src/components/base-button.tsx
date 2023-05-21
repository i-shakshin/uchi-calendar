import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

type ButtonSize = 'md' | 'lg';

export interface IBaseButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
}

const BUTTON_SIZE_MAP: Record<ButtonSize, number> = {
  md: 16,
  lg: 20,
};

export const BaseButton = ({
  size = 'md',
  children,
  ...props
}: IBaseButton) => {
  return (
    <SButtonWrapper fontSize={BUTTON_SIZE_MAP[size]} {...props}>
      {children}
    </SButtonWrapper>
  );
};

const SButtonWrapper = styled.button<{ fontSize: number }>`
  display: flex;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.fontSize}px;
  border: none;
  background: transparent;
  cursor: pointer;
`;
