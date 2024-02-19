import {
  baseColorKeys,
  neutralColorKeys,
  emotionColorKeys,
  textColorKeys,
  paperBackgroundColorKeys,
  backdropBackgroundColorKeys,
} from '../enums';

export type BaseColor = keyof typeof baseColorKeys;
export type NeutralColor = keyof typeof neutralColorKeys;
export type EmotionColor = keyof typeof emotionColorKeys;
export type TextColor = keyof typeof textColorKeys;
export type PaperBackgroundColor = keyof typeof paperBackgroundColorKeys;
export type BackdropBackgroundColor = keyof typeof backdropBackgroundColorKeys;

export type TypographyColor = BaseColor | NeutralColor | EmotionColor | TextColor;
