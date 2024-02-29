import React, { forwardRef, useState, useRef, useImperativeHandle, ChangeEvent, FocusEvent } from 'react';
import { SwitchProps } from 'types';
// import { SWITCH_DEFAULT_VALUES } from 'core';
import { useSwitchProps, useSwitchStyles } from './hooks';

const Switch = forwardRef<HTMLInputElement, SwitchProps>((props: SwitchProps, ref) => {
  const { className, style, styles, onChange, onFocus, onBlur, checked, isDisabled, slotProps, labelRef, ...rest } =
    props;

  const styleProps = { isDisabled };
  const defaultSlotProps = { labelProps: { ...slotProps?.labelProps }, sliderProps: { ...slotProps?.sliderProps } };

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
    composedStyles: { root, label, slider },
  } = useSwitchStyles({ styles }, { ...styleProps });
  const {
    root: rootProps,
    label: labelProps,
    slider: sliderProps,
  } = useSwitchProps({
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
      <span css={slider} {...sliderProps} />
    </label>
  );
});

export default Switch;
