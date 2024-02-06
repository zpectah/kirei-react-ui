import clsx from 'clsx';
import { UseStackProps, UseStackPropsReturn } from 'types';
import { STACK_ROOT } from 'core';

export const useStackProps = (props: UseStackProps): UseStackPropsReturn => {
  const { style, className } = props;

  return {
    root: {
      className: clsx(STACK_ROOT, className),
      style: { ...style },
    },
  };
};
