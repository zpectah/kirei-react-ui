import clsx from 'clsx';
import { UseControlLabelProps, UseControlLabelPropsReturn } from 'types';
import { CONTROL_LABEL_ROOT } from 'core';

export const useControlLabelProps = (props: UseControlLabelProps): UseControlLabelPropsReturn => {
  const { style, className } = props;

  return {
    root: {
      className: clsx(CONTROL_LABEL_ROOT, className),
      style: { ...style },
    },
  };
};
