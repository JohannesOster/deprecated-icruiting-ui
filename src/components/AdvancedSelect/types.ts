export type Option = {
  render: () => React.ReactNode;
  value: string;
};

export interface AdvancedSelectProps {
  name?: string;
  label?: string;
  autoFocus?: boolean;
  description?: string;
  required?: boolean;
  errors?: Array<string>;
  options: Array<Option>;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onChange?(value: string): void;
}

export interface BaseInputProps {
  error: boolean;
}

export interface CurrentValueContainerProps {
  error: boolean;
}

export interface LabelProps {
  error: boolean;
}

export interface DescriptionProps {
  error: boolean;
}
