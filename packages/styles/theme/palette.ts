import Color from 'color';
import { DeepPartial, ThemePalette, themeModeKeys } from 'types';
import { BACKGROUND_TONAL_OFFSET, PALETTE } from 'core';
import { getThemePaletteRatio, getThemePaletteProps } from '../utils';

const getLightenColor = (color: string, ratio: number) => Color(color).lighten(ratio).toString();
const getDarkenColor = (color: string, ratio: number) => Color(color).darken(ratio).toString();
const getNegativeColor = (color: string) => Color(color).negate().toString();
const getGreyscaleColor = (color: string) => Color(color).grayscale().toString();
const getWhitenColor = (color: string, ratio: number) => Color(color).whiten(ratio).toString();
const getBlackenColor = (color: string, ratio: number) => Color(color).blacken(ratio).toString();
const getAlphaColor = (color: string, ratio: number) => Color(color).alpha(ratio).toString();
const isColorLight = (color: string) => Color(color).isLight();
const isColorDark = (color: string) => Color(color).isDark();

export const createThemePalette = (palette?: DeepPartial<ThemePalette>): ThemePalette => {
  const mode = palette?.mode || themeModeKeys.light;
  const primaryColorMain = palette?.primary?.main || PALETTE.primary;
  const secondaryColorMain = palette?.secondary?.main || PALETTE.secondary;
  const tertiaryColorMain = palette?.tertiary?.main || PALETTE.tertiary;
  const errorColorMain = palette?.error?.main || PALETTE.error;
  const warningColorMain = palette?.warning?.main || PALETTE.warning;
  const infoColorMain = palette?.info?.main || PALETTE.info;
  const successColorMain = palette?.success?.main || PALETTE.success;

  const utils = {
    getLightenColor,
    getDarkenColor,
    getNegativeColor,
    getGreyscaleColor,
    getWhitenColor,
    getBlackenColor,
    getAlphaColor,
    isColorLight,
    isColorDark,
  };

  const common = {
    black: palette?.common?.black || PALETTE.black,
    white: palette?.common?.white || PALETTE.white,
    dark: palette?.common?.dark || PALETTE.dark,
    light: palette?.common?.light || PALETTE.light,
    grey: palette?.common?.grey || PALETTE.grey,
    red: palette?.common?.red || PALETTE.red,
    pink: palette?.common?.pink || PALETTE.pink,
    purple: palette?.common?.purple || PALETTE.purple,
    deepPurple: palette?.common?.deepPurple || PALETTE.deepPurple,
    indigo: palette?.common?.indigo || PALETTE.indigo,
    blue: palette?.common?.blue || PALETTE.blue,
    lightBlue: palette?.common?.lightBlue || PALETTE.lightBlue,
    cyan: palette?.common?.cyan || PALETTE.cyan,
    teal: palette?.common?.teal || PALETTE.teal,
    green: palette?.common?.green || PALETTE.green,
    lightGreen: palette?.common?.lightGreen || PALETTE.lightGreen,
    lime: palette?.common?.lime || PALETTE.lime,
    yellow: palette?.common?.yellow || PALETTE.yellow,
    amber: palette?.common?.amber || PALETTE.amber,
    orange: palette?.common?.orange || PALETTE.orange,
    deepOrange: palette?.common?.deepOrange || PALETTE.deepOrange,
    brown: palette?.common?.brown || PALETTE.brown,
    blueGrey: palette?.common?.blueGrey || PALETTE.blueGrey,
  };

  const lightColorMain = palette?.light?.main || common.light;
  const darkColorMain = palette?.dark?.main || common.dark;

  const ratio = getThemePaletteRatio(palette?.ratio);

  const _action = {
    active: palette?.action?.active || primaryColorMain,
    disabled: palette?.action?.disabled || PALETTE.disabled,
  };
  const action = {
    active: getAlphaColor(_action.active, ratio.activeAlpha),
    disabled: getAlphaColor(_action.disabled, ratio.disabledAlpha),
  };

  const themePrimary = {
    mode,
    common,
    action,
    ratio,
  };
  const themeSecondary = getThemePaletteProps(mode, utils, {
    ...palette,
    ...themePrimary,
  });

  return {
    ...themePrimary,
    ...themeSecondary,
    utils,
    primary: {
      main: primaryColorMain,
      dark: palette?.primary?.dark || getDarkenColor(primaryColorMain, BACKGROUND_TONAL_OFFSET),
      light: palette?.primary?.light || getLightenColor(primaryColorMain, BACKGROUND_TONAL_OFFSET),
      contrast: palette?.primary?.contrast || PALETTE.white,
    },
    secondary: {
      main: secondaryColorMain,
      dark: palette?.secondary?.dark || getDarkenColor(secondaryColorMain, BACKGROUND_TONAL_OFFSET),
      light: palette?.secondary?.light || getLightenColor(secondaryColorMain, BACKGROUND_TONAL_OFFSET),
      contrast: palette?.secondary?.contrast || PALETTE.white,
    },
    tertiary: {
      main: tertiaryColorMain,
      dark: palette?.tertiary?.dark || getDarkenColor(tertiaryColorMain, BACKGROUND_TONAL_OFFSET),
      light: palette?.tertiary?.light || getLightenColor(tertiaryColorMain, BACKGROUND_TONAL_OFFSET),
      contrast: palette?.tertiary?.contrast || PALETTE.white,
    },
    error: {
      main: errorColorMain,
      dark: palette?.error?.dark || getDarkenColor(errorColorMain, BACKGROUND_TONAL_OFFSET),
      light: palette?.error?.light || getLightenColor(errorColorMain, BACKGROUND_TONAL_OFFSET),
      contrast: palette?.error?.contrast || PALETTE.white,
    },
    warning: {
      main: warningColorMain,
      dark: palette?.warning?.dark || getDarkenColor(warningColorMain, BACKGROUND_TONAL_OFFSET),
      light: palette?.warning?.light || getLightenColor(warningColorMain, BACKGROUND_TONAL_OFFSET),
      contrast: palette?.warning?.contrast || PALETTE.white,
    },
    info: {
      main: infoColorMain,
      dark: palette?.info?.dark || getDarkenColor(infoColorMain, BACKGROUND_TONAL_OFFSET),
      light: palette?.info?.light || getLightenColor(infoColorMain, BACKGROUND_TONAL_OFFSET),
      contrast: palette?.info?.contrast || PALETTE.white,
    },
    success: {
      main: successColorMain,
      dark: palette?.success?.dark || getDarkenColor(successColorMain, BACKGROUND_TONAL_OFFSET),
      light: palette?.success?.light || getLightenColor(successColorMain, BACKGROUND_TONAL_OFFSET),
      contrast: palette?.success?.contrast || PALETTE.white,
    },
    light: {
      main: lightColorMain,
      dark: palette?.light?.dark || getDarkenColor(lightColorMain, BACKGROUND_TONAL_OFFSET),
      light: palette?.light?.light || getLightenColor(lightColorMain, BACKGROUND_TONAL_OFFSET),
      contrast: palette?.light?.contrast || PALETTE.dark,
    },
    dark: {
      main: darkColorMain,
      dark: palette?.dark?.dark || getDarkenColor(darkColorMain, BACKGROUND_TONAL_OFFSET),
      light: palette?.dark?.light || getLightenColor(darkColorMain, BACKGROUND_TONAL_OFFSET),
      contrast: palette?.dark?.contrast || PALETTE.light,
    },
  };
};
