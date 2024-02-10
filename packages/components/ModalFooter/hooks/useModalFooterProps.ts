import clsx from 'clsx';
import { UseModalFooterProps, UseModalFooterPropsReturn } from 'types';
import { MODAL_FOOTER_ROOT } from 'core';

export const useModalFooterProps = (props: UseModalFooterProps): UseModalFooterPropsReturn => {
  const { style, className } = props;

  return {
    root: {
      className: clsx(MODAL_FOOTER_ROOT, className),
      style: { ...style },
    },
  };
};
