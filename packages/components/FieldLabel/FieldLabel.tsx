import React, { forwardRef, ElementType, ForwardedRef } from 'react';
import { FieldLabelProps } from 'types';
import { FIELD_LABEL_DEFAULT_VALUES } from 'core';
import { useFieldLabelProps, useFieldLabelStyles } from './hooks';

const FieldLabel = <T extends ElementType>(props: FieldLabelProps<T>, ref: ForwardedRef<FieldLabelProps<T>>) => {
  const { as: Component = FIELD_LABEL_DEFAULT_VALUES.as, children, className, style, styles, ...rest } = props;
  const styleProps = {};

  const {
    composedStyles: { root },
  } = useFieldLabelStyles({ styles }, { ...styleProps });
  const { root: rootProps } = useFieldLabelProps({ style, className, ...styleProps });

  return (
    <Component ref={ref} css={root} {...rootProps} {...rest}>
      {children}
    </Component>
  );
};

export default forwardRef(FieldLabel);
