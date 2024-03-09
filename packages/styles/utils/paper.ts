import { PaperColor, themeModeKeys, ThemePaletteV2 } from 'types';

export const getPaperDividerColor = (color: PaperColor, palette: ThemePaletteV2) => {
  const isLightMode = palette.mode === themeModeKeys.light;
  let divider;
  switch (color) {
    case 'primary':
    case 'secondary':
    case 'tertiary':
    case 'neutral':
    case 'inverted':
    case 'dark':
    case 'light':
    case 'success':
    case 'info':
    case 'warning':
    case 'error':
      divider = isLightMode ? palette[color].main.dark : palette[color].main.light;
      break;

    case 'paper':
    default:
      divider = palette.background.divider;
      break;
  }

  return divider;
};
