import {
  flexDirectionKeys,
  flexAlignItemsKeys,
  flexAlignContentKeys,
  flexJustifyItemsKeys,
  flexJustifyContentKeys,
  flexWrapKeys,
  spacingKeys,
} from 'types';

export const STACK_ROOT = 'Stack';

export const STACK_DEFAULT_VALUES = {
  as: 'div',
  gap: spacingKeys['0'],
  direction: flexDirectionKeys.row,
  alignItems: flexAlignItemsKeys.initial,
  justifyItems: flexJustifyItemsKeys.initial,
  alignContent: flexAlignContentKeys.initial,
  justifyContent: flexJustifyContentKeys.initial,
  wrap: flexWrapKeys.nowrap,
};
