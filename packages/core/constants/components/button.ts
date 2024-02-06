import { shapeSizeKeys, shapeVariantKeys, baseColorKeys } from 'types';

export const BUTTON_ROOT = 'Button';
export const BUTTON_LABEL = `${BUTTON_ROOT}-label`;
export const BUTTON_ICON_START = `${BUTTON_ROOT}-iconStart`;
export const BUTTON_ICON_END = `${BUTTON_ROOT}-iconEnd`;
export const BUTTON_ICON_LOADING = `${BUTTON_ROOT}-iconLoading`;

export const BUTTON_DEFAULT_VALUES = {
  as: 'button',
  size: shapeSizeKeys.medium,
  variant: shapeVariantKeys.contained,
  color: baseColorKeys.primary,
};
