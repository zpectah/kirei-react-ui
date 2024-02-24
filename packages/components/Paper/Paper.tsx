import React, { ElementType } from 'react';
import { PaperProps } from 'types';
import { PAPER_DEFAULT_VALUES } from 'core';
import { usePaperStyles, usePaperProps } from './hooks';

const Paper = <T extends ElementType>(props: PaperProps<T>) => {
  const {
    as: Component = PAPER_DEFAULT_VALUES.as,
    color = PAPER_DEFAULT_VALUES.color,
    variant = PAPER_DEFAULT_VALUES.variant,
    children,
    className,
    disableElevation,
    isSquare,
    style,
    styles,
    ...rest
  } = props;
  const styleProps = { color, isSquare, disableElevation, variant };

  const {
    composedStyles: { root },
  } = usePaperStyles({ styles }, { ...styleProps });
  const { root: rootProps } = usePaperProps({ style, className, ...styleProps });

  return (
    <Component css={root} {...rootProps} {...rest}>
      {children}
    </Component>
  );
};

export default Paper;
