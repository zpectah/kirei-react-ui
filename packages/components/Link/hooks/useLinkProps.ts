import clsx from 'clsx';
import { UseLinkProps, UseLinkPropsReturn } from 'types';
import { LINK_ROOT } from 'core';

export const useLinkProps = (props: UseLinkProps): UseLinkPropsReturn => {
  const { style, className } = props;

  return {
    root: {
      className: clsx(LINK_ROOT, className),
      style: { ...style },
    },
  };
};
