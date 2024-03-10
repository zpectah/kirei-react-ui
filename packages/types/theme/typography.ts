import { TextTransform, TextDirection, TypographyVariant } from '../styles';

interface ThemeTypographyCluster {
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: number;
  letterSpacing: string;
  textTransform?: TextTransform;
}

type ThemeTypographySet = {
  [key in TypographyVariant]: ThemeTypographyCluster;
};

export interface ThemeTypography extends ThemeTypographySet {
  fontSize: number;
  fontFamily: string;
  fontWeightLight: number;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightSemiBold: number;
  fontWeightBold: number;
  fontWeightExtraBold: number;
  direction: TextDirection;
}
