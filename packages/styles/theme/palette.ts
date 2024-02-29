import Color from 'color';
import { DeepPartial, ThemePalette, themeModeKeys } from 'types';
import { PALETTE } from 'core';
import { getThemePaletteRatio, getThemePaletteProps } from '../utils';

const getLightenColor = (color: string, ratio: number) => Color(color).lighten(ratio).toString();
const getDarkenColor = (color: string, ratio: number) => Color(color).darken(ratio).toString();
const getNegativeColor = (color: string) => Color(color).negate().toString();
const getGreyscaleColor = (color: string) => Color(color).grayscale().toString();
const getWhitenColor = (color: string, ratio: number) => Color(color).whiten(ratio).toString();
const getBlackenColor = (color: string, ratio: number) => Color(color).blacken(ratio).toString();
const getAlphaColor = (color: string, ratio: number) => Color(color).alpha(ratio).toString();

export const createThemePalette = (palette?: DeepPartial<ThemePalette>): ThemePalette => {
  const mode = palette?.mode || themeModeKeys.light;
  const primaryColorMain = palette?.primary?.main || PALETTE.primary;
  const secondaryColorMain = palette?.secondary?.main || PALETTE.secondary;
  const tertiaryColorMain = palette?.tertiary?.main || PALETTE.tertiary;
  const errorColorMain = palette?.error?.main || PALETTE.error;
  const warningColorMain = palette?.warning?.main || PALETTE.warning;
  const infoColorMain = palette?.info?.main || PALETTE.info;
  const successColorMain = palette?.success?.main || PALETTE.success;

  const ratio = getThemePaletteRatio(palette?.ratio);
  const utils = {
    getLightenColor,
    getDarkenColor,
    getNegativeColor,
    getGreyscaleColor,
    getWhitenColor,
    getBlackenColor,
    getAlphaColor,
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
  const action = {
    active: palette?.action?.active || getAlphaColor(primaryColorMain, ratio.activeAlpha),
    disabled: palette?.action?.disabled || getAlphaColor(PALETTE.disabled, ratio.disabledAlpha),
    // TODO - active is currently for outline ... i need also for other purposes non alpha color
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
    utils,
    ...themePrimary,
    ...themeSecondary,
    primary: {
      main: primaryColorMain,
      dark: palette?.primary?.dark || getDarkenColor(primaryColorMain, ratio.backgroundTonal),
      light: palette?.primary?.light || getLightenColor(primaryColorMain, ratio.backgroundTonal),
      contrast: palette?.primary?.contrast || PALETTE.white,
    },
    secondary: {
      main: secondaryColorMain,
      dark: palette?.secondary?.dark || getDarkenColor(secondaryColorMain, ratio.backgroundTonal),
      light: palette?.secondary?.light || getLightenColor(secondaryColorMain, ratio.backgroundTonal),
      contrast: palette?.secondary?.contrast || PALETTE.white,
    },
    tertiary: {
      main: tertiaryColorMain,
      dark: palette?.tertiary?.dark || getDarkenColor(tertiaryColorMain, ratio.backgroundTonal),
      light: palette?.tertiary?.light || getLightenColor(tertiaryColorMain, ratio.backgroundTonal),
      contrast: palette?.tertiary?.contrast || PALETTE.white,
    },
    error: {
      main: errorColorMain,
      dark: palette?.error?.dark || getDarkenColor(errorColorMain, ratio.backgroundTonal),
      light: palette?.error?.light || getLightenColor(errorColorMain, ratio.backgroundTonal),
      contrast: palette?.error?.contrast || PALETTE.white,
    },
    warning: {
      main: warningColorMain,
      dark: palette?.warning?.dark || getDarkenColor(warningColorMain, ratio.backgroundTonal),
      light: palette?.warning?.light || getLightenColor(warningColorMain, ratio.backgroundTonal),
      contrast: palette?.warning?.contrast || PALETTE.white,
    },
    info: {
      main: infoColorMain,
      dark: palette?.info?.dark || getDarkenColor(infoColorMain, ratio.backgroundTonal),
      light: palette?.info?.light || getLightenColor(infoColorMain, ratio.backgroundTonal),
      contrast: palette?.info?.contrast || PALETTE.white,
    },
    success: {
      main: successColorMain,
      dark: palette?.success?.dark || getDarkenColor(successColorMain, ratio.backgroundTonal),
      light: palette?.success?.light || getLightenColor(successColorMain, ratio.backgroundTonal),
      contrast: palette?.success?.contrast || PALETTE.white,
    },
    light: {
      main: lightColorMain,
      dark: palette?.light?.dark || getDarkenColor(lightColorMain, ratio.backgroundTonal),
      light: palette?.light?.light || getLightenColor(lightColorMain, ratio.backgroundTonal),
      contrast: palette?.light?.contrast || PALETTE.dark,
    },
    dark: {
      main: darkColorMain,
      dark: palette?.dark?.dark || getDarkenColor(darkColorMain, ratio.backgroundTonal),
      light: palette?.dark?.light || getLightenColor(darkColorMain, ratio.backgroundTonal),
      contrast: palette?.dark?.contrast || PALETTE.light,
    },
  };
};
