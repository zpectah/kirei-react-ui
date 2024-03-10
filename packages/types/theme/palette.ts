import { themeModeKeys } from '../enums';
import { ThemeColor } from '../styles';

interface ThemeColorScheme {
  light: string;
  dark: string;
  current: string;
}

interface ThemePaletteColor {
  base: string;
  main: ThemeColorScheme;
  contrast: ThemeColorScheme;
}

type ThemeColorSet = {
  [key in ThemeColor]: ThemePaletteColor;
};

export type ThemeMode = keyof typeof themeModeKeys;

export interface ThemePalette extends ThemeColorSet {
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
