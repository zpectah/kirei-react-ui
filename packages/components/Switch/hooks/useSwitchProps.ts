import clsx from 'clsx';
import { UseSwitchProps, UseSwitchPropsReturn } from 'types';
import { SWITCH_ROOT, SWITCH_INPUT, SWITCH_LABEL, SWITCH_SLIDER } from 'core';

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
    },
    label: {
      className: clsx(
        SWITCH_ROOT,
        SWITCH_LABEL,
        isDisabled && 'isDisabled',
        isChecked && 'isChecked',
        isFocused && 'isFocused',
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
