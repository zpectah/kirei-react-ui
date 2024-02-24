import clsx from 'clsx';
import { UseIconButtonProps, UseIconButtonPropsReturn } from 'types';
import { ICON_BUTTON_ROOT, ICON_BUTTON_ICON } from 'core';

export const useIconButtonProps = (props: UseIconButtonProps): UseIconButtonPropsReturn => {
  const { style, className, size, color, variant, slotProps } = props;

  const {
    iconProps: { style: iconStyle, className: iconClassName, ...restOfIconProps },
  } = slotProps;

  return {
    root: {
      className: clsx(ICON_BUTTON_ROOT, className),
      style: { ...style },
    },
    icon: {
      className: clsx(ICON_BUTTON_ICON, iconClassName),
      style: { ...iconStyle },
      ...restOfIconProps,
    },
  };
};
