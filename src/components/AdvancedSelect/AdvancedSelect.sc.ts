import styled, {css} from 'styled-components';
import {
  LabelProps,
  DescriptionProps,
  BaseInputProps,
  CurrentValueContainerProps,
} from './types';

export const Container = styled.div`
  display: grid;
  grid-row-gap: ${({theme}) => theme.spacing.scale100};
`;

export const OptionsContainer = styled.div`
  display: none;
  position: absolute;
  top: ${({theme}) => `calc(100% + ${theme.spacing.scale100})`};
  left: 0;
  right: 0;
`;

export const SelectContainer = styled.div`
  display: grid;
  position: relative;
`;

export const CurrentValueContainer = styled.div<CurrentValueContainerProps>`
  grid-column: 1;
  grid-row: 1;
  padding: ${({theme}) => theme.spacing.scale200};
  display: flex;
  align-items: center;

  ${({theme}) => theme.typography.font100};

  ${({theme, error}) =>
    error &&
    css`
      background-color: ${theme.colors.inputFillErrorFocus};

      &:focus {
        background-color: ${theme.colors.inputFill};
      }
    `}
`;

export const OptionsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  box-shadow: 0 4px 16px hsla(0, 0%, 0%, 0.16);

  li {
    cursor: pointer;
    padding: ${({theme}) => theme.spacing.scale100};
    ${({theme}) => theme.typography.font100};

    transition-property: background-color;
    transition-duration: ${({theme}) => theme.animation.timing100};
    transition-timing-function: ${({theme}) => theme.animation.linearCurve};

    &:hover {
      background: ${({theme}) => theme.colors.inputBorder};
    }
  }
`;

export const BaseInput = styled.input<BaseInputProps>`
  cursor: pointer;

  border: 1px solid;
  border-color: ${({theme}) => theme.colors.inputBorder};
  border-radius: ${({theme}) => theme.borders.radius};

  background: transparent;
  padding: ${({theme}) => theme.spacing.scale200};
  ${({theme}) => theme.typography.font100};

  &:focus {
    outline: none !important;
    border-color: ${({theme}) => theme.colors.inputBorderFocus};
  }

  ${({theme, error}) =>
    error &&
    css`
      border-color: ${theme.colors.inputBorderError};

      &:focus {
        border-color: ${theme.colors.inputBorderError};
      }
    `}

  grid-column: 1;
  grid-row: 1;
  z-index: 100;

  background: url("data:image/svg+xml;utf8,<svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z' fill='%23545454' /></svg>");
  background-repeat: no-repeat;
  background-position: right ${({theme}) => theme.spacing.scale100} top 50%;
`;
export const Label = styled.label<LabelProps>`
  ${({theme}) => theme.typography.font200};
  color: ${({theme, error}) =>
    error
      ? theme.colors.typographyPrimaryError
      : theme.colors.typographyPrimary};
`;

export const Description = styled.span<DescriptionProps>`
  ${({theme}) => theme.typography.font100};
  color: ${({theme, error}) =>
    error
      ? theme.colors.typographySecondaryError
      : theme.colors.typographySecondary};
`;

export const Errors = styled.div`
  display: grid;
  grid-row-gap: ${({theme}) => theme.spacing.scale100};
  color: ${({theme}) => theme.colors.typographyPrimaryError};
  ${({theme}) => theme.typography.font100};
`;
