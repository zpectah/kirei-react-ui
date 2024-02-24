import React, { forwardRef, useState, useRef, useImperativeHandle, ChangeEvent } from 'react';
import { CheckboxProps } from 'types';
// import {CHECKBOX_DEFAULT_VALUES} from "core";
import { CheckboxIcon, CheckboxEmptyIcon, CheckboxIndeterminateIcon } from 'icons';
import { useCheckboxProps, useCheckboxStyles } from './hooks';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props: CheckboxProps, ref) => {
  const { className, style, styles, onChange, checked, ...rest } = props;
  const styleProps = {};

  const [isChecked, setIsChecked] = useState<boolean | undefined>(checked);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    if (onChange) onChange(event);
  };

  // Expose all HTMLInputElement properties and methods
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  const {
    composedStyles: { root },
  } = useCheckboxStyles({ styles }, { ...styleProps });
  const { root: rootProps } = useCheckboxProps({ style, className, ...styleProps });

  return (
    <label>
      <input
        type="checkbox"
        ref={inputRef}
        checked={isChecked}
        onChange={handleCheckboxChange}
        css={root}
        {...rootProps}
        {...rest}
      />
      {isChecked ? <CheckboxIcon /> : <CheckboxEmptyIcon />}
      {!isChecked && isChecked && <CheckboxIndeterminateIcon />}
    </label>
  );
});

export default Checkbox;
