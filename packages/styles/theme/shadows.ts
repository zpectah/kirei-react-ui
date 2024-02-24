import { DeepPartial, ThemePalette, ThemeShadows } from 'types';

export const createThemeShadows = (palette: ThemePalette, shadows?: DeepPartial<ThemeShadows>): ThemeShadows => {
  const primary = palette.utils.getAlphaColor(palette.common.black, 0.15);
  const secondary = palette.utils.getAlphaColor(palette.common.black, 0.125);
  const tertiary = palette.utils.getAlphaColor(palette.common.black, 0.075);

  return {
    0: shadows?.['0'] || 'none',
    1: shadows?.['1'] || `0px 2px 1px -1px ${primary}, 0px 1px 1px 0px ${secondary}, 0px 1px 3px 0px ${tertiary}`,
    2: shadows?.['2'] || `0px 3px 5px -1px ${primary}, 0px 5px 8px 0px ${secondary}, 0px 1px 14px 0px ${tertiary}`,
    3: shadows?.['3'] || `0px 6px 6px -3px ${primary}, 0px 10px 14px 1px ${secondary}, 0px 4px 18px 3px ${tertiary}`,
    4: shadows?.['4'] || `0px 8px 9px -5px ${primary}, 0px 15px 22px 2px ${secondary}, 0px 6px 28px 5px ${tertiary}`,
    5: shadows?.['5'] || `0px 10px 13px -6px ${primary}, 0px 20px 31px 3px ${secondary}, 0px 8px 38px 7px ${tertiary}`,
  };
};
