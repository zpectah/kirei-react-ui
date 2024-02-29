import { ComponentPropsWithRef, ReactNode, RefObject } from 'react';
import { WithStyle } from '../common';
import { ComponentStyles, ShapeSize } from '../styles';

type SwitchLabelProps = ComponentPropsWithRef<'label'>;
type SwitchSliderProps = ComponentPropsWithRef<'span'>;

interface SwitchStylesScheme<T> {
  root: T;
  label: T;
  slider: T;
}

export interface SwitchStyles extends SwitchStylesScheme<ComponentStyles> {}

export type SwitchInitialProps = NonNullable<unknown> & Omit<ComponentPropsWithRef<'input'>, 'size'>;

export interface SwitchElementaryProps extends Partial<WithStyle> {
  labelRef?: RefObject<HTMLLabelElement>;
}

export interface SwitchShapeProps {
  // size: ShapeSize; // TODO
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

export interface UseSwitchPropsReturn extends SwitchStylesScheme<WithStyle> {}

export interface SwitchStylesProps extends SwitchShapeProps {}
