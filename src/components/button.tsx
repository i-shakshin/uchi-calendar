import { ReactNode } from 'react';

import { BaseButton, IBaseButton } from './base-button';

interface IProps extends IBaseButton {
  icon?: ReactNode;
}

export const Button = ({ icon, children, ...props }: IProps) => {
  return <BaseButton {...props}>{icon || children}</BaseButton>;
};
