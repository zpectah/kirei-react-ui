import React, { forwardRef, useState, useRef, useImperativeHandle, ChangeEvent, FocusEvent } from 'react';
import { CheckboxProps } from 'types';
// import { CHECKBOX_DEFAULT_VALUES } from 'core';
import { CheckboxIcon, CheckboxEmptyIcon, CheckboxIndeterminateIcon } from 'icons';
import { useCheckboxProps, useCheckboxStyles } from './hooks';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props: CheckboxProps, ref) => {
  const {
    className,
    style,
    styles,
    onChange,
    onFocus,
    onBlur,
    checked,
    isDisabled,
    slots,
    slotProps,
    labelRef,
    ...rest
  } = props;

  const styleProps = { isDisabled };
  const defaultSlotProps = { labelProps: { ...slotProps?.labelProps } };
  const defaultSlots = {
    checkedIcon: slots?.checkedIcon || <CheckboxIcon />,
    uncheckedIcon: slots?.uncheckedIcon || <CheckboxEmptyIcon />,
    indeterminateIcon: slots?.indeterminateIcon || <CheckboxIndeterminateIcon />,
  };

  const [isChecked, setIsChecked] = useState<boolean | undefined>(checked);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    if (onChange) onChange(event);
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(event);
  };

  // If we want to also use this reference
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  const {
    composedStyles: { root, label },
  } = useCheckboxStyles({ styles }, { ...styleProps });
  const { root: rootProps, label: labelProps } = useCheckboxProps({
    style,
    className,
    slotProps: defaultSlotProps,
    isChecked: isChecked || false,
    isFocused,
    ...styleProps,
  });

  return (
    <label ref={labelRef} css={label} {...labelProps}>
      <input
        type="checkbox"
        ref={inputRef}
        checked={isChecked}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        css={root}
        {...rootProps}
        {...rest}
      />
      {isChecked ? defaultSlots.checkedIcon : defaultSlots.uncheckedIcon}
      {!isChecked && isChecked && defaultSlots.indeterminateIcon}
    </label>
  );
});

export default Checkbox;
