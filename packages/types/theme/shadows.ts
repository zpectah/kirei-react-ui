import { Shadows } from '../styles';

type ThemeShadowSet = {
  [key in Shadows]: string;
};

export interface ThemeShadows extends ThemeShadowSet {}
