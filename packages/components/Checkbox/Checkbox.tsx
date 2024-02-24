import React, { forwardRef } from 'react';
import { CheckboxProps } from 'types';
// import {CHECKBOX_DEFAULT_VALUES} from "core";
import { useCheckboxProps, useCheckboxStyles } from './hooks';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props: CheckboxProps, ref) => {
  const { children, className, style, styles, ...rest } = props;
  const styleProps = {};

  const {
    composedStyles: { root },
  } = useCheckboxStyles({ styles }, { ...styleProps });
  const { root: rootProps } = useCheckboxProps({ style, className, ...styleProps });

  return (
    <input type="checkbox" ref={ref} css={root} {...rootProps} {...rest}>
      {children}
    </input>
  );
});

export default Checkbox;
