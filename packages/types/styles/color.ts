import { baseColorKeys, exoticColorKeys, emotionColorKeys, textColorKeys, paperBackgroundColorKeys } from '../enums';

export type BaseColor = keyof typeof baseColorKeys;
export type ExoticColor = keyof typeof exoticColorKeys; // TODO #rename to "neutral"
export type EmotionColor = keyof typeof emotionColorKeys;
export type TextColor = keyof typeof textColorKeys;
export type PaperBackgroundColor = keyof typeof paperBackgroundColorKeys;

export type TypographyColor = BaseColor | ExoticColor | EmotionColor | TextColor;
