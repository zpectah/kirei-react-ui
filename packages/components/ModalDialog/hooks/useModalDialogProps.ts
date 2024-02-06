import clsx from 'clsx';
import { UseModalDialogProps, UseModalDialogPropsReturn } from 'types';
import { MODAL_DIALOG_ROOT } from 'core';

export const useModalDialogProps = (props: UseModalDialogProps): UseModalDialogPropsReturn => {
  const { style, className } = props;

  return {
    root: {
      className: clsx(MODAL_DIALOG_ROOT, className),
      style: { ...style },
    },
  };
};
