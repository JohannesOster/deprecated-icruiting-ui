import styled, {css, DefaultTheme} from 'styled-components';
import {ButtonKind, BaseButtonProps, LoadingSpinnerProps} from './types';

export const BaseButton = styled.button<BaseButtonProps>`
  margin: 0;
  display: inline-flex;
  flex-direction: ${({loading}) => (loading ? 'column' : 'row')};
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  padding-top: ${({theme}) => theme.spacing.scale200};
  padding-bottom: ${({theme}) => theme.spacing.scale200};
  padding-left: ${({theme}) => theme.spacing.scale300};
  padding-right: ${({theme}) => theme.spacing.scale300};

  border: none;
  border-radius: ${({theme}) => theme.borders.radius};

  ${({theme}) => theme.typography.font200}

  transition-property: background-color;
  transition-duration: ${({theme}) => theme.animation.timing100};
  transition-timing-function: ${({theme}) => theme.animation.linearCurve};

  &:disabled {
    cursor: not-allowed;
    background: ${({theme}) => theme.colors.buttonPrimaryDisabledFill};
    color: ${({theme}) => theme.colors.buttonPrimaryDisabledText};
  }

  ${({loading}) =>
    loading &&
    css`
      pointer-events: none;
    `}

  ${({theme, kind, disabled}) => getButtonStylesForKind(theme, kind, disabled)};
`;

export const LoadingSpinnerContainer = styled.div`
  position: static;
  line-height: 0;
  margin: 2px 0px; // to move spinner to center;
`;

const getButtonStylesForKind = (
  theme?: DefaultTheme,
  kind: ButtonKind = 'primary',
  disabled?: boolean,
) => {
  if (disabled) return;

  switch (kind) {
    case 'primary':
      return css`
        background-color: ${theme.colors.buttonPrimaryFill};
        color: ${theme.colors.buttonPrimaryText};

        &:hover {
          background-color: ${theme.colors.buttonPrimaryFillHover};
        }
      `;
  }
};

const getLoadingSpinnerStylesForKind = (
  theme?: DefaultTheme,
  kind: ButtonKind = 'primary',
  disabled?: boolean,
) => {
  if (disabled) {
    return css`
      border-color: ${theme.colors.buttonLoadingSpinnerDisabledBackground};
      border-top-color: ${theme.colors.buttonLoadingSpinnerDisabledForeground};
    `;
  }

  switch (kind) {
    case 'primary':
      return css`
        border-color: ${theme.colors.buttonLoadingSpinnerBackground};
        border-top-color: ${theme.colors.buttonLoadingSpinnerForeground};
      `;
  }
};
