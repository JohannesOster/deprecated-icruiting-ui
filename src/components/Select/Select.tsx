import React from 'react';
import {Container, Label, Description, Errors, BaseSelect} from './Select.sc';
import {SelectProps} from './types';

export const Select: React.FC<SelectProps> = ({
  label,
  description,
  options,
  errors = [],
  ...props
}) => {
  const _errors = errors.map((error, idx) => <span key={idx}>• {error}</span>);

  return (
    <Container>
      <Label htmlFor={props.name} error={!!errors.length}>
        {label}
        {props.required && '*'}
      </Label>
      <Description error={!!errors.length}>{description}</Description>
      <BaseSelect {...props}>
        {options.map(({label, value}, idx) => {
          return (
            <option key={idx} value={value}>
              {label}
            </option>
          );
        })}
      </BaseSelect>
      <Errors>{_errors}</Errors>
    </Container>
  );
};
