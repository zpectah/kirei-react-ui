import clsx from 'clsx';
import { UseCheckboxProps, UseCheckboxPropsReturn } from 'types';
import { CHECKBOX_ROOT, CHECKBOX_LABEL } from 'core';

export const useCheckboxProps = (props: UseCheckboxProps): UseCheckboxPropsReturn => {
  const { style, className, slotProps } = props;
  const {
    labelProps: { className: labelClassName, style: labelStyle, ...restOfLabelProps },
  } = slotProps;

  return {
    root: {
      className: clsx(CHECKBOX_ROOT, className),
      style: { ...style },
    },
    label: {
      className: clsx(CHECKBOX_LABEL, labelClassName),
      style: { ...labelStyle },
      ...restOfLabelProps,
    },
  };
};
