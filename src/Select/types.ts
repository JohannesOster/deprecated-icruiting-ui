export interface SelectProps {
  name?: string;
  label?: string;
  autoFocus?: boolean;
  description?: string;
  required?: boolean;
  errors?: Array<string>;
  options: Array<{label: string; value: string}>;
}

export interface BaseSelectProps {
  error: boolean;
}

export interface LabelProps {
  error: boolean;
}

export interface DescriptionProps {
  error: boolean;
}
