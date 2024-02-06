import { DeepPartial } from '../common';
import { ThemeBreakpoints } from './breakpoints';
import { ThemeComponents } from './components';
import { ThemePalette } from './palette';
import { ThemeShadows } from './shadows';
import { ThemeShape } from './shape';
import { ThemeSpacing } from './spacing';
import { ThemeTransitions } from './transitions';
import { ThemeTypography } from './typography';
import { ThemeZIndex } from './zIndex';

export interface Theme {
  breakpoints: ThemeBreakpoints;
  components: ThemeComponents;
  palette: ThemePalette;
  shadows: ThemeShadows;
  shape: ThemeShape;
  spacing: ThemeSpacing;
  transitions: ThemeTransitions;
  typography: ThemeTypography;
  zIndex: ThemeZIndex;
}

export type PartialTheme = DeepPartial<Theme>;
