import clsx from 'clsx';
import { UseContainerProps, UseContainerPropsReturn } from 'types';
import { STATUS_CLASS_NAMES, CONTAINER_ROOT } from 'core';

export const useContainerProps = <E extends Element>(props: UseContainerProps): UseContainerPropsReturn<E> => {
  const { style, className, isFluid } = props;

  return {
    root: {
      className: clsx(CONTAINER_ROOT, isFluid && STATUS_CLASS_NAMES.isFluid, className),
      style: { ...style },
    },
  };
};
