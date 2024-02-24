import { neutralColorKeys, shapeKeys, shapeSizeKeys, shapeVariantKeys } from 'types';

export const ICON_BUTTON_ROOT = 'IconButton';
export const ICON_BUTTON_ICON = `${ICON_BUTTON_ROOT}-icon`;

export const ICON_BUTTON_DEFAULT_VALUES = {
  as: 'button',
  size: shapeSizeKeys.medium,
  variant: shapeVariantKeys.text,
  color: neutralColorKeys.neutral,
  shape: shapeKeys.circle,
};
