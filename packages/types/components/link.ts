import { ElementType } from 'react';
import { PolymorphicComponentPropsWithRef, WithStyle } from '../common';
import { ComponentStyles, TypographyVariant, TypographyColor, LinkUnderline } from '../styles';

interface LinkStylesScheme<T> {
  root: T;
}

export interface LinkStyles extends LinkStylesScheme<ComponentStyles> {}

export type LinkInitialProps<T extends ElementType> = NonNullable<unknown> & PolymorphicComponentPropsWithRef<T>;

export interface LinkElementaryProps extends Partial<WithStyle> {}

export interface LinkShapeProps {
  variant: TypographyVariant;
  color: TypographyColor;
  underline: LinkUnderline;
}

export type LinkProps<T extends ElementType> = {
  styles?: Partial<LinkStyles>;
} & LinkInitialProps<T> &
  LinkElementaryProps &
  Partial<LinkShapeProps>;

export interface UseLinkStyles {
  styles?: Partial<LinkStyles>;
}

export interface UseLinkStylesReturn {
  composedStyles: LinkStyles;
}

export interface UseLinkProps extends Partial<LinkShapeProps>, Partial<WithStyle> {}

export interface UseLinkPropsReturn extends LinkStylesScheme<WithStyle> {}

export interface LinkStylesProps extends LinkShapeProps {}
