export type ButtonKind = 'primary';

export interface BaseButtonProps {
  isLoading?: boolean;
  kind?: ButtonKind;
  disabled?: boolean;
}

export interface ButtonProps extends BaseButtonProps {
  children?: string;
  url?: string;
}

export interface LoadingSpinnerProps {
  kind?: ButtonKind;
  disabled?: boolean;
}
