import { UiContextProps } from 'types';
import { createTheme } from '../../theme';

export const defaultUiContext: UiContextProps = {
  theme: createTheme(),
  setTheme: () => {},
  setThemeMode: () => {},
  toggleThemeMode: () => {},
};
