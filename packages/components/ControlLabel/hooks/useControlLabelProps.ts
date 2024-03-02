import clsx from 'clsx';
import { UseControlLabelProps, UseControlLabelPropsReturn } from 'types';
import { CONTROL_LABEL_ROOT, CONTROL_LABEL_LABEL, STATUS_CLASS_NAMES } from 'core';

export const useControlLabelProps = (props: UseControlLabelProps): UseControlLabelPropsReturn => {
  const { style, className, isDisabled, slotProps } = props;
  const {
    labelProps: { style: labelStyle, className: labelClassName, ...restOfLabelProps },
  } = slotProps;

  return {
    root: {
      className: clsx(CONTROL_LABEL_ROOT, isDisabled && STATUS_CLASS_NAMES.isDisabled, className),
      style: { ...style },
    },
    label: {
      className: clsx(CONTROL_LABEL_LABEL, labelClassName),
      style: { ...labelStyle },
      ...restOfLabelProps,
    },
  };
};
