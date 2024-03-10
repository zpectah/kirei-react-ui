import { themeModeKeys } from '../enums';

export type ThemeMode = keyof typeof themeModeKeys;

interface ThemeColorScheme {
  light: string;
  dark: string;
  current: string;
}

export interface ThemePaletteColor {
  base: string;
  main: ThemeColorScheme;
  contrast: ThemeColorScheme;
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
    body: ThemeColorScheme;
    paper: ThemeColorScheme;
    shape: ThemeColorScheme;
    divider: string;
    dividerAlpha: number;
  };
  text: {
    body: ThemeColorScheme;
    muted: ThemeColorScheme;
    disabled: ThemeColorScheme;
  };
  action: {
    disabled: ThemeColorScheme;
    disableAlpha: number;
    active: ThemeColorScheme;
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
