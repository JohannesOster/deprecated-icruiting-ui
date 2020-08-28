import React from 'react';
import {
  Container,
  Label,
  Description,
  Errors,
  OptionContainer,
  OptionLabel,
} from './Radio.sc';
import {RadioProps} from './types';

export const Radio: React.FC<RadioProps> = ({
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
      {options.map(({label, value}, idx) => {
        return (
          <OptionContainer key={idx}>
            <input style={{margin: 0}} type="radio" value={value} {...props} />
            <OptionLabel>{label}</OptionLabel>
          </OptionContainer>
        );
      })}
      <Errors>{_errors}</Errors>
    </Container>
  );
};
