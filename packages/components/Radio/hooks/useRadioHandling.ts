import { ChangeEvent, FocusEvent, useImperativeHandle, useRef, useState } from 'react';
import { UseRadioHandlingProps, UseRadioHandlingReturn } from 'types';

export const useRadioHandling = (props: UseRadioHandlingProps): UseRadioHandlingReturn => {
  const { checked, onChange, onFocus, onBlur, ref } = props;

  const [isChecked, setIsChecked] = useState<boolean | undefined>(checked);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    if (onChange) onChange(event);
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(event);
  };

  // If we want to also use this reference
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  return {
    checked: isChecked,
    focused: isFocused,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    inputRef,
  };
};
