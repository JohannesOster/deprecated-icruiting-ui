export type InputType =
  | 'file'
  | 'text'
  | 'color'
  | 'tel'
  | 'url'
  | 'number'
  | 'email'
  | 'password'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'time';

export interface InputProps {
  name?: string;
  type?: InputType;
  label?: string;
  placeholder?: string;
  autoFocus?: boolean;
  description?: string;
  required?: boolean;
  errors?: Array<string>;
}

export interface BaseInputProps {
  error: boolean;
  type?: InputType;
}

export interface LabelProps {
  error: boolean;
}

export interface DescriptionProps {
  error: boolean;
}
