import React, { forwardRef, ElementType } from 'react';
import { ButtonProps, PolymorphicIntrinsicElementRef } from 'types';
import { BUTTON_DEFAULT_VALUES } from 'core';
import { useButtonStyles, useButtonProps } from './hooks';

const Button = <T extends ElementType>(props: ButtonProps<T>, ref: PolymorphicIntrinsicElementRef<T>) => {
  const {
    as: Component = BUTTON_DEFAULT_VALUES.as,
    color = BUTTON_DEFAULT_VALUES.color,
    size = BUTTON_DEFAULT_VALUES.size,
    variant = BUTTON_DEFAULT_VALUES.variant,
    children,
    className,
    endIcon,
    fullWidth,
    isActive,
    isDisabled,
    isLoading,
    loadingIcon,
    startIcon,
    style,
    styles,
    ...rest
  } = props;
  const buttonStyleProps = {
    isLoading,
    isDisabled,
    isActive,
    fullWidth,
    size,
    variant,
    color,
  };

  const {
    composedStyles: { root, label, iconStart, iconEnd, iconLoading },
  } = useButtonStyles({ styles }, { ...buttonStyleProps });
  const {
    root: rootProps,
    label: labelProps,
    iconStart: iconStartProps,
    iconEnd: iconEndProps,
    iconLoading: iconLoadingProps,
  } = useButtonProps({
    style,
    className,
    ...buttonStyleProps,
  });

  return (
    <Component ref={ref} css={root} {...rootProps} {...rest}>
      {isLoading && (
        <span css={iconLoading} {...iconLoadingProps}>
          {loadingIcon ? loadingIcon : <>loading icon</>}
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
