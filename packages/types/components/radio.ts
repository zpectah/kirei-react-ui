import { ComponentPropsWithRef, ReactNode, RefObject } from 'react';
import { WithStyle, ElementRestProps, InputPickedProps } from '../common';
import { ComponentStyles } from '../styles';

type RadioLabelProps = ComponentPropsWithRef<'label'>;

interface StylesScheme<T> {
  root: T;
  label: T;
}

export type RadioStyles = NonNullable<unknown> & StylesScheme<ComponentStyles>;
export type RadioInitialProps = NonNullable<unknown> & Omit<ComponentPropsWithRef<'input'>, 'size'>;
export type RadioRestProps = ElementRestProps<HTMLInputElement>;

export interface RadioElementaryProps extends Partial<WithStyle> {
  labelRef?: RefObject<HTMLLabelElement>;
}

export interface RadioShapeProps {}

export interface RadioStateProps {
  isDisabled: boolean;
}

export interface RadioSlots {
  checkedIcon?: ReactNode;
  uncheckedIcon?: ReactNode;
}

export interface RadioSlotProps {
  labelProps: RadioLabelProps;
}

export type RadioProps = {
  styles?: Partial<RadioStyles>;
  slots?: RadioSlots;
  slotProps?: Partial<RadioSlotProps>;
} & Omit<RadioInitialProps, 'type'> &
  RadioElementaryProps &
  Partial<RadioShapeProps> &
  Partial<RadioStateProps>;

export interface UseRadioStyles {
  styles?: Partial<RadioStyles>;
}

export interface UseRadioStylesReturn {
  composedStyles: RadioStyles;
}

export interface UseRadioProps extends Partial<RadioShapeProps>, Partial<RadioStateProps>, Partial<WithStyle> {
  slotProps: RadioSlotProps;
  isChecked: boolean;
  isFocused: boolean;
}

export interface UseRadioPropsReturn {
  root: Partial<RadioRestProps>;
  label: Partial<RadioLabelProps>;
}

export interface RadioStylesProps extends RadioShapeProps {}

export interface UseRadioHandlingProps extends Pick<RadioInitialProps, InputPickedProps> {}

export interface UseRadioHandlingReturn extends UseRadioHandlingProps {
  focused: boolean;
  inputRef: RefObject<HTMLInputElement>;
}
