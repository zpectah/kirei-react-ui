import clsx from 'clsx';
import { UseFieldLabelProps, UseFieldLabelPropsReturn } from 'types';
import { FIELD_LABEL_ROOT } from 'core';

export const useFieldLabelProps = (props: UseFieldLabelProps): UseFieldLabelPropsReturn => {
  const { style, className } = props;

  return {
    root: {
      className: clsx(FIELD_LABEL_ROOT, className),
      style: { ...style },
    },
  };
};
