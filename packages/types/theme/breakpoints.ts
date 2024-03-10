import { Breakpoints, BreakpointUnits } from '../styles';

export type ThemeBreakpointValues = {
  [key in Breakpoints]: number;
};

export interface ThemeBreakpoints {
  values: ThemeBreakpointValues;
  container: ThemeBreakpointValues;
  unit: BreakpointUnits;
  up: (min: Breakpoints) => string;
  down: (max: Breakpoints) => string;
  between: (min: Breakpoints, max: Breakpoints) => string;
  only: (key: Breakpoints) => string;
}
