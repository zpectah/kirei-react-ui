import { ElementType } from 'react';
import { PolymorphicComponentPropsWithRef, WithStyle } from '../common';
import {
  ComponentStyles,
  Spacing,
  FlexDirection,
  FlexAlignItems,
  FlexAlignContent,
  FlexJustifyItems,
  FlexJustifyContent,
  FlexWrap,
} from '../styles';

interface StackStylesScheme<T> {
  root: T;
}

export interface StackStyles extends StackStylesScheme<ComponentStyles> {}

export type StackInitialProps<T extends ElementType> = NonNullable<unknown> & PolymorphicComponentPropsWithRef<T>;

export interface StackElementaryProps extends Partial<WithStyle> {}

export interface StackShapeProps {
  direction: FlexDirection;
  gap: Spacing;
  alignItems: FlexAlignItems;
  justifyItems: FlexJustifyItems;
  alignContent: FlexAlignContent;
  justifyContent: FlexJustifyContent;
  wrap: FlexWrap;
  isInline: boolean;
}

export type StackProps<T extends ElementType> = {
  styles?: Partial<StackStyles>;
} & StackInitialProps<T> &
  StackElementaryProps &
  Partial<StackShapeProps>;

export interface UseStackStyles {
  styles?: Partial<StackStyles>;
}

export interface UseStackStylesReturn {
  composedStyles: StackStyles;
}

export interface UseStackProps extends Partial<StackShapeProps>, Partial<WithStyle> {}

export interface UseStackPropsReturn extends StackStylesScheme<WithStyle> {}

export interface StackStylesProps extends StackShapeProps {}
