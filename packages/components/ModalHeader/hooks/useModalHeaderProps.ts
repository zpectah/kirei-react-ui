import clsx from 'clsx';
import { UseModalHeaderProps, UseModalHeaderPropsReturn } from 'types';
import {
  MODAL_HEADER_ROOT,
  MODAL_HEADER_TITLE_CONTAINER,
  MODAL_HEADER_ACTIONS_CONTAINER,
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
    titleContainer: {
      className: MODAL_HEADER_TITLE_CONTAINER,
      style: {},
    },
    actionsContainer: {
      className: MODAL_HEADER_ACTIONS_CONTAINER,
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
