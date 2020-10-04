import React, {FC, MouseEvent, useState} from 'react';
import {
  Container,
  Label,
  Description,
  Errors,
  BaseInput,
  SelectContainer,
  CurrentValueContainer,
  OptionsContainer,
  OptionsList,
} from './AdvancedSelect.sc';
import {AdvancedSelectProps} from './types';

export const AdvancedSelect: FC<AdvancedSelectProps> = ({
  label,
  description,
  options,
  errors = [],
  onChange,
  value,
  defaultValue,
  ...props
}) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [_value, setValue] = useState(
    value || defaultValue || options[0].value,
  );
  const _errors = errors.map((error, idx) => <span key={idx}>• {error}</span>);

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
      <SelectContainer>
        <BaseInput
          onClick={() => setSelectOpen((open) => !open)}
          onBlur={() => setSelectOpen(false)}
          error={!!errors.length}
          readOnly
          {...props}
        />
        <CurrentValueContainer error={!!errors.length}>
          {options.find(({value}) => value === _value)?.render()}
        </CurrentValueContainer>
        <OptionsContainer style={{display: selectOpen ? 'block' : 'none'}}>
          <OptionsList>
            {options.map(({render, value}, idx) => (
              <li
                key={idx}
                onMouseDown={(event: MouseEvent<HTMLLIElement>) => {
                  event?.preventDefault();

                  setValue(value);
                  onChange && onChange(value);
                  setSelectOpen(false);
                }}
              >
                {render()}
              </li>
            ))}
          </OptionsList>
        </OptionsContainer>
      </SelectContainer>
      {errors && <Errors>{_errors}</Errors>}
    </Container>
  );
};
