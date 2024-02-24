import { ComponentPropsWithRef, InputHTMLAttributes } from 'react';
import { WithStyle } from '../common';
import { ComponentStyles } from '../styles';

interface RadioStylesScheme<T> {
  root: T;
}

export interface RadioStyles extends RadioStylesScheme<ComponentStyles> {}

export type RadioInitialProps = NonNullable<unknown> &
  ComponentPropsWithRef<'input'> &
  InputHTMLAttributes<HTMLInputElement>;

export interface RadioElementaryProps extends Partial<WithStyle> {}

export interface RadioShapeProps {}

export type RadioProps = {
  styles?: Partial<RadioStyles>;
} & Omit<RadioInitialProps, 'type'> &
  RadioElementaryProps &
  Partial<RadioShapeProps>;

export interface UseRadioStyles {
  styles?: Partial<RadioStyles>;
}

export interface UseRadioStylesReturn {
  composedStyles: RadioStyles;
}

export interface UseRadioProps extends Partial<RadioShapeProps>, Partial<WithStyle> {}

export interface UseRadioPropsReturn extends RadioStylesScheme<WithStyle> {}

export interface RadioStylesProps extends RadioShapeProps {}
