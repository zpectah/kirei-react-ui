import { DeepPartial, ThemeZIndex } from 'types';

export const createThemeZIndex = (zIndex?: DeepPartial<ThemeZIndex>): ThemeZIndex => {
  return {
    appBar: zIndex?.appBar || 1000,
    drawer: zIndex?.drawer || 1200,
    modal: zIndex?.modal || 1400,
    tooltip: zIndex?.tooltip || 1800,
  };
};
