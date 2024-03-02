import clsx from 'clsx';
import { UseSwitchProps, UseSwitchPropsReturn } from 'types';
import { SWITCH_ROOT, SWITCH_INPUT, SWITCH_LABEL, SWITCH_SLIDER, STATUS_CLASS_NAMES } from 'core';

export const useSwitchProps = (props: UseSwitchProps): UseSwitchPropsReturn => {
  const { style, className, slotProps, isDisabled, isChecked, isFocused } = props;
  const {
    labelProps: { className: labelClassName, style: labelStyle, ...restOfLabelProps },
    sliderProps: { className: sliderClassName, style: sliderStyle, ...restOfSliderProps },
  } = slotProps;

  return {
    root: {
      className: clsx(SWITCH_INPUT, className),
      style: { ...style },
      'aria-checked': isChecked,
    },
    label: {
      className: clsx(
        SWITCH_ROOT,
        SWITCH_LABEL,
        isDisabled && STATUS_CLASS_NAMES.isDisabled,
        isChecked && STATUS_CLASS_NAMES.isChecked,
        isFocused && STATUS_CLASS_NAMES.isFocused,
        labelClassName
      ),
      style: { ...labelStyle },
      ...restOfLabelProps,
    },
    slider: {
      className: clsx(SWITCH_SLIDER, sliderClassName),
      style: { ...sliderStyle },
      ...restOfSliderProps,
    },
  };
};
