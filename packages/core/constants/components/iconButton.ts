import { brandColorKeys, shapeKeys, shapeSizeKeys, shapeVariantKeys } from 'types';

export const ICON_BUTTON_ROOT = 'IconButton';
export const ICON_BUTTON_ICON = `${ICON_BUTTON_ROOT}-icon`;

export const ICON_BUTTON_DEFAULT_VALUES = {
  as: 'button',
  size: shapeSizeKeys.medium,
  variant: shapeVariantKeys.contained,
  color: brandColorKeys.primary,
  shape: shapeKeys.circle,
};
