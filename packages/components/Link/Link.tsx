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
    ...rest
  } = props;
  const linkStyleProps = { variant, color, underline };

  const {
    composedStyles: { root },
  } = useLinkStyles({ styles }, { ...linkStyleProps });
  const { root: rootProps } = useLinkProps({ style, className, ...linkStyleProps });

  return (
    <Component css={root} {...rootProps} {...rest}>
      {children}
    </Component>
  );
};

export default Link;
