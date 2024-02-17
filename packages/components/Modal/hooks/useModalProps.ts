import clsx from 'clsx';
import { UseModalProps, UseModalPropsReturn } from 'types';
import { MODAL_ROOT, MODAL_BACKDROP, MODAL_CONTAINER, MODAL_DIALOG, MODAL_PAPER, STATUS_CLASS_NAMES } from 'core';

export const useModalProps = (props: UseModalProps): UseModalPropsReturn => {
  const { style, isFullscreen, className, isOpen, isOpening, isClosing, slotProps } = props;
  const {
    backdropProps: { style: backdropStyle, className: backdropClassName, ...restOfBackdropProps },
    containerProps: { style: containerStyle, className: containerClassName, ...restOfContainerProps },
    dialogProps: { style: dialogStyle, className: dialogClassName, ...restOfDialogProps },
    paperProps: { style: paperStyle, className: paperClassName, ...restOfPaperProps },
  } = slotProps;

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
      className: clsx(MODAL_BACKDROP, backdropClassName),
      style: { ...backdropStyle },
      ...restOfBackdropProps,
    },
    container: {
      className: clsx(MODAL_CONTAINER, containerClassName),
      style: { ...containerStyle },
      ...restOfContainerProps,
    },
    dialog: {
      className: clsx(MODAL_DIALOG, dialogClassName),
      style: { ...dialogStyle },
      ...restOfDialogProps,
    },
    paper: {
      className: clsx(MODAL_PAPER, paperClassName),
      style: { ...paperStyle },
      ...restOfPaperProps,
    },
  };
};
