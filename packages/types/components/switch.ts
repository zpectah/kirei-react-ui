import { ComponentPropsWithRef, RefObject } from 'react';
import { WithStyle, ElementRestProps, InputPickedProps } from '../common';
import { ComponentStyles, InputColor, ShapeSize } from '../styles';

type SwitchLabelProps = ComponentPropsWithRef<'label'>;
type SwitchSliderProps = ComponentPropsWithRef<'span'>;

interface StylesScheme<T> {
  root: T;
  label: T;
  slider: T;
}

export type SwitchStyles = NonNullable<unknown> & StylesScheme<ComponentStyles>;
export type SwitchInitialProps = NonNullable<unknown> & Omit<ComponentPropsWithRef<'input'>, 'size'>;
export type SwitchRestProps = ElementRestProps<HTMLInputElement>;

export interface SwitchElementaryProps extends Partial<WithStyle> {
  labelRef?: RefObject<HTMLLabelElement>;
}

export interface SwitchShapeProps {
  color: InputColor;
  size: ShapeSize;
}

export interface SwitchStateProps {
  isDisabled: boolean;
}

export interface SwitchSlotProps {
  labelProps: SwitchLabelProps;
  sliderProps: SwitchSliderProps;
}

export type SwitchProps = {
  styles?: Partial<SwitchStyles>;
  slotProps?: Partial<SwitchSlotProps>;
} & Omit<SwitchInitialProps, 'type'> &
  SwitchElementaryProps &
  Partial<SwitchShapeProps> &
  Partial<SwitchStateProps>;

export interface UseSwitchStyles {
  styles?: Partial<SwitchStyles>;
}

export interface UseSwitchStylesReturn {
  composedStyles: SwitchStyles;
}

export interface UseSwitchProps extends Partial<SwitchShapeProps>, Partial<SwitchStateProps>, Partial<WithStyle> {
  slotProps: SwitchSlotProps;
  isChecked: boolean;
  isFocused: boolean;
}

export interface UseSwitchPropsReturn {
  root: Partial<SwitchRestProps>;
  label: Partial<SwitchLabelProps>;
  slider: Partial<SwitchSliderProps>;
}

export interface SwitchStylesProps extends SwitchShapeProps {}

export interface UseSwitchHandlingProps extends Pick<SwitchInitialProps, InputPickedProps> {}

export interface UseSwitchHandlingReturn extends UseSwitchHandlingProps {
  focused: boolean;
  inputRef: RefObject<HTMLInputElement>;
}
