import React, { ElementType } from 'react';
import { LinkProps } from 'types';
import { LINK_DEFAULT_VALUES } from 'core';
import { useLinkStyles, useLinkProps } from './hooks';

const Link = <T extends ElementType>(props: LinkProps<T>) => {
  const {
    as: Component = LINK_DEFAULT_VALUES.as,
    variant = LINK_DEFAULT_VALUES.variant,
    color = LINK_DEFAULT_VALUES.color,
    underline = LINK_DEFAULT_VALUES.underline,
    children,
    style,
    styles,
    className,
    isDisabled,
    ...rest
  } = props;
  const styleProps = { variant, color, underline, isDisabled };

  const {
    composedStyles: { root },
  } = useLinkStyles({ styles }, { ...styleProps });
  const { root: rootProps } = useLinkProps({ style, className, ...styleProps });

  return (
    <Component css={root} {...rootProps} {...rest}>
      {children}
    </Component>
  );
};

export default Link;
