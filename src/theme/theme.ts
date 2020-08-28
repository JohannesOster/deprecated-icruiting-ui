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
    buttonLoadingSpinnerBackground: colors.gray600,
    buttonLoadingSpinnerDisabledForeground: colors.gray400,
    buttonLoadingSpinnerDisabledBackground: colors.gray200,

    // - typography
    typographyPrimary: colors.gray800,
    typographySecondary: colors.gray600,
  },
  borders: {radius: '2px'},
  spacing,
  typography,
  animation,
};
