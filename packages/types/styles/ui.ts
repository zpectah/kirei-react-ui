import { WithChildren } from '../common';
import { Theme, PartialTheme, ThemeMode } from '../theme';
import { GlobalStyles } from './interpolation';

export interface KireiContextProps {
  theme: Theme;
  setTheme: (theme: PartialTheme) => void;
  setThemeMode: (mode: ThemeMode) => void;
  toggleThemeMode: () => void;
}

export interface KireiProviderProps extends WithChildren {
  theme?: PartialTheme;
  styles?: GlobalStyles;
  applyCSSReset?: boolean;
  applyGlobalStyles?: boolean;
}
