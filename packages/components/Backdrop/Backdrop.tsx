import React, { ElementType } from 'react';
import { BackdropProps } from 'types';
import { BACKDROP_DEFAULT_VALUES } from 'core';
import { useBackdropStyles, useBackdropProps } from './hooks';

const Backdrop = <T extends ElementType>(props: BackdropProps<T>) => {
  const {
    as: Component = BACKDROP_DEFAULT_VALUES.as,
    background = BACKDROP_DEFAULT_VALUES.background,
    children,
    className,
    style,
    styles,
    ...rest
  } = props;
  const styleProps = { background };

  const {
    composedStyles: { root },
  } = useBackdropStyles({ styles }, { ...styleProps });
  const { root: rootProps } = useBackdropProps({ style, className, ...styleProps });

  return (
    <Component css={root} {...rootProps} {...rest}>
      {children}
    </Component>
  );
};

export default Backdrop;
