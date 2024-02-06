import { WithChildren } from '../common';
import { Theme, PartialTheme, ThemeMode } from '../theme';
import { GlobalStyles } from './interpolation';

export interface UiContextProps {
  theme: Theme;
  setTheme: (theme: PartialTheme) => void;
  setThemeMode: (mode: ThemeMode) => void;
  toggleThemeMode: () => void;
}

export interface UiProviderProps extends WithChildren {
  theme?: PartialTheme;
  styles?: GlobalStyles;
  applyCSSReset?: boolean;
  applyGlobalStyles?: boolean;
}
