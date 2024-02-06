import { ElementType } from 'react';
import { PolymorphicComponentPropsWithRef, WithStyle } from '../common';
import { ComponentStyles, TypographyVariant, TypographyColor } from '../styles';

interface TypographyStylesScheme<T> {
  root: T;
}

export interface TypographyStyles extends TypographyStylesScheme<ComponentStyles> {}

export type TypographyInitialProps<T extends ElementType> = NonNullable<unknown> & PolymorphicComponentPropsWithRef<T>;

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

export interface UseTypographyPropsReturn extends TypographyStylesScheme<WithStyle> {}

export interface TypographyStylesProps extends TypographyShapeProps {}
