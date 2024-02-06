import { DeepPartial, ThemeSpacing, SpacingValues } from 'types';
import { SPACING_UNIT, SPACING_RATIO, SPACING_VALUES } from 'core';

export const createThemeSpacing = (spacing?: DeepPartial<ThemeSpacing>): ThemeSpacing => {
  const ratio = spacing?.ratio || SPACING_RATIO;
  const values = {
    0: spacing?.['0'] || SPACING_VALUES['0'],
    1: spacing?.['1'] || SPACING_VALUES['1'],
    2: spacing?.['2'] || SPACING_VALUES['2'],
    3: spacing?.['3'] || SPACING_VALUES['3'],
    4: spacing?.['4'] || SPACING_VALUES['4'],
    5: spacing?.['5'] || SPACING_VALUES['5'],
    6: spacing?.['6'] || SPACING_VALUES['6'],
    7: spacing?.['7'] || SPACING_VALUES['7'],
    8: spacing?.['8'] || SPACING_VALUES['8'],
    9: spacing?.['9'] || SPACING_VALUES['9'],
    10: spacing?.['10'] || SPACING_VALUES['10'],
    11: spacing?.['11'] || SPACING_VALUES['11'],
    12: spacing?.['12'] || SPACING_VALUES['12'],
    13: spacing?.['13'] || SPACING_VALUES['13'],
    14: spacing?.['14'] || SPACING_VALUES['14'],
    15: spacing?.['15'] || SPACING_VALUES['15'],
    16: spacing?.['16'] || SPACING_VALUES['16'],
  };

  const get = (...args: SpacingValues[]) => {
    const array: string[] = [];
    args.forEach((arg) => {
      array.push(`${values[arg] * ratio}${SPACING_UNIT}`);
    });

    return array.join(' ');
  };

  return {
    ratio,
    get,
    ...values,
  };
};
