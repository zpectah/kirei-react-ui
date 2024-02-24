import clsx from 'clsx';
import { UseIconButtonProps, UseIconButtonPropsReturn } from 'types';
import {
  ICON_BUTTON_DEFAULT_VALUES,
  ICON_BUTTON_ROOT,
  ICON_BUTTON_ICON,
  SHAPE_VARIANT_CLASS_NAME,
  SHAPE_SIZE_CLASS_NAMES,
} from 'core';
import { capitalizeFirstLetter } from 'utils';

export const useIconButtonProps = (props: UseIconButtonProps): UseIconButtonPropsReturn => {
  const {
    size = ICON_BUTTON_DEFAULT_VALUES.size,
    color = ICON_BUTTON_DEFAULT_VALUES.color,
    variant = ICON_BUTTON_DEFAULT_VALUES.variant,
    shape = ICON_BUTTON_DEFAULT_VALUES.shape,
    style,
    className,
    slotProps,
  } = props;
  const {
    iconProps: { style: iconStyle, className: iconClassName, ...restOfIconProps },
  } = slotProps;

  const colorVariantClassName = {
    text: `${SHAPE_VARIANT_CLASS_NAME.text}${capitalizeFirstLetter(color)}`,
    contained: `${SHAPE_VARIANT_CLASS_NAME.contained}${capitalizeFirstLetter(color)}`,
    outlined: `${SHAPE_VARIANT_CLASS_NAME.outlined}${capitalizeFirstLetter(color)}`,
  };

  return {
    root: {
      className: clsx(
        ICON_BUTTON_ROOT,
        `variant${capitalizeFirstLetter(variant)}`,
        `shape${capitalizeFirstLetter(shape)}`,
        SHAPE_SIZE_CLASS_NAMES[size],
        colorVariantClassName[variant],
        className
      ),
      style: { ...style },
    },
    icon: {
      className: clsx(ICON_BUTTON_ICON, iconClassName),
      style: { ...iconStyle },
      ...restOfIconProps,
    },
  };
};
