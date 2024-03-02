import React, { forwardRef } from 'react';
import { SwitchProps } from 'types';
import { useSwitchHandling, useSwitchProps, useSwitchStyles } from './hooks';

const Switch = forwardRef<HTMLInputElement, SwitchProps>((props: SwitchProps, ref) => {
  const { className, style, styles, onChange, onFocus, onBlur, checked, isDisabled, slotProps, labelRef, ...rest } =
    props;

  const styleProps = { isDisabled };
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
