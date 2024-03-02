import clsx from 'clsx';
import { UseRadioProps, UseRadioPropsReturn } from 'types';
import { RADIO_ROOT, RADIO_INPUT, RADIO_LABEL, STATUS_CLASS_NAMES } from 'core';

export const useRadioProps = (props: UseRadioProps): UseRadioPropsReturn => {
  const { style, className, slotProps, isDisabled, isChecked, isFocused } = props;
  const {
    labelProps: { className: labelClassName, style: labelStyle, ...restOfLabelProps },
  } = slotProps;

  return {
    root: {
      className: clsx(RADIO_INPUT, className),
      style: { ...style },
      'aria-checked': isChecked,
    },
    label: {
      className: clsx(
        RADIO_ROOT,
        RADIO_LABEL,
        isDisabled && STATUS_CLASS_NAMES.isDisabled,
        isChecked && STATUS_CLASS_NAMES.isChecked,
        isFocused && STATUS_CLASS_NAMES.isFocused,
        labelClassName
      ),
      style: { ...labelStyle },
      ...restOfLabelProps,
    },
  };
};
