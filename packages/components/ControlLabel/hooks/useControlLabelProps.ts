import clsx from 'clsx';
import { UseControlLabelProps, UseControlLabelPropsReturn } from 'types';
import { CONTROL_LABEL_ROOT, STATUS_CLASS_NAMES } from 'core';

export const useControlLabelProps = (props: UseControlLabelProps): UseControlLabelPropsReturn => {
  const { style, className, isDisabled } = props;

  return {
    root: {
      className: clsx(CONTROL_LABEL_ROOT, isDisabled && STATUS_CLASS_NAMES.isDisabled, className),
      style: { ...style },
    },
  };
};
