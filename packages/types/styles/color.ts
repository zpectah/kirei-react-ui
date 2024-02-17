import { baseColorKeys, neutralColorKeys, emotionColorKeys, textColorKeys, paperBackgroundColorKeys } from '../enums';

export type BaseColor = keyof typeof baseColorKeys;
export type NeutralColor = keyof typeof neutralColorKeys;
export type EmotionColor = keyof typeof emotionColorKeys;
export type TextColor = keyof typeof textColorKeys;
export type PaperBackgroundColor = keyof typeof paperBackgroundColorKeys;

export type TypographyColor = BaseColor | NeutralColor | EmotionColor | TextColor;
