import React, { forwardRef, cloneElement, useMemo } from 'react';
import { ControlLabelProps } from 'types';
import { CONTROL_LABEL_DEFAULT_VALUES } from 'core';
import { useControlLabelProps, useControlLabelStyles } from './hooks';
import { Typography } from '../Typography';

const ControlLabel = forwardRef<HTMLLabelElement, ControlLabelProps>((props: ControlLabelProps, ref) => {
  const {
    labelPlacement = CONTROL_LABEL_DEFAULT_VALUES.labelPlacement,
    gap = CONTROL_LABEL_DEFAULT_VALUES.gap,
    checked,
    className,
    control,
    inputProps,
    inputRef,
    isDisabled,
    label,
    onBlur,
    onChange,
    onFocus,
    required,
    style,
    styles,
    value,
    ...rest
  } = props;
  const styleProps = { labelPlacement, gap };

  const controlProps = useMemo(() => {
    const fieldChecked = control.props.checked || checked;
    const fieldValue = control.props.value || value;
    const fieldDisabled = control.props.isDisabled || isDisabled;

    return {
      checked: fieldChecked,
      isDisabled: fieldDisabled,
      ref: inputRef,
      value: fieldValue,
      onBlur,
      onChange,
      onFocus,
      required,
      ...inputProps,
    };
  }, [inputRef, inputProps, control, checked, value, onChange, onFocus, onBlur, required]);

  const {
    composedStyles: { root },
  } = useControlLabelStyles({ styles }, { ...styleProps });
  const { root: rootProps } = useControlLabelProps({
    style,
    className,
    isDisabled: controlProps.isDisabled,
    ...styleProps,
  });

  return (
    <label ref={ref} css={root} {...rootProps} {...rest}>
      {cloneElement(control, controlProps)}
      <Typography as="span">{label}</Typography>
    </label>
  );
});

export default ControlLabel;
