import React, { forwardRef, useRef, useImperativeHandle, useState, ChangeEvent, FocusEvent } from 'react';
import { RadioProps } from 'types';
import { RADIO_DEFAULT_VALUES } from 'core';
import { useRadioProps, useRadioStyles } from './hooks';
import { RadioIcon, RadioEmptyIcon } from 'icons';

const Radio = forwardRef<HTMLInputElement, RadioProps>((props: RadioProps, ref) => {
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
    checkedIcon: slots?.checkedIcon || <RadioIcon />,
    uncheckedIcon: slots?.uncheckedIcon || <RadioEmptyIcon />,
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
  } = useRadioStyles({ styles }, { ...styleProps });
  const { root: rootProps, label: labelProps } = useRadioProps({
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
        type="radio"
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
    </label>
  );
});

export default Radio;
