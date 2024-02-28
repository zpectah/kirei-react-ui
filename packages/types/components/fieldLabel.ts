import { ElementType } from 'react';
import { PolymorphicComponentPropsWithRef, WithStyle } from '../common';
import { ComponentStyles } from '../styles';

interface FieldLabelStylesScheme<T> {
  root: T;
}

export interface FieldLabelStyles extends FieldLabelStylesScheme<ComponentStyles> {}

export type FieldLabelInitialProps<T extends ElementType> = NonNullable<unknown> & PolymorphicComponentPropsWithRef<T>;

export interface FieldLabelElementaryProps extends Partial<WithStyle> {}

export interface FieldLabelShapeProps {}

export type FieldLabelProps<T extends ElementType> = {
  styles?: Partial<FieldLabelStyles>;
} & FieldLabelInitialProps<T> &
  FieldLabelElementaryProps &
  Partial<FieldLabelShapeProps>;

export interface UseFieldLabelStyles {
  styles?: Partial<FieldLabelStyles>;
}

export interface UseFieldLabelStylesReturn {
  composedStyles: FieldLabelStyles;
}

export interface UseFieldLabelProps extends Partial<FieldLabelShapeProps>, Partial<WithStyle> {}

export interface UseFieldLabelPropsReturn extends FieldLabelStylesScheme<WithStyle> {}

export interface FieldLabelStylesProps extends FieldLabelShapeProps {}
