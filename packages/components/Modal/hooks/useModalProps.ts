import clsx from 'clsx';
import { UseModalProps, UseModalPropsReturn } from 'types';
import { MODAL_ROOT, MODAL_BACKDROP, MODAL_CONTAINER, MODAL_DIALOG, MODAL_PAPER, STATUS_CLASS_NAMES } from 'core';

export const useModalProps = (props: UseModalProps): UseModalPropsReturn => {
  const { style, isFullscreen, className, isOpen, isOpening, isClosing } = props;

  return {
    root: {
      className: clsx(
        MODAL_ROOT,
        isFullscreen && STATUS_CLASS_NAMES.isFullscreen,
        isOpen && STATUS_CLASS_NAMES.isOpen,
        isOpening && STATUS_CLASS_NAMES.isOpening,
        isClosing && STATUS_CLASS_NAMES.isClosing,
        className
      ),
      style: { ...style },
    },
    backdrop: {
      className: MODAL_BACKDROP,
      style: {},
    },
    container: {
      className: MODAL_CONTAINER,
      style: {},
    },
    dialog: {
      className: MODAL_DIALOG,
      style: {},
    },
    paper: {
      className: MODAL_PAPER,
      style: {},
    },
  };
};
