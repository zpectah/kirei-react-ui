import { ElementType } from 'react';
import { PolymorphicComponentPropsWithRef, WithStyle } from '../common';
import { ComponentStyles } from '../styles';

interface LabelStylesScheme<T> {
  root: T;
}

export interface LabelStyles extends LabelStylesScheme<ComponentStyles> {}

export type LabelInitialProps<T extends ElementType> = NonNullable<unknown> & PolymorphicComponentPropsWithRef<T>;

export interface LabelElementaryProps extends Partial<WithStyle> {}

export interface LabelShapeProps {}

export type LabelProps<T extends ElementType> = {
  styles?: Partial<LabelStyles>;
} & LabelInitialProps<T> &
  LabelElementaryProps &
  Partial<LabelShapeProps>;

export interface UseLabelStyles {
  styles?: Partial<LabelStyles>;
}

export interface UseLabelStylesReturn {
  composedStyles: LabelStyles;
}

export interface UseLabelProps extends Partial<LabelShapeProps>, Partial<WithStyle> {}

export interface UseLabelPropsReturn extends LabelStylesScheme<WithStyle> {}

export interface LabelStylesProps extends LabelShapeProps {}
