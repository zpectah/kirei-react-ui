import clsx from 'clsx';
import { UseModalHeaderProps, UseModalHeaderPropsReturn } from 'types';
import { MODAL_HEADER_ROOT } from 'core';

export const useModalHeaderProps = (props: UseModalHeaderProps): UseModalHeaderPropsReturn => {
  const { style, className } = props;

  return {
    root: {
      className: clsx(MODAL_HEADER_ROOT, className),
      style: { ...style },
    },
  };
};
