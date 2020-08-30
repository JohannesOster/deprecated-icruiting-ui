import {ReactNode, MouseEvent} from 'react';

export type ButtonKind = 'primary';

export interface BaseButtonProps {
  isLoading?: boolean;
  kind?: ButtonKind;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface ButtonProps extends BaseButtonProps {
  children?: ReactNode;
}
