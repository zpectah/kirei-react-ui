import React, { forwardRef } from 'react';
import { SwitchProps } from 'types';
import { SWITCH_DEFAULT_VALUES } from 'core';
import { useSwitchHandling, useSwitchProps, useSwitchStyles } from './hooks';

const Switch = forwardRef<HTMLInputElement, SwitchProps>((props: SwitchProps, ref) => {
  const {
    color = SWITCH_DEFAULT_VALUES.color,
    size = SWITCH_DEFAULT_VALUES.size,
    className,
    style,
    styles,
    onChange,
    onFocus,
    onBlur,
    checked,
    isDisabled,
    slotProps,
    labelRef,
    ...rest
  } = props;

  const styleProps = { color, size };
  const defaultSlotProps = { labelProps: { ...slotProps?.labelProps }, sliderProps: { ...slotProps?.sliderProps } };

  const { inputRef, focused, ...handlingProps } = useSwitchHandling({ checked, onChange, onBlur, onFocus, ref });
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
    isDisabled,
    slotProps: defaultSlotProps,
    isChecked: handlingProps.checked || false,
    isFocused: focused,
    ...styleProps,
  });

  return (
    <label ref={labelRef} css={label} {...labelProps}>
      <input type="checkbox" ref={inputRef} css={root} {...handlingProps} {...rootProps} {...rest} />
      <span css={slider} {...sliderProps} />
    </label>
  );
});

export default Switch;
