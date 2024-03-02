import { ElementType } from 'react';
import { ElementRestProps, PolymorphicComponentPropsWithRef, WithStyle } from '../common';
import { Breakpoints, ComponentStyles, Spacing } from '../styles';

interface ContainerStylesScheme<T> {
  root: T;
}

export interface ContainerStyles extends ContainerStylesScheme<ComponentStyles> {}

export type ContainerInitialProps<T extends ElementType> = NonNullable<unknown> & PolymorphicComponentPropsWithRef<T>;
export type ContainerRestProps<E extends Element> = ElementRestProps<E>;

export interface ContainerElementaryProps extends Partial<WithStyle> {}

export interface ContainerShapeProps {
  maxWidth: Breakpoints;
  xOffset: Spacing;
  isFluid: boolean;
}

export type ContainerProps<T extends ElementType> = {
  styles?: Partial<ContainerStyles>;
} & ContainerInitialProps<T> &
  ContainerElementaryProps &
  Partial<ContainerShapeProps>;

export interface UseContainerStyles {
  styles?: Partial<ContainerStyles>;
}

export interface UseContainerStylesReturn {
  composedStyles: ContainerStyles;
}

export interface UseContainerProps extends Partial<ContainerShapeProps>, Partial<WithStyle> {}

export interface UseContainerPropsReturn<E extends Element> {
  root: Partial<ContainerRestProps<E>>;
}

export interface ContainerStylesProps extends ContainerShapeProps {}
