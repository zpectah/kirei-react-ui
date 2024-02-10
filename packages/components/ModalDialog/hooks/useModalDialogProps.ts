import clsx from 'clsx';
import { UseModalDialogProps, UseModalDialogPropsReturn } from 'types';
import { MODAL_DIALOG_ROOT, MODAL_DIALOG_BACKDROP } from 'core';

export const useModalDialogProps = (props: UseModalDialogProps): UseModalDialogPropsReturn => {
  const { style, className, isOpen, isOpening, isClosing } = props;

  return {
    root: {
      className: clsx(
        MODAL_DIALOG_ROOT,
        isOpen && 'isOpen',
        isOpening && 'isOpening',
        isClosing && 'isClosing',
        className
      ),
      style: { ...style },
    },
    backdrop: {
      className: MODAL_DIALOG_BACKDROP,
      style: {},
    },
  };
};
