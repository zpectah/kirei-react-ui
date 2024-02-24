import clsx from 'clsx';
import { UseCheckboxProps, UseCheckboxPropsReturn } from 'types';
import { CHECKBOX_ROOT } from 'core';

export const useCheckboxProps = (props: UseCheckboxProps): UseCheckboxPropsReturn => {
  const { style, className } = props;

  return {
    root: {
      className: clsx(CHECKBOX_ROOT, className),
      style: { ...style },
    },
  };
};
