import { themeModeKeys } from '../enums';

export type ThemeMode = keyof typeof themeModeKeys;

export interface ThemePaletteCluster {
  main: string;
  dark: string;
  light: string;
  contrast: string;
}

export interface ThemePalette {
  mode: ThemeMode;
  ratio: {
    activeAlpha: number;
    hoverAlpha: number;
    disabledAlpha: number;
    backgroundAlpha: number;
    shadowAlpha: number;
    outlineAlpha: number;
    loadingLabelAlpha: number;
  };
  common: {
    black: string;
    white: string;
    dark: string;
    light: string;
    grey: string;
    red: string;
    pink: string;
    purple: string;
    deepPurple: string;
    indigo: string;
    blue: string;
    lightBlue: string;
    cyan: string;
    teal: string;
    green: string;
    lightGreen: string;
    lime: string;
    yellow: string;
    amber: string;
    orange: string;
    deepOrange: string;
    brown: string;
    blueGrey: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
    disabled: string;
  };
  shape: {
    divider: string;
    border: string;
  };
  background: {
    default: string;
    paper: string;
  };
  action: {
    active: string;
    disabled: string;
  };
  primary: ThemePaletteCluster;
  secondary: ThemePaletteCluster;
  tertiary: ThemePaletteCluster;
  error: ThemePaletteCluster;
  warning: ThemePaletteCluster;
  info: ThemePaletteCluster;
  success: ThemePaletteCluster;
  dark: ThemePaletteCluster;
  light: ThemePaletteCluster;
  inverted: ThemePaletteCluster;
  neutral: ThemePaletteCluster;
  utils: {
    getNegativeColor: (color: string) => string;
    getLightenColor: (color: string, ratio: number) => string;
    getDarkenColor: (color: string, ratio: number) => string;
    isColorLight: (color: string) => boolean;
    isColorDark: (color: string) => boolean;
    getGreyscaleColor: (color: string) => string;
    getWhitenColor: (color: string, ratio: number) => string;
    getBlackenColor: (color: string, ratio: number) => string;
    getAlphaColor: (color: string, ratio: number) => string;
  };
}
