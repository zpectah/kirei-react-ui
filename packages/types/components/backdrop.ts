import { ElementType } from 'react';
import { PolymorphicComponentPropsWithRef, WithStyle } from '../common';
import { ComponentStyles } from '../styles';
import { BackdropBackgroundColor } from '../styles';

interface BackdropStylesScheme<T> {
  root: T;
}

export interface BackdropStyles extends BackdropStylesScheme<ComponentStyles> {}

export type BackdropInitialProps<T extends ElementType> = NonNullable<unknown> & PolymorphicComponentPropsWithRef<T>;

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

export interface UseBackdropPropsReturn extends BackdropStylesScheme<WithStyle> {}

export interface BackdropStylesProps extends BackdropShapeProps {}
