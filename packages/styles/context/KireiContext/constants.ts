import { KireiContextProps } from 'types';
import { createTheme } from '../../theme';

export const defaultKireiContext: KireiContextProps = {
  theme: createTheme(),
  setTheme: () => {},
  setThemeMode: () => {},
  toggleThemeMode: () => {},
};
