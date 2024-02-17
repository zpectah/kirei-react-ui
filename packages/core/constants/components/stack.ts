import {
  flexDirectionKeys,
  flexAlignItemsKeys,
  flexAlignContentKeys,
  flexJustifyItemsKeys,
  flexJustifyContentKeys,
  flexWrapKeys,
} from 'types';

export const STACK_ROOT = 'Stack';

export const STACK_DEFAULT_VALUES = {
  as: 'div',
  gap: 0,
  direction: flexDirectionKeys.row,
  alignItems: flexAlignItemsKeys.initial,
  justifyItems: flexJustifyItemsKeys.initial,
  alignContent: flexAlignContentKeys.initial,
  justifyContent: flexJustifyContentKeys.initial,
  wrap: flexWrapKeys.nowrap,
};
