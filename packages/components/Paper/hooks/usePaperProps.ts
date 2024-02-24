import clsx from 'clsx';
import { UsePaperProps, UsePaperPropsReturn } from 'types';
import { PAPER_ROOT, PAPER_DEFAULT_VALUES, STATUS_CLASS_NAMES } from 'core';
import { capitalizeFirstLetter } from 'utils';

export const usePaperProps = (props: UsePaperProps): UsePaperPropsReturn => {
  const {
    color = PAPER_DEFAULT_VALUES.color,
    variant = PAPER_DEFAULT_VALUES.variant,
    className,
    isSquare,
    style,
  } = props;

  return {
    root: {
      className: clsx(
        PAPER_ROOT,
        isSquare && STATUS_CLASS_NAMES.isSquare,
        `color${capitalizeFirstLetter(color)}`,
        className
      ),
      style: { ...style },
    },
  };
};
