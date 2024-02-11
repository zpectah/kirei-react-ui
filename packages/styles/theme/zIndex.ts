import { DeepPartial, ThemeZIndex } from 'types';
import { Z_INDEX } from 'core';

export const createThemeZIndex = (zIndex?: DeepPartial<ThemeZIndex>): ThemeZIndex => {
  return {
    appBar: zIndex?.appBar || Z_INDEX.appBar,
    drawer: zIndex?.drawer || Z_INDEX.drawer,
    modal: zIndex?.modal || Z_INDEX.modal,
    tooltip: zIndex?.tooltip || Z_INDEX.tooltip,
  };
};
