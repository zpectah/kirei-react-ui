import React, { forwardRef } from 'react';
import { CheckboxProps } from 'types';
import { CHECKBOX_DEFAULT_VALUES } from 'core';
import { CheckboxIcon, CheckboxEmptyIcon, CheckboxIndeterminateIcon } from 'icons';
import { useCheckboxHandling, useCheckboxProps, useCheckboxStyles } from './hooks';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props: CheckboxProps, ref) => {
  const {
    color = CHECKBOX_DEFAULT_VALUES.color,
    size = CHECKBOX_DEFAULT_VALUES.size,
    className,
    style,
    styles,
    onChange,
    onFocus,
    onBlur,
    checked,
    indeterminate,
    isDisabled,
    slots,
    slotProps,
    labelRef,
    ...rest
  } = props;

  const styleProps = { color, size };
  const defaultSlotProps = { labelProps: { ...slotProps?.labelProps } };
  const defaultSlots = {
    checkedIcon: slots?.checkedIcon || <CheckboxIcon />,
    uncheckedIcon: slots?.uncheckedIcon || <CheckboxEmptyIcon />,
    indeterminateIcon: slots?.indeterminateIcon || <CheckboxIndeterminateIcon />,
  };

  const { inputRef, focused, ...handlingProps } = useCheckboxHandling({ checked, onChange, onBlur, onFocus, ref });
  const {
    composedStyles: { root, label },
  } = useCheckboxStyles({ styles }, { ...styleProps });
  const { root: rootProps, label: labelProps } = useCheckboxProps({
    style,
    className,
    isDisabled,
    indeterminate,
    slotProps: defaultSlotProps,
    isChecked: handlingProps.checked || false,
    isFocused: focused,
    ...styleProps,
  });

  return (
    <label ref={labelRef} css={label} {...labelProps}>
      <input type="checkbox" ref={inputRef} css={root} {...handlingProps} {...rootProps} {...rest} />
      {indeterminate
        ? defaultSlots.indeterminateIcon
        : handlingProps.checked
          ? defaultSlots.checkedIcon
          : defaultSlots.uncheckedIcon}
    </label>
  );
});

export default Checkbox;
