import React, { forwardRef } from 'react';
import { RadioProps } from 'types';
// import {RADIO_DEFAULT_VALUES} from "core";
import { useRadioProps, useRadioStyles } from './hooks';

const Radio = forwardRef<HTMLInputElement, RadioProps>((props: RadioProps, ref) => {
  const { children, className, style, styles, ...rest } = props;
  const styleProps = {};

  const {
    composedStyles: { root },
  } = useRadioStyles({ styles }, { ...styleProps });
  const { root: rootProps } = useRadioProps({ style, className, ...styleProps });

  return (
    <input type="radio" ref={ref} css={root} {...rootProps} {...rest}>
      {children}
    </input>
  );
});

export default Radio;
