import { PartialTheme, Theme } from 'types';
import { createThemeBreakpoints } from './breakpoints';
import { createThemePalette } from './palette'; // TODO
import { createThemePaletteV2 } from './paletteV2'; // TODO
import { createThemeShadows } from './shadows';
import { createThemeShape } from './shape';
import { createThemeSpacing } from './spacing';
import { createThemeTransitions } from './transitions';
import { createThemeTypography } from './typography';
import { createThemeZIndex } from './zIndex';
import { createThemeComponents } from './components';

export const createTheme = (theme?: PartialTheme): Theme => {
  const breakpoints = createThemeBreakpoints(theme?.breakpoints);
  const palette = createThemePalette(theme?.palette); // TODO
  const paletteV2 = createThemePaletteV2(theme?.paletteV2); // TODO
  const shape = createThemeShape(theme?.shape);
  const spacing = createThemeSpacing(theme?.spacing);
  const transitions = createThemeTransitions(theme?.transitions);
  const typography = createThemeTypography(theme?.typography);
  const zIndex = createThemeZIndex(theme?.zIndex);
  const shadows = createThemeShadows(palette, theme?.shadows);
  const components = createThemeComponents(theme?.components);

  return {
    components,
    palette,
    paletteV2,
    shape,
    typography,
    breakpoints,
    spacing,
    transitions,
    shadows,
    zIndex,
  };
};
