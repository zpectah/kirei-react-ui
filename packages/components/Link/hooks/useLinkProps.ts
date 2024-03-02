import clsx from 'clsx';
import { UseLinkProps, UseLinkPropsReturn } from 'types';
import { LINK_ROOT, STATUS_CLASS_NAMES } from 'core';

export const useLinkProps = <E extends Element>(props: UseLinkProps): UseLinkPropsReturn<E> => {
  const { style, className, isDisabled } = props;

  return {
    root: {
      className: clsx(LINK_ROOT, isDisabled && STATUS_CLASS_NAMES.isDisabled, className),
      style: { ...style },
    },
  };
};
