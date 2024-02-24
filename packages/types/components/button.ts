import { ComponentPropsWithRef, ElementType, ReactNode } from 'react';
import { PolymorphicComponentPropsWithRef, WithStyle } from '../common';
import { ComponentStyles, ShapeSize, ShapeVariant, ButtonColor } from '../styles';

type LabelProps = ComponentPropsWithRef<'span'>;
type IconStartProps = ComponentPropsWithRef<'span'>;
type IconEndProps = ComponentPropsWithRef<'span'>;
type IconLoadingProps = ComponentPropsWithRef<'span'>;

interface ButtonStylesScheme<T> {
  root: T;
  label: T;
  iconStart: T;
  iconEnd: T;
  iconLoading: T;
}

export interface ButtonStyles extends ButtonStylesScheme<ComponentStyles> {}

export type ButtonInitialProps<T extends ElementType = 'button'> = NonNullable<unknown> &
  PolymorphicComponentPropsWithRef<T>;

export interface ButtonElementaryProps {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export interface ButtonStateProps {
  isLoading: boolean;
  isDisabled: boolean;
  isActive: boolean;
}

export interface ButtonShapeProps {
  isFullWidth: boolean;
  color: ButtonColor;
  size: ShapeSize;
  variant: ShapeVariant;
}

export interface ButtonSlots {
  loadingIcon?: ReactNode;
}

export interface ButtonSlotProps {
  labelProps: Omit<LabelProps, 'children'>;
  iconStartProps: Omit<IconStartProps, 'children'>;
  iconEndProps: Omit<IconEndProps, 'children'>;
  iconLoadingProps: Omit<IconLoadingProps, 'children'>;
}

export type ButtonProps<T extends ElementType = 'button'> = {
  styles?: Partial<ButtonStyles>;
  slots?: ButtonSlots;
  slotProps?: Partial<ButtonSlotProps>;
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

export interface UseButtonProps extends Partial<ButtonStateProps>, Partial<ButtonShapeProps>, Partial<WithStyle> {
  slotProps: ButtonSlotProps;
}

export interface UseButtonPropsReturn {
  root: Partial<ButtonInitialProps<ElementType>>;
  label: Partial<LabelProps>;
  iconStart: Partial<IconStartProps>;
  iconEnd: Partial<IconEndProps>;
  iconLoading: Partial<IconLoadingProps>;
}

export interface ButtonStylesProps extends Partial<ButtonStateProps>, ButtonShapeProps {}
