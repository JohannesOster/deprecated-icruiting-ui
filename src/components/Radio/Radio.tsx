import React, {forwardRef} from 'react';
import {
  Container,
  Label,
  Description,
  Errors,
  OptionContainer,
  OptionLabel,
} from './Radio.sc';
import {RadioProps} from './types';

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {label, description, options, errors = [], value, defaultValue, ...props},
    ref,
  ) => {
    const _errors = errors.map((error, idx) => (
      <span key={idx}>• {error}</span>
    ));

    return (
      <Container>
        {label && (
          <Label htmlFor={props.name} error={!!errors.length}>
            {label}
            {props.required && '*'}
          </Label>
        )}
        {description && (
          <Description error={!!errors.length}>{description}</Description>
        )}
        {options.map(({label, value: optionValue}, idx) => {
          const checked = optionValue === value || optionValue === defaultValue;
          return (
            <OptionContainer key={idx}>
              <input
                {...props}
                style={{margin: 0}}
                type="radio"
                value={optionValue}
                {...(checked ? {checked: true} : {})}
                ref={ref}
              />
              <OptionLabel>{label}</OptionLabel>
            </OptionContainer>
          );
        })}
        {!!errors.length && <Errors>{_errors}</Errors>}
      </Container>
    );
  },
);

Radio.displayName = 'Radio';

export {Radio};
