import { ElementType } from 'react';
import { PolymorphicComponentPropsWithRef, WithStyle, ElementRestProps } from '../common';
import { ComponentStyles, BackdropBackgroundColor } from '../styles';

interface StylesScheme<T> {
  root: T;
}

export type BackdropStyles = NonNullable<unknown> & StylesScheme<ComponentStyles>;
export type BackdropInitialProps<T extends ElementType> = NonNullable<unknown> & PolymorphicComponentPropsWithRef<T>;
export type BackdropRestProps<E extends Element> = ElementRestProps<E>;

export interface BackdropElementaryProps extends Partial<WithStyle> {}

export interface BackdropShapeProps {
  background?: BackdropBackgroundColor;
}

export type BackdropProps<T extends ElementType> = {
  styles?: Partial<BackdropStyles>;
} & BackdropInitialProps<T> &
  BackdropElementaryProps &
  Partial<BackdropShapeProps>;

export interface UseBackdropStyles {
  styles?: Partial<BackdropStyles>;
}

export interface UseBackdropStylesReturn {
  composedStyles: BackdropStyles;
}

export interface UseBackdropProps extends Partial<BackdropShapeProps>, Partial<WithStyle> {}

export interface UseBackdropPropsReturn<E extends Element> {
  root: Partial<BackdropRestProps<E>>;
}

export interface BackdropStylesProps extends BackdropShapeProps {}
