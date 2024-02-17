import clsx from 'clsx';
import { UseModalBodyProps, UseModalBodyPropsReturn } from 'types';
import { MODAL_BODY_ROOT, MODAL_BODY_CONTAINER } from 'core';

export const useModalBodyProps = (props: UseModalBodyProps): UseModalBodyPropsReturn => {
  const { style, className, slotProps } = props;

  const {
    containerProps: { style: containerStyle, className: containerClassName, ...restOfContainerProps },
  } = slotProps;

  return {
    root: {
      className: clsx(MODAL_BODY_ROOT, className),
      style: { ...style },
    },
    container: {
      className: clsx(MODAL_BODY_CONTAINER, containerClassName),
      style: { ...containerStyle },
      ...restOfContainerProps,
    },
  };
};
