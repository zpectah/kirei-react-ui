import { breakpointKeys } from 'types';

export const MODAL_ROOT = 'Modal';
export const MODAL_BACKDROP = `${MODAL_ROOT}-backdrop`;
export const MODAL_CONTAINER = `${MODAL_ROOT}-container`;
export const MODAL_DIALOG = `${MODAL_ROOT}-dialog`;
export const MODAL_PAPER = `${MODAL_ROOT}-paper`;

export const MODAL_DEFAULT_VALUES = {
  maxWidth: breakpointKeys.md,
  isFullscreen: false,
};

export const MODAL_ID_PREFIX = 'modal_';
