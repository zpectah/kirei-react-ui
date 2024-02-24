import { shapeKeys, shapeSizeKeys, shapeVariantKeys } from '../enums';

export type Shape = keyof typeof shapeKeys;

export type ShapeSize = keyof typeof shapeSizeKeys;

export type ShapeVariant = keyof typeof shapeVariantKeys;
