import { ElementType } from 'react';
import { ElementRestProps, PolymorphicComponentPropsWithRef, WithStyle } from '../common';
import { ComponentStyles, TypographyVariant, TypographyColor } from '../styles';

interface StylesScheme<T> {
  root: T;
}

export type TypographyStyles = NonNullable<unknown> & StylesScheme<ComponentStyles>;
export type TypographyInitialProps<T extends ElementType> = NonNullable<unknown> & PolymorphicComponentPropsWithRef<T>;
export type TypographyRestProps<E extends Element> = ElementRestProps<E>;

export interface TypographyElementaryProps extends Partial<WithStyle> {}

export interface TypographyShapeProps {
  variant: TypographyVariant;
  color: TypographyColor;
  isTruncated: boolean;
}

export type TypographyProps<T extends ElementType> = {
  styles?: Partial<TypographyStyles>;
} & TypographyInitialProps<T> &
  TypographyElementaryProps &
  Partial<TypographyShapeProps>;

export interface UseTypographyStyles {
  styles?: Partial<TypographyStyles>;
}

export interface UseTypographyStylesReturn {
  composedStyles: TypographyStyles;
}

export interface UseTypographyProps extends Partial<TypographyShapeProps>, Partial<WithStyle> {}

export interface UseTypographyPropsReturn<E extends Element> {
  root: Partial<TypographyRestProps<E>>;
}

export interface TypographyStylesProps extends TypographyShapeProps {}
