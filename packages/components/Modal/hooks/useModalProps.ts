import clsx from 'clsx';
import { UseModalProps, UseModalPropsReturn } from 'types';
import { MODAL_ROOT, MODAL_BACKDROP } from 'core';

export const useModalProps = (props: UseModalProps): UseModalPropsReturn => {
  const { style, className, isOpen, isOpening, isClosing } = props;

  return {
    root: {
      className: clsx(MODAL_ROOT, isOpen && 'isOpen', isOpening && 'isOpening', isClosing && 'isClosing', className),
      style: { ...style },
    },
    backdrop: {
      className: MODAL_BACKDROP,
      style: {},
    },
  };
};
