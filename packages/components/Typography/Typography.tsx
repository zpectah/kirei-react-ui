import React, { ElementType } from 'react';
import { TypographyProps } from 'types';
import { TYPOGRAPHY_DEFAULT_VALUES } from 'core';
import { useTypographyStyles, useTypographyProps } from './hooks';

const Typography = <T extends ElementType>(props: TypographyProps<T>) => {
  const {
    as: Component = TYPOGRAPHY_DEFAULT_VALUES.as,
    variant = TYPOGRAPHY_DEFAULT_VALUES.variant,
    color = TYPOGRAPHY_DEFAULT_VALUES.color,
    children,
    className,
    style,
    styles,
    isTruncated,
    ...rest
  } = props;
  const styleProps = { variant, color, isTruncated };

  const {
    composedStyles: { root },
  } = useTypographyStyles({ styles }, { ...styleProps });
  const { root: rootProps } = useTypographyProps({ style, className, ...styleProps });

  return (
    <Component css={root} {...rootProps} {...rest}>
      {children}
    </Component>
  );
};

export default Typography;
