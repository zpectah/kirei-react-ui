import clsx from 'clsx';
import { UseModalBodyProps, UseModalBodyPropsReturn } from 'types';
import { MODAL_BODY_ROOT, MODAL_BODY_CONTAINER } from 'core';

export const useModalBodyProps = (props: UseModalBodyProps): UseModalBodyPropsReturn => {
  const { style, className } = props;

  return {
    root: {
      className: clsx(MODAL_BODY_ROOT, className),
      style: { ...style },
    },
    container: {
      className: MODAL_BODY_CONTAINER,
      style: {},
    },
  };
};
