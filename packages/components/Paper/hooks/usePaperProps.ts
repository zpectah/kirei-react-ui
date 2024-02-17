import clsx from 'clsx';
import { UsePaperProps, UsePaperPropsReturn } from 'types';
import { PAPER_ROOT } from 'core';

export const usePaperProps = (props: UsePaperProps): UsePaperPropsReturn => {
  const { style, className } = props;

  return {
    root: {
      className: clsx(PAPER_ROOT, className),
      style: { ...style },
    },
  };
};
