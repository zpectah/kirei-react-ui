import clsx from 'clsx';
import { UseLabelProps, UseLabelPropsReturn } from 'types';
import { LABEL_ROOT } from 'core';

export const useLabelProps = (props: UseLabelProps): UseLabelPropsReturn => {
  const { style, className } = props;

  return {
    root: {
      className: clsx(LABEL_ROOT, className),
      style: { ...style },
    },
  };
};
