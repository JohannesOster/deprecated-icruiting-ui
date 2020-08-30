import {ReactNode} from 'react';

export type ButtonKind = 'primary';

export interface BaseButtonProps {
  loading?: boolean;
  kind?: ButtonKind;
  disabled?: boolean;
}

export interface ButtonProps extends BaseButtonProps {
  children?: ReactNode;
}
