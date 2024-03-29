import {
  themeColorKeys,
  brandColorKeys,
  neutralColorKeys,
  emotionColorKeys,
  textColorKeys,
  backdropBackgroundColorKeys,
} from '../enums';

export type ThemeColor = keyof typeof themeColorKeys;
export type BrandColor = keyof typeof brandColorKeys;
export type NeutralColor = keyof typeof neutralColorKeys;
export type EmotionColor = keyof typeof emotionColorKeys;
export type TextColor = keyof typeof textColorKeys;
export type BackdropBackgroundColor = keyof typeof backdropBackgroundColorKeys;

export type ButtonColor = BrandColor | NeutralColor | EmotionColor;
export type TypographyColor = BrandColor | NeutralColor | EmotionColor | TextColor;
export type InputColor = BrandColor | EmotionColor;
