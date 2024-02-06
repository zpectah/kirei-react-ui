import { BreakpointKeys } from '../styles';

export interface ThemeBreakpoints {
  values: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  container: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  unit: 'px' | 'rem' | 'vw' | 'vh' | 'em' | '%' | 'pt' | 'pc';
  up: (min: BreakpointKeys) => string;
  down: (max: BreakpointKeys) => string;
  between: (min: BreakpointKeys, max: BreakpointKeys) => string;
  only: (key: BreakpointKeys) => string;
}
