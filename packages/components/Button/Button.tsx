import React, { forwardRef, ElementType } from 'react';
import { ButtonProps, PolymorphicIntrinsicElementRef } from 'types';
import { BUTTON_DEFAULT_VALUES } from 'core';
import { LoaderHorizontalIcon } from 'icons';
import { useButtonStyles, useButtonProps } from './hooks';

const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: PolymorphicIntrinsicElementRef<T>) => {
  const {
    as: Component = BUTTON_DEFAULT_VALUES.as,
    color = BUTTON_DEFAULT_VALUES.color,
    size = BUTTON_DEFAULT_VALUES.size,
    variant = BUTTON_DEFAULT_VALUES.variant,
    children,
    className,
    endIcon,
    isFullWidth,
    isActive,
    isDisabled,
    isLoading,
    slots,
    slotProps,
    startIcon,
    style,
    styles,
    ...rest
  } = props;

  const styleProps = {
    isLoading,
    isDisabled,
    isActive,
    isFullWidth,
    size,
    variant,
    color,
  };
  const defaultSlotProps = {
    labelProps: { ...slotProps?.labelProps },
    iconStartProps: { ...slotProps?.iconStartProps },
    iconEndProps: { ...slotProps?.iconEndProps },
    iconLoadingProps: { ...slotProps?.iconLoadingProps },
  };
  const defaultSlots = {
    loadingIcon: slots?.loadingIcon || <LoaderHorizontalIcon />,
  };

  const {
    composedStyles: { root, label, iconStart, iconEnd, iconLoading },
  } = useButtonStyles({ styles }, { ...styleProps });
  const {
    root: rootProps,
    label: labelProps,
    iconStart: iconStartProps,
    iconEnd: iconEndProps,
    iconLoading: iconLoadingProps,
  } = useButtonProps({
    style,
    className,
    slotProps: defaultSlotProps,
    ...styleProps,
  });

  return (
    <Component ref={ref} css={root} {...rootProps} {...rest}>
      {isLoading && (
        <span css={iconLoading} {...iconLoadingProps}>
          {defaultSlots.loadingIcon}
        </span>
      )}
      {startIcon && (
        <span css={iconStart} {...iconStartProps}>
          {startIcon}
        </span>
      )}
      <span css={label} {...labelProps}>
        {children}
      </span>
      {endIcon && (
        <span css={iconEnd} {...iconEndProps}>
          {endIcon}
        </span>
      )}
    </Component>
  );
};

export default forwardRef(Button);
