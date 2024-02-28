import React, { forwardRef, useRef, useImperativeHandle, useState, ChangeEvent } from 'react';
import { RadioProps } from 'types';
import { RADIO_DEFAULT_VALUES } from 'core';
import { useRadioProps, useRadioStyles } from './hooks';
import { RadioIcon, RadioEmptyIcon } from 'icons';

const Radio = forwardRef<HTMLInputElement, RadioProps>((props: RadioProps, ref) => {
  const {
    size = RADIO_DEFAULT_VALUES.size,
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
    checkedIcon: slots?.checkedIcon || <RadioIcon />,
    uncheckedIcon: slots?.uncheckedIcon || <RadioEmptyIcon />,
  };

  const [isChecked, setIsChecked] = useState<boolean | undefined>(checked);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    if (onChange) onChange(event);
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
    ...styleProps,
  });

  return (
    <label ref={labelRef} css={label} {...labelProps}>
      <input
        type="radio"
        ref={inputRef}
        checked={isChecked}
        onChange={handleRadioChange}
        css={root}
        {...rootProps}
        {...rest}
      />
      {isChecked ? defaultSlots.checkedIcon : defaultSlots.uncheckedIcon}
    </label>
  );
});

export default Radio;
