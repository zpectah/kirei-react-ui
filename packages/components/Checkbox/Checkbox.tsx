import React, { forwardRef, useState, useRef, useImperativeHandle, ChangeEvent } from 'react';
import { CheckboxProps } from 'types';
import { CHECKBOX_DEFAULT_VALUES } from 'core';
import { CheckboxIcon, CheckboxEmptyIcon, CheckboxIndeterminateIcon } from 'icons';
import { useCheckboxProps, useCheckboxStyles } from './hooks';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props: CheckboxProps, ref) => {
  const {
    size = CHECKBOX_DEFAULT_VALUES.size,
    className,
    style,
    styles,
    onChange,
    checked,
    isDisabled,
    slots,
    slotProps,
    labelRef,
    ...rest
  } = props;

  const styleProps = { size, isDisabled };
  const defaultSlotProps = { labelProps: { ...slotProps?.labelProps } };
  const defaultSlots = {
    checkedIcon: slots?.checkedIcon || <CheckboxIcon />,
    uncheckedIcon: slots?.uncheckedIcon || <CheckboxEmptyIcon />,
    indeterminateIcon: slots?.indeterminateIcon || <CheckboxIndeterminateIcon />,
  };

  const [isChecked, setIsChecked] = useState<boolean | undefined>(checked);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    if (onChange) onChange(event);
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
    ...styleProps,
  });

  return (
    <label ref={labelRef} css={label} {...labelProps}>
      <input
        type="checkbox"
        ref={inputRef}
        checked={isChecked}
        onChange={handleCheckboxChange}
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
