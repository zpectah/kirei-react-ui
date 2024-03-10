import { Spacing } from '../styles';

type ThemeSpacingSet = {
  [key in Spacing]: number;
};

export interface ThemeSpacing extends ThemeSpacingSet {
  get: (...args: Spacing[]) => string;
  ratio: number;
}
