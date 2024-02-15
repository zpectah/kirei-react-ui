import clsx from 'clsx';
import { UseModalHeaderProps, UseModalHeaderPropsReturn } from 'types';
import {
  MODAL_HEADER_ROOT,
  MODAL_HEADER_ANCHOR_LEFT,
  MODAL_HEADER_ANCHOR_RIGHT,
  MODAL_HEADER_TITLE,
  MODAL_HEADER_SUBTITLE,
} from 'core';

export const useModalHeaderProps = (props: UseModalHeaderProps): UseModalHeaderPropsReturn => {
  const { style, className } = props;

  return {
    root: {
      className: clsx(MODAL_HEADER_ROOT, className),
      style: { ...style },
    },
    anchorLeft: {
      className: MODAL_HEADER_ANCHOR_LEFT,
      style: {},
    },
    anchorRight: {
      className: MODAL_HEADER_ANCHOR_RIGHT,
      style: {},
    },
    title: {
      className: MODAL_HEADER_TITLE,
      style: {},
    },
    subtitle: {
      className: MODAL_HEADER_SUBTITLE,
      style: {},
    },
  };
};
