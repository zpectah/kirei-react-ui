import clsx from 'clsx';
import { UseCheckboxProps, UseCheckboxPropsReturn, CheckboxRestProps } from 'types';
import { CHECKBOX_ROOT, CHECKBOX_INPUT, CHECKBOX_LABEL, STATUS_CLASS_NAMES } from 'core';

export const useCheckboxProps = (props: UseCheckboxProps): UseCheckboxPropsReturn => {
  const { style, className, slotProps, isDisabled, isChecked, isFocused, indeterminate } = props;
  const {
    labelProps: { className: labelClassName, style: labelStyle, ...restOfLabelProps },
  } = slotProps;

  return {
    root: {
      className: clsx(CHECKBOX_INPUT, className),
      style: { ...style },
      'aria-checked': isChecked,
      'data-indeterminate': indeterminate,
    } as Partial<CheckboxRestProps>,
    label: {
      className: clsx(
        CHECKBOX_ROOT,
        CHECKBOX_LABEL,
        isDisabled && STATUS_CLASS_NAMES.isDisabled,
        isChecked && STATUS_CLASS_NAMES.isChecked,
        isFocused && STATUS_CLASS_NAMES.isFocused,
        indeterminate && STATUS_CLASS_NAMES.isIndeterminate,
        labelClassName
      ),
      style: { ...labelStyle },
      ...restOfLabelProps,
    },
  };
};
