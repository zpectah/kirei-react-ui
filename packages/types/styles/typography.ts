import { textDirectionKeys, textTransformKeys, typographyVariantKeys } from '../enums';

export type TypographyVariant = keyof typeof typographyVariantKeys | 'inherit';

export type TextTransform = keyof typeof textTransformKeys;

export type TextDirection = keyof typeof textDirectionKeys;
