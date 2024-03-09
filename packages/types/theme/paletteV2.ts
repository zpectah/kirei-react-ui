import { themeModeKeys } from '../enums';

export type ThemeModeV2 = keyof typeof themeModeKeys;

interface BaseColorScheme {
  light: string; // Color set for light theme
  dark: string; // Color set for dark theme
  current: string; // Returns color by current theme mode
}

interface PaletteColorScheme {
  base: string;
  main: BaseColorScheme;
  contrast: BaseColorScheme;
}

export interface ThemePaletteV2 {
  mode: ThemeModeV2;

  // Base colors without any manipulations
  common: {
    black: string;
    // dark: string; // Could be as shade from grey
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
    // light: string; // Could be as shade from grey
    white: string;
  };

  background: {
    // Background color of a page
    body: BaseColorScheme;
    // Base background for paper
    paper: BaseColorScheme;
    // Lightly different body color for sidebar or similar
    shape: BaseColorScheme;
    // Solid color for divider
    divider: string;
    // Number of opacity for divider or border element
    dividerAlpha: number;
  };
  text: {
    // Text color for background
    body: BaseColorScheme;
    // Lightly different as body
    muted: BaseColorScheme;
    // Like muted but with opacity
    disabled: BaseColorScheme;
  };
  action: {
    // Solid color for disabled state
    disabled: BaseColorScheme;
    // Number of opacity for disabled elements
    disableAlpha: number;
    // Solid color for active state
    active: BaseColorScheme;
    // Number of opacity for active elements
    activeAlpha: number;
    // Number of opacity for hovered elements
    hoverAlpha: number;
    // Number of opacity for focused elements
    focusAlpha: number;
  };

  primary: PaletteColorScheme;
  secondary: PaletteColorScheme;
  tertiary: PaletteColorScheme;

  success: PaletteColorScheme;
  info: PaletteColorScheme;
  warning: PaletteColorScheme;
  error: PaletteColorScheme;

  light: PaletteColorScheme;
  dark: PaletteColorScheme;

  neutral: PaletteColorScheme;
  inverted: PaletteColorScheme;
}
