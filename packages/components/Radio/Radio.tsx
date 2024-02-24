import React, { forwardRef, useRef, useImperativeHandle, useState, ChangeEvent } from 'react';
import { RadioProps } from 'types';
// import {RADIO_DEFAULT_VALUES} from "core";
import { useRadioProps, useRadioStyles } from './hooks';
import { RadioIcon, RadioEmptyIcon } from 'icons';

const Radio = forwardRef<HTMLInputElement, RadioProps>((props: RadioProps, ref) => {
  const { className, style, styles, onChange, checked, ...rest } = props;
  const styleProps = {};

  const [isChecked, setIsChecked] = useState<boolean | undefined>(checked);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    if (onChange) onChange(event);
  };

  // Expose all HTMLInputElement properties and methods
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  const {
    composedStyles: { root },
  } = useRadioStyles({ styles }, { ...styleProps });
  const { root: rootProps } = useRadioProps({ style, className, ...styleProps });

  return (
    <label>
      <input
        type="radio"
        ref={inputRef}
        checked={isChecked}
        onChange={handleRadioChange}
        css={root}
        {...rootProps}
        {...rest}
      />
      {isChecked ? <RadioIcon /> : <RadioEmptyIcon />}
    </label>
  );
});

export default Radio;
