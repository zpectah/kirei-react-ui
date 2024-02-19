import clsx from 'clsx';
import { UseBackdropProps, UseBackdropPropsReturn } from 'types';
import { BACKDROP_ROOT } from 'core';

export const useBackdropProps = (props: UseBackdropProps): UseBackdropPropsReturn => {
  const { style, className } = props;

  return {
    root: {
      className: clsx(BACKDROP_ROOT, className),
      style: { ...style },
    },
  };
};
