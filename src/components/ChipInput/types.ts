import {FocusEvent} from 'react';

export enum EKeyCode {
  ENTER = 13,
  BACKSPACE = 8,
}

export interface ChipInputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  autoFocus?: boolean;
  description?: string;
  required?: boolean;
  errors?: string[];
  value?: string[];
  defaultValue?: string[];
  readOnly?: boolean;
  onBlur?(event: FocusEvent<HTMLInputElement>): void;
  onFocus?(event: FocusEvent<HTMLInputElement>): void;
  onChange?(value: string[]): void;
}

export interface ChipContainerProps {
  error: boolean;
}

export interface BaseChipInpusProps {
  error: boolean;
}

export interface LabelProps {
  error: boolean;
}

export interface DescriptionProps {
  error: boolean;
}
