import React, { ElementType } from 'react';
import { IconButtonProps } from 'types';
import { ICON_BUTTON_DEFAULT_VALUES } from 'core';
import { useIconButtonStyles, useIconButtonProps } from './hooks';

const IconButton = <T extends ElementType>(props: IconButtonProps<T>) => {
  const {
    as: Component = ICON_BUTTON_DEFAULT_VALUES.as,
    size = ICON_BUTTON_DEFAULT_VALUES.size,
    color = ICON_BUTTON_DEFAULT_VALUES.color,
    variant = ICON_BUTTON_DEFAULT_VALUES.variant,
    shape = ICON_BUTTON_DEFAULT_VALUES.shape,
    children,
    className,
    style,
    styles,
    slotProps,
    ...rest
  } = props;

  const styleProps = { size, color, variant, shape };
  const defaultSlotProps = {
    iconProps: { ...slotProps?.iconProps },
  };

  const {
    composedStyles: { root, icon },
  } = useIconButtonStyles({ styles }, { ...styleProps });
  const { root: rootProps, icon: iconProps } = useIconButtonProps({
    style,
    className,
    slotProps: defaultSlotProps,
    ...styleProps,
  });

  return (
    <Component css={root} {...rootProps} {...rest}>
      <span css={icon} {...iconProps}>
        {children}
      </span>
    </Component>
  );
};

export default IconButton;
