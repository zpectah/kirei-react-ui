import React, { forwardRef, cloneElement, useMemo } from 'react';
import { ControlLabelProps } from 'types';
// import { CONTROL_LABEL_DEFAULT_VALUES } from 'core';
import { useControlLabelProps, useControlLabelStyles } from './hooks';
import { Typography } from '../Typography';

const ControlLabel = forwardRef<HTMLLabelElement, ControlLabelProps>((props: ControlLabelProps, ref) => {
  const {
    control,
    inputRef,
    inputProps,
    className,
    style,
    styles,
    checked,
    value,
    onChange,
    onFocus,
    onBlur,
    required,
    label,
    labelPlacement, // TODO
    isDisabled,
    ...rest
  } = props;
  const styleProps = {};

  const controlProps = useMemo(() => {
    const fieldChecked = control.props.checked || checked;
    const fieldValue = control.props.value || value;
    const fieldDisabled = control.props.isDisabled || isDisabled;

    return {
      ref: inputRef,
      checked: fieldChecked,
      value: fieldValue,
      isDisabled: fieldDisabled,
      onChange,
      onFocus,
      onBlur,
      required,
      'data-test': 'xyz',
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
