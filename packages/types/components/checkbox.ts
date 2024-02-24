import { ComponentPropsWithRef, InputHTMLAttributes } from 'react';
import { WithStyle } from '../common';
import { ComponentStyles } from '../styles';

interface CheckboxStylesScheme<T> {
  root: T;
}

export interface CheckboxStyles extends CheckboxStylesScheme<ComponentStyles> {}

export type CheckboxInitialProps = NonNullable<unknown> &
  ComponentPropsWithRef<'input'> &
  InputHTMLAttributes<HTMLInputElement>;

export interface CheckboxElementaryProps extends Partial<WithStyle> {}

export interface CheckboxShapeProps {}

export type CheckboxProps = {
  styles?: Partial<CheckboxStyles>;
} & Omit<CheckboxInitialProps, 'type'> &
  CheckboxElementaryProps &
  Partial<CheckboxShapeProps>;

export interface UseCheckboxStyles {
  styles?: Partial<CheckboxStyles>;
}

export interface UseCheckboxStylesReturn {
  composedStyles: CheckboxStyles;
}

export interface UseCheckboxProps extends Partial<CheckboxShapeProps>, Partial<WithStyle> {}

export interface UseCheckboxPropsReturn extends CheckboxStylesScheme<WithStyle> {}

export interface CheckboxStylesProps extends CheckboxShapeProps {}
