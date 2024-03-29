import { ComponentPropsWithRef, ElementType } from 'react';
import { ElementRestProps, PolymorphicComponentPropsWithRef, WithoutChildren, WithStyle } from '../common';
import { ComponentStyles, Shape, ShapeSize, ShapeVariant, ButtonColor } from '../styles';

type IconProps = ComponentPropsWithRef<'span'>;

interface StylesScheme<T> {
  root: T;
  icon: T;
}

export type IconButtonStyles = NonNullable<unknown> & StylesScheme<ComponentStyles>;
export type IconButtonInitialProps<T extends ElementType> = NonNullable<unknown> & PolymorphicComponentPropsWithRef<T>;
export type IconButtonRestProps<E extends Element> = ElementRestProps<E>;

export interface IconButtonElementaryProps extends Partial<WithStyle> {}

export interface IconButtonShapeProps {
  color: ButtonColor;
  size: ShapeSize;
  variant: ShapeVariant;
  shape: Shape;
}

export interface IconButtonSlotProps {
  iconProps: WithoutChildren<IconProps>;
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

export interface UseIconButtonPropsReturn<E extends Element> {
  root: Partial<IconButtonRestProps<E>>;
  icon: Partial<IconProps>;
}

export interface IconButtonStylesProps extends IconButtonShapeProps {}
