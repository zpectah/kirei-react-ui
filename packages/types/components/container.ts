import { ElementType } from 'react';
import { PolymorphicComponentPropsWithRef, WithStyle } from '../common';
import { BreakpointKeys, ComponentStyles, SpacingValues } from '../styles';

interface ContainerStylesScheme<T> {
  root: T;
}

export interface ContainerStyles extends ContainerStylesScheme<ComponentStyles> {}

export type ContainerInitialProps<T extends ElementType> = NonNullable<unknown> & PolymorphicComponentPropsWithRef<T>;

export interface ContainerElementaryProps extends Partial<WithStyle> {}

export interface ContainerShapeProps {
  maxWidth: BreakpointKeys;
  xOffset: SpacingValues;
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

export interface UseContainerPropsReturn extends ContainerStylesScheme<WithStyle> {}

export interface ContainerStylesProps extends ContainerShapeProps {}
