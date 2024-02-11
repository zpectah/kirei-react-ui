import React, { ElementType } from 'react';
import { ContainerProps } from 'types';
import { CONTAINER_DEFAULT_VALUES } from 'core';
import { useContainerStyles, useContainerProps } from './hooks';

const Container = <T extends ElementType>(props: ContainerProps<T>) => {
  const {
    as: Component = CONTAINER_DEFAULT_VALUES.as,
    maxWidth = CONTAINER_DEFAULT_VALUES.maxWidth,
    xOffset = CONTAINER_DEFAULT_VALUES.xOffset,
    children,
    className,
    isFluid,
    style,
    styles,
    ...rest
  } = props;
  const styleProps = {
    isFluid,
    maxWidth,
    xOffset,
  };

  const {
    composedStyles: { root },
  } = useContainerStyles({ styles }, { ...styleProps });
  const { root: rootProps } = useContainerProps({ style, className, ...styleProps });

  return (
    <Component css={root} {...rootProps} {...rest}>
      {children}
    </Component>
  );
};

export default Container;
