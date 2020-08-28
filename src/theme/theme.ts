import {colors} from './colors';
import {spacing} from './spacing';
import {typography} from './typography';
import {animation} from './animation';

export const theme = {
  colors: {
    primary: colors.black,

    // - button
    buttonPrimaryFill: colors.black,
    buttonPrimaryText: colors.white,
    buttonPrimaryFillHover: colors.gray700,
    buttonPrimaryDisabledFill: colors.gray50,
    buttonPrimaryDisabledText: colors.gray400,

    buttonLoadingSpinnerForeground: colors.white,
    buttonLoadingSpinnerBackground: colors.gray500,

    // - inputs
    inputBorder: colors.gray100,
    inputFill: colors.white,
    inputBorderFocus: colors.gray500,

    inputBorderError: colors.red400,
    inputFillErrorFocus: colors.red50,

    // - typography
    typographyPrimary: colors.gray800,
    typographySecondary: colors.gray600,
    typographyPrimaryError: colors.red400,
    typographySecondaryError: colors.red300,

    // - loadingspinner
    loadingSpinnerBackground: colors.gray300,
    loadingSpinnerForeground: colors.gray700,
  },
  borders: {radius: '2px'},
  spacing,
  typography,
  animation,
};
