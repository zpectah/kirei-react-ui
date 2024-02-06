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
  const containerStyleProps = {
    isFluid,
    maxWidth,
    xOffset,
  };

  const {
    composedStyles: { root },
  } = useContainerStyles({ styles }, { ...containerStyleProps });
  const { root: rootProps } = useContainerProps({ style, className, ...containerStyleProps });

  return (
    <Component css={root} {...rootProps} {...rest}>
      {children}
    </Component>
  );
};

export default Container;
