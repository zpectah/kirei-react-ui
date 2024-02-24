import React, { forwardRef, ElementType, ForwardedRef } from 'react';
import { LabelProps } from 'types';
import { LABEL_DEFAULT_VALUES } from 'core';
import { useLabelProps, useLabelStyles } from './hooks';

const Label = <T extends ElementType>(props: LabelProps<T>, ref: ForwardedRef<LabelProps<T>>) => {
  const { as: Component = LABEL_DEFAULT_VALUES.as, children, className, style, styles, ...rest } = props;
  const styleProps = {};

  const {
    composedStyles: { root },
  } = useLabelStyles({ styles }, { ...styleProps });
  const { root: rootProps } = useLabelProps({ style, className, ...styleProps });

  return (
    <Component ref={ref} css={root} {...rootProps} {...rest}>
      {children}
    </Component>
  );
};

export default forwardRef(Label);
