import clsx from 'clsx';
import { UsePaperProps, UsePaperPropsReturn } from 'types';
import { PAPER_ROOT, STATUS_CLASS_NAMES } from 'core';

export const usePaperProps = (props: UsePaperProps): UsePaperPropsReturn => {
  const { style, className, isSquare } = props;

  return {
    root: {
      className: clsx(PAPER_ROOT, isSquare && STATUS_CLASS_NAMES.isSquare, className),
      style: { ...style },
    },
  };
};
