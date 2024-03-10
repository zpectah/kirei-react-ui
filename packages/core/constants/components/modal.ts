import { breakpointKeys, scrollDeterminateKeys } from 'types';

export const MODAL_ROOT = 'Modal';
export const MODAL_BACKDROP = `${MODAL_ROOT}-backdrop`;
export const MODAL_CONTAINER = `${MODAL_ROOT}-container`;
export const MODAL_DIALOG = `${MODAL_ROOT}-dialog`;
export const MODAL_PAPER = `${MODAL_ROOT}-paper`;

export const MODAL_DEFAULT_VALUES = {
  isFullscreen: false,
  maxWidth: breakpointKeys.md,
  scroll: scrollDeterminateKeys.paper,
};

export const MODAL_ID_PREFIX = 'modal_';
