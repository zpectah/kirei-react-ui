import { ElementType } from 'react';
import { ElementRestProps, PolymorphicComponentPropsWithRef, WithStyle } from '../common';
import { ComponentStyles, TypographyVariant, TypographyColor, LinkUnderline } from '../styles';

interface LinkStylesScheme<T> {
  root: T;
}

export interface LinkStyles extends LinkStylesScheme<ComponentStyles> {}

export type LinkInitialProps<T extends ElementType> = NonNullable<unknown> & PolymorphicComponentPropsWithRef<T>;
export type LinkRestProps<E extends Element> = ElementRestProps<E>;

export interface LinkElementaryProps extends Partial<WithStyle> {}

export interface LinkStateProps {
  isDisabled: boolean;
}

export interface LinkShapeProps {
  variant: TypographyVariant;
  color: TypographyColor;
  underline: LinkUnderline;
}

export type LinkProps<T extends ElementType> = {
  styles?: Partial<LinkStyles>;
} & LinkInitialProps<T> &
  LinkElementaryProps &
  Partial<LinkShapeProps> &
  Partial<LinkStateProps>;

export interface UseLinkStyles {
  styles?: Partial<LinkStyles>;
}

export interface UseLinkStylesReturn {
  composedStyles: LinkStyles;
}

export interface UseLinkProps extends Partial<LinkStateProps>, Partial<LinkShapeProps>, Partial<WithStyle> {}

export interface UseLinkPropsReturn<E extends Element> {
  root: Partial<LinkRestProps<E>>;
}

export interface LinkStylesProps extends Partial<LinkStateProps>, LinkShapeProps {}
