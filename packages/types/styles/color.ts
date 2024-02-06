import { baseColorKeys, exoticColorKeys, emotionColorKeys, textColorKeys } from '../enums';

export type BaseColor = keyof typeof baseColorKeys;
export type ExoticColor = keyof typeof exoticColorKeys;
export type EmotionColor = keyof typeof emotionColorKeys;
export type TextColor = keyof typeof textColorKeys;

export type TypographyColor = BaseColor | ExoticColor | EmotionColor | TextColor;
