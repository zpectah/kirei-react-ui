import {
  flexDirectionKeys,
  flexAlignItemsKeys,
  flexAlignContentKeys,
  flexJustifyItemsKeys,
  flexJustifyContentKeys,
  flexWrapKeys,
} from '../enums';

export type FlexDirection = keyof typeof flexDirectionKeys;

export type FlexAlignItems = keyof typeof flexAlignItemsKeys;

export type FlexAlignContent = keyof typeof flexAlignContentKeys;

export type FlexJustifyItems = keyof typeof flexJustifyItemsKeys;

export type FlexJustifyContent = keyof typeof flexJustifyContentKeys;

export type FlexWrap = keyof typeof flexWrapKeys;
