import { ElementType, ReactNode } from 'react';
import { PolymorphicComponentPropsWithRef, WithStyle } from '../common';
import { ComponentStyles, ShapeSize, ShapeVariant, BaseColor, ExoticColor, EmotionColor } from '../styles';

interface ButtonStylesScheme<T> {
  root: T;
  label: T;
  iconStart: T;
  iconEnd: T;
  iconLoading: T;
}

export type ButtonColor = BaseColor | ExoticColor | EmotionColor;

export interface ButtonStyles extends ButtonStylesScheme<ComponentStyles> {}

export type ButtonInitialProps<T extends ElementType> = NonNullable<unknown> & PolymorphicComponentPropsWithRef<T>;

export interface ButtonElementaryProps extends Partial<WithStyle> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loadingIcon?: ReactNode;
}

export interface ButtonStateProps {
  isLoading: boolean;
  isDisabled: boolean;
  isActive: boolean;
}

export interface ButtonShapeProps {
  fullWidth: boolean;
  color: ButtonColor;
  size: ShapeSize;
  variant: ShapeVariant;
}

export type ButtonProps<T extends ElementType> = {
  styles?: Partial<ButtonStyles>;
} & ButtonInitialProps<T> &
  ButtonElementaryProps &
  Partial<ButtonStateProps> &
  Partial<ButtonShapeProps>;

export interface UseButtonStyles {
  styles?: Partial<ButtonStyles>;
}

export interface UseButtonStylesReturn {
  composedStyles: ButtonStyles;
}

export interface UseButtonProps extends Partial<ButtonStateProps>, Partial<ButtonShapeProps>, Partial<WithStyle> {}

export interface UseButtonPropsReturn extends ButtonStylesScheme<WithStyle> {}

export interface ButtonStylesProps extends Partial<ButtonStateProps>, ButtonShapeProps {}
