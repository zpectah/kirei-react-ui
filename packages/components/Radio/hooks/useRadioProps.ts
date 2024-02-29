import clsx from 'clsx';
import { UseRadioProps, UseRadioPropsReturn } from 'types';
import { RADIO_ROOT, RADIO_LABEL } from 'core';

export const useRadioProps = (props: UseRadioProps): UseRadioPropsReturn => {
  const { style, className, slotProps, isDisabled, isChecked, isFocused } = props;
  const {
    labelProps: { className: labelClassName, style: labelStyle, ...restOfLabelProps },
  } = slotProps;

  return {
    root: {
      className: clsx(RADIO_ROOT, className),
      style: { ...style },
    },
    label: {
      className: clsx(
        RADIO_LABEL,
        isDisabled && 'isDisabled',
        isChecked && 'isChecked',
        isFocused && 'isFocused',
        labelClassName
      ),
      style: { ...labelStyle },
      ...restOfLabelProps,
    },
  };
};
