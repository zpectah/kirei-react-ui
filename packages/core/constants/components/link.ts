import { baseColorKeys, typographyVariantKeys, linkUnderlineKeys } from 'types';

export const LINK_ROOT = 'Link';

export const LINK_DEFAULT_VALUES = {
  as: 'a',
  variant: typographyVariantKeys.inherit,
  color: baseColorKeys.primary,
  underline: linkUnderlineKeys.always,
};
