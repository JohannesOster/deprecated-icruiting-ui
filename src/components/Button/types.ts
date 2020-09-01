import {ReactNode, MouseEvent} from 'react';

export type ButtonKind = 'primary' | 'minimal';

export interface BaseButtonProps {
  isLoading?: boolean;
  kind?: ButtonKind;
  destructive?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface ButtonProps extends BaseButtonProps {
  children?: ReactNode;
}
