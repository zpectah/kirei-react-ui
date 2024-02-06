import clsx from 'clsx';
import { UseButtonProps, UseButtonPropsReturn } from 'types';
import {
  BUTTON_DEFAULT_VALUES,
  STATUS_CLASS_NAMES,
  SHAPE_SIZE_CLASS_NAMES,
  SHAPE_VARIANT_CLASS_NAME,
  BUTTON_ROOT,
  BUTTON_LABEL,
  BUTTON_ICON_START,
  BUTTON_ICON_END,
  BUTTON_ICON_LOADING,
} from 'core';
import { capitalizeFirstLetter } from 'utils';

export const useButtonProps = (props: UseButtonProps): UseButtonPropsReturn => {
  const {
    style,
    className,
    isLoading,
    isActive,
    isDisabled,
    fullWidth,
    size = BUTTON_DEFAULT_VALUES.size,
    variant = BUTTON_DEFAULT_VALUES.variant,
    color = BUTTON_DEFAULT_VALUES.color,
  } = props;

  const colorVariantClassName = {
    text: `${SHAPE_VARIANT_CLASS_NAME.text}${capitalizeFirstLetter(color)}`,
    contained: `${SHAPE_VARIANT_CLASS_NAME.contained}${capitalizeFirstLetter(color)}`,
    outlined: `${SHAPE_VARIANT_CLASS_NAME.outlined}${capitalizeFirstLetter(color)}`,
  };

  return {
    root: {
      className: clsx(
        BUTTON_ROOT,
        SHAPE_VARIANT_CLASS_NAME[variant],
        SHAPE_SIZE_CLASS_NAMES[size],
        colorVariantClassName[variant],
        isLoading && STATUS_CLASS_NAMES.isLoading,
        isDisabled && STATUS_CLASS_NAMES.isDisabled,
        isActive && STATUS_CLASS_NAMES.isActive,
        fullWidth && STATUS_CLASS_NAMES.isFullWidth,
        className
      ),
      style: { ...style },
    },
    label: {
      className: BUTTON_LABEL,
      style: {},
    },
    iconStart: {
      className: BUTTON_ICON_START,
      style: {},
    },
    iconEnd: {
      className: BUTTON_ICON_END,
      style: {},
    },
    iconLoading: {
      className: BUTTON_ICON_LOADING,
      style: {},
    },
  };
};
