import { DeepPartial, ThemeShape } from 'types';
import { BORDER_RADIUS, BORDER_WIDTH } from 'core';

export const createThemeShape = (shape?: DeepPartial<ThemeShape>): ThemeShape => {
  const borderRadius = {
    small: shape?.borderRadius?.small || BORDER_RADIUS.small,
    medium: shape?.borderRadius?.medium || BORDER_RADIUS.medium,
    large: shape?.borderRadius?.large || BORDER_RADIUS.large,
  };
  const borderWidth = {
    button: shape?.borderWidth?.button || BORDER_WIDTH.button,
    input: shape?.borderWidth?.input || BORDER_WIDTH.input,
    divider: shape?.borderWidth?.divider || BORDER_WIDTH.divider,
    outline: shape?.borderWidth?.outline || BORDER_WIDTH.outline,
  };

  return {
    borderRadius,
    borderWidth,
  };
};
