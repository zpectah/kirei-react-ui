import { AriaAttributes, ComponentPropsWithRef, HTMLAttributes, ReactNode, RefObject } from 'react';
import { WithStyle } from '../common';
import { ComponentStyles } from '../styles';

type RadioLabelProps = ComponentPropsWithRef<'label'>;

interface RadioStylesScheme<T> {
  root: T;
  label: T;
}

export interface RadioStyles extends RadioStylesScheme<ComponentStyles> {}

export type RadioInitialProps = NonNullable<unknown> & Omit<ComponentPropsWithRef<'input'>, 'size'>;
export type RadioRestProps = Partial<HTMLAttributes<HTMLInputElement>> & Partial<AriaAttributes>;

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

export interface UseRadioHandlingProps
  extends Pick<RadioInitialProps, 'checked' | 'onChange' | 'onFocus' | 'onBlur' | 'ref'> {}

export interface UseRadioHandlingReturn extends UseRadioHandlingProps {
  focused: boolean;
  inputRef: RefObject<HTMLInputElement>;
}
