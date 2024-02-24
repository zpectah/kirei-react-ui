import clsx from 'clsx';
import { UseButtonProps, UseButtonPropsReturn } from 'types';
import {
  BUTTON_DEFAULT_VALUES,
  BUTTON_ICON_END,
  BUTTON_ICON_LOADING,
  BUTTON_ICON_START,
  BUTTON_LABEL,
  BUTTON_ROOT,
  SHAPE_SIZE_CLASS_NAMES,
  SHAPE_VARIANT_CLASS_NAME,
  STATUS_CLASS_NAMES,
} from 'core';
import { capitalizeFirstLetter } from 'utils';

export const useButtonProps = (props: UseButtonProps): UseButtonPropsReturn => {
  const {
    color = BUTTON_DEFAULT_VALUES.color,
    size = BUTTON_DEFAULT_VALUES.size,
    variant = BUTTON_DEFAULT_VALUES.variant,
    className,
    isActive,
    isDisabled,
    isFullWidth,
    isLoading,
    slotProps,
    style,
  } = props;
  const {
    labelProps: { style: labelStyle, className: labelClassName, ...restOfLabelProps },
    iconStartProps: { style: iconStartStyle, className: iconStartClassName, ...restOfIconStartProps },
    iconEndProps: { style: iconEndStyle, className: iconEndClassName, ...restOfIconEndProps },
    iconLoadingProps: { style: iconLoadingStyle, className: iconLoadingClassName, ...restOfIconLoadingProps },
  } = slotProps;

  const colorVariantClassName = {
    text: `${SHAPE_VARIANT_CLASS_NAME.text}${capitalizeFirstLetter(color)}`,
    contained: `${SHAPE_VARIANT_CLASS_NAME.contained}${capitalizeFirstLetter(color)}`,
    outlined: `${SHAPE_VARIANT_CLASS_NAME.outlined}${capitalizeFirstLetter(color)}`,
  };

  return {
    root: {
      className: clsx(
        BUTTON_ROOT,
        `variant${capitalizeFirstLetter(variant)}`,
        SHAPE_SIZE_CLASS_NAMES[size],
        colorVariantClassName[variant],
        isLoading && STATUS_CLASS_NAMES.isLoading,
        isDisabled && STATUS_CLASS_NAMES.isDisabled,
        isActive && STATUS_CLASS_NAMES.isActive,
        isFullWidth && STATUS_CLASS_NAMES.isFullWidth,
        className
      ),
      style: { ...style },
    },
    label: {
      className: clsx(BUTTON_LABEL, labelClassName),
      style: { ...labelStyle },
      ...restOfLabelProps,
    },
    iconStart: {
      className: clsx(BUTTON_ICON_START, iconStartClassName),
      style: { ...iconStartStyle },
      ...restOfIconStartProps,
    },
    iconEnd: {
      className: clsx(BUTTON_ICON_END, iconEndClassName),
      style: { ...iconEndStyle },
      ...restOfIconEndProps,
    },
    iconLoading: {
      className: clsx(BUTTON_ICON_LOADING, iconLoadingClassName),
      style: { ...iconLoadingStyle },
      ...restOfIconLoadingProps,
    },
  };
};
