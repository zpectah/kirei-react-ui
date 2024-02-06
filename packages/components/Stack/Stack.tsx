import React, { ElementType } from 'react';
import { StackProps } from 'types';
import { STACK_DEFAULT_VALUES } from 'core';
import { useStackStyles, useStackProps } from './hooks';

const Stack = <T extends ElementType>(props: StackProps<T>) => {
  const {
    as: Component = STACK_DEFAULT_VALUES.as,
    direction = STACK_DEFAULT_VALUES.direction,
    gap = STACK_DEFAULT_VALUES.gap,
    alignItems = STACK_DEFAULT_VALUES.alignItems,
    alignContent = STACK_DEFAULT_VALUES.alignContent,
    justifyItems = STACK_DEFAULT_VALUES.justifyItems,
    justifyContent = STACK_DEFAULT_VALUES.justifyContent,
    children,
    className,
    style,
    styles,
    isInline,
    ...rest
  } = props;
  const stackStyleProps = {
    alignContent,
    alignItems,
    direction,
    gap,
    isInline,
    justifyContent,
    justifyItems,
  };

  const {
    composedStyles: { root },
  } = useStackStyles({ styles }, { ...stackStyleProps });
  const { root: rootProps } = useStackProps({ style, className, ...stackStyleProps });

  return (
    <Component css={root} {...rootProps} {...rest}>
      {children}
    </Component>
  );
};

export default Stack;
