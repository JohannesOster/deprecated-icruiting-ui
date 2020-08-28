export interface RadioProps {
  name?: string;
  label?: string;
  placeholder?: string;
  autoFocus?: boolean;
  description?: string;
  required?: boolean;
  errors?: Array<string>;
  options: Array<{label: string; value: string}>;
}

export interface BaseInputProps {
  error: boolean;
}

export interface LabelProps {
  error: boolean;
}

export interface DescriptionProps {
  error: boolean;
}
