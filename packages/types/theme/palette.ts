import { themeModeKeys } from '../enums';

export type ThemeMode = keyof typeof themeModeKeys;

interface BaseColorScheme {
  light: string;
  dark: string;
  current: string;
}

export interface ThemePaletteColor {
  base: string;
  main: BaseColorScheme;
  contrast: BaseColorScheme;
}

export interface ThemePalette {
  mode: ThemeMode;
  common: {
    black: string;
    dark: string;
    grey: {
      90: string;
      80: string;
      70: string;
      60: string;
      50: string;
      40: string;
      30: string;
      20: string;
      10: string;
      5: string;
    };
    light: string;
    white: string;
  };
  background: {
    body: BaseColorScheme;
    paper: BaseColorScheme;
    shape: BaseColorScheme;
    divider: string;
    dividerAlpha: number;
  };
  text: {
    body: BaseColorScheme;
    muted: BaseColorScheme;
    disabled: BaseColorScheme;
  };
  action: {
    disabled: BaseColorScheme;
    disableAlpha: number;
    active: BaseColorScheme;
    activeAlpha: number;
    hoverAlpha: number;
    focusAlpha: number;
  };
  tonalOffset: number;
  primary: ThemePaletteColor;
  secondary: ThemePaletteColor;
  tertiary: ThemePaletteColor;
  success: ThemePaletteColor;
  info: ThemePaletteColor;
  warning: ThemePaletteColor;
  error: ThemePaletteColor;
  light: ThemePaletteColor;
  dark: ThemePaletteColor;
  neutral: ThemePaletteColor;
  inverted: ThemePaletteColor;
  utils: {
    getNegativeColor: (color: string) => string;
    getLightenColor: (color: string, ratio: number) => string;
    getDarkenColor: (color: string, ratio: number) => string;
    getGreyscaleColor: (color: string) => string;
    getWhitenColor: (color: string, ratio: number) => string;
    getBlackenColor: (color: string, ratio: number) => string;
    getAlphaColor: (color: string, ratio: number) => string;
  };
}
