import { ElementType } from 'react';
import { PolymorphicComponentPropsWithRef, WithStyle } from '../common';
import { ComponentStyles } from '../styles';

interface ControlLabelStylesScheme<T> {
  root: T;
}

export interface ControlLabelStyles extends ControlLabelStylesScheme<ComponentStyles> {}

export type ControlLabelInitialProps<T extends ElementType> = NonNullable<unknown> &
  PolymorphicComponentPropsWithRef<T>;

export interface ControlLabelElementaryProps extends Partial<WithStyle> {}

export interface ControlLabelShapeProps {}

export type ControlLabelProps<T extends ElementType> = {
  styles?: Partial<ControlLabelStyles>;
} & ControlLabelInitialProps<T> &
  ControlLabelElementaryProps &
  Partial<ControlLabelShapeProps>;

export interface UseControlLabelStyles {
  styles?: Partial<ControlLabelStyles>;
}

export interface UseControlLabelStylesReturn {
  composedStyles: ControlLabelStyles;
}

export interface UseControlLabelProps extends Partial<ControlLabelShapeProps>, Partial<WithStyle> {}

export interface UseControlLabelPropsReturn extends ControlLabelStylesScheme<WithStyle> {}

export interface ControlLabelStylesProps extends ControlLabelShapeProps {}
