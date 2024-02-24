import React, { forwardRef, ElementType, ForwardedRef } from 'react';
import { ControlLabelProps } from 'types';
import { CONTROL_LABEL_DEFAULT_VALUES } from 'core';
import { useControlLabelProps, useControlLabelStyles } from './hooks';

const ControlLabel = <T extends ElementType>(props: ControlLabelProps<T>, ref: ForwardedRef<ControlLabelProps<T>>) => {
  const { as: Component = CONTROL_LABEL_DEFAULT_VALUES.as, children, className, style, styles, ...rest } = props;
  const styleProps = {};

  const {
    composedStyles: { root },
  } = useControlLabelStyles({ styles }, { ...styleProps });
  const { root: rootProps } = useControlLabelProps({ style, className, ...styleProps });

  return (
    <Component ref={ref} css={root} {...rootProps} {...rest}>
      {children}
    </Component>
  );
};

export default forwardRef(ControlLabel);
