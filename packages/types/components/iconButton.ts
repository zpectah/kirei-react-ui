import { ComponentPropsWithRef, ElementType } from 'react';
import { PolymorphicComponentPropsWithRef, WithStyle } from '../common';
import { ComponentStyles, Shape, ShapeSize, ShapeVariant, ButtonColor } from '../styles';

type IconProps = ComponentPropsWithRef<'span'>;

interface IconButtonStylesScheme<T> {
  root: T;
  icon: T;
}

export interface IconButtonStyles extends IconButtonStylesScheme<ComponentStyles> {}

export type IconButtonInitialProps<T extends ElementType> = NonNullable<unknown> & PolymorphicComponentPropsWithRef<T>;

export interface IconButtonElementaryProps extends Partial<WithStyle> {}

export interface IconButtonShapeProps {
  color: ButtonColor;
  size: ShapeSize;
  variant: ShapeVariant;
  shape: Shape;
}

export interface IconButtonSlotProps {
  iconProps: Omit<IconProps, 'children'>;
}

export type IconButtonProps<T extends ElementType> = {
  styles?: Partial<IconButtonStyles>;
  slotProps?: Partial<IconButtonSlotProps>;
} & IconButtonInitialProps<T> &
  IconButtonElementaryProps &
  Partial<IconButtonShapeProps>;

export interface UseIconButtonStyles {
  styles?: Partial<IconButtonStyles>;
}

export interface UseIconButtonStylesReturn {
  composedStyles: IconButtonStyles;
}

export interface UseIconButtonProps extends Partial<IconButtonShapeProps>, Partial<WithStyle> {
  slotProps: IconButtonSlotProps;
}

export interface UseIconButtonPropsReturn extends IconButtonStylesScheme<WithStyle> {}

export interface IconButtonStylesProps extends IconButtonShapeProps {}
