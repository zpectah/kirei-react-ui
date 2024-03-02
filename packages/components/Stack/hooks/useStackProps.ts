import clsx from 'clsx';
import { UseStackProps, UseStackPropsReturn } from 'types';
import { STACK_ROOT } from 'core';

export const useStackProps = <E extends Element>(props: UseStackProps): UseStackPropsReturn<E> => {
  const { style, className } = props;

  return {
    root: {
      className: clsx(STACK_ROOT, className),
      style: { ...style },
    },
  };
};
