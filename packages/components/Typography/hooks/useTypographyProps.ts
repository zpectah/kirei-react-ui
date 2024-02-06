import clsx from 'clsx';
import { UseTypographyProps, UseTypographyPropsReturn } from 'types';
import { TYPOGRAPHY_ROOT, STATUS_CLASS_NAMES } from 'core';

export const useTypographyProps = (props: UseTypographyProps): UseTypographyPropsReturn => {
  const { style, className, isTruncated } = props;

  return {
    root: {
      className: clsx(TYPOGRAPHY_ROOT, isTruncated && STATUS_CLASS_NAMES.isTruncated, className),
      style: { ...style },
    },
  };
};
