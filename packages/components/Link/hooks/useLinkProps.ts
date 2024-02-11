import clsx from 'clsx';
import { UseLinkProps, UseLinkPropsReturn } from 'types';
import { LINK_ROOT, STATUS_CLASS_NAMES } from 'core';

export const useLinkProps = (props: UseLinkProps): UseLinkPropsReturn => {
  const { style, className, isDisabled } = props;

  return {
    root: {
      className: clsx(LINK_ROOT, isDisabled && STATUS_CLASS_NAMES.isDisabled, className),
      style: { ...style },
    },
  };
};
