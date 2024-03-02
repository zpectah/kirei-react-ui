import { ElementType } from 'react';
import { ElementRestProps, PolymorphicComponentPropsWithRef, WithStyle } from '../common';
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

interface StylesScheme<T> {
  root: T;
}

export type StackStyles = NonNullable<unknown> & StylesScheme<ComponentStyles>;
export type StackInitialProps<T extends ElementType> = NonNullable<unknown> & PolymorphicComponentPropsWithRef<T>;
export type StackRestProps<E extends Element> = ElementRestProps<E>;

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

export interface UseStackPropsReturn<E extends Element> {
  root: Partial<StackRestProps<E>>;
}

export interface StackStylesProps extends StackShapeProps {}
