import clsx from 'clsx';
import { UsePaperProps, UsePaperPropsReturn } from 'types';
import { PAPER_ROOT, PAPER_DEFAULT_VALUES, STATUS_CLASS_NAMES } from 'core';
import { capitalizeFirstLetter } from 'utils';

export const usePaperProps = <E extends Element>(props: UsePaperProps): UsePaperPropsReturn<E> => {
  const {
    variant = PAPER_DEFAULT_VALUES.variant,
    elevation = PAPER_DEFAULT_VALUES.elevation,
    className,
    isSquare,
    style,
  } = props;

  return {
    root: {
      className: clsx(
        PAPER_ROOT,
        `variant${capitalizeFirstLetter(variant)}`,
        `elevation${elevation}`,
        isSquare && STATUS_CLASS_NAMES.isSquare,
        className
      ),
      style: { ...style },
    },
  };
};
