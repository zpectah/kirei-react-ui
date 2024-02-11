import { Breakpoints } from '../styles';

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
  up: (min: Breakpoints) => string;
  down: (max: Breakpoints) => string;
  between: (min: Breakpoints, max: Breakpoints) => string;
  only: (key: Breakpoints) => string;
}
