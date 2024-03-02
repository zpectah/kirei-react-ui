import React, { forwardRef } from 'react';
import { RadioProps } from 'types';
import { RADIO_DEFAULT_VALUES } from 'core';
import { RadioIcon, RadioEmptyIcon } from 'icons';
import { useRadioHandling, useRadioProps, useRadioStyles } from './hooks';

const Radio = forwardRef<HTMLInputElement, RadioProps>((props: RadioProps, ref) => {
  const {
    color = RADIO_DEFAULT_VALUES.color,
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

  const styleProps = { color };
  const defaultSlotProps = { labelProps: { ...slotProps?.labelProps } };
  const defaultSlots = {
    checkedIcon: slots?.checkedIcon || <RadioIcon />,
    uncheckedIcon: slots?.uncheckedIcon || <RadioEmptyIcon />,
  };

  const { inputRef, focused, ...handlingProps } = useRadioHandling({ checked, onChange, onBlur, onFocus, ref });
  const {
    composedStyles: { root, label },
  } = useRadioStyles({ styles }, { ...styleProps });
  const { root: rootProps, label: labelProps } = useRadioProps({
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
      <input type="radio" ref={inputRef} css={root} {...handlingProps} {...rootProps} {...rest} />
      {handlingProps.checked ? defaultSlots.checkedIcon : defaultSlots.uncheckedIcon}
    </label>
  );
});

export default Radio;
