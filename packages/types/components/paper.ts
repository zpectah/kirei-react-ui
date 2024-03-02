import { ElementType } from 'react';
import { ElementRestProps, PolymorphicComponentPropsWithRef, WithStyle } from '../common';
import {
  BrandColor,
  ComponentStyles,
  EmotionColor,
  NeutralColor,
  PaperBackgroundColor,
  PaperVariant,
  Elevation,
} from '../styles';

interface StylesScheme<T> {
  root: T;
}

export type PaperColor = BrandColor | NeutralColor | EmotionColor | PaperBackgroundColor;

export type PaperStyles = NonNullable<unknown> & StylesScheme<ComponentStyles>;
export type PaperInitialProps<T extends ElementType> = NonNullable<unknown> & PolymorphicComponentPropsWithRef<T>;
export type PaperRestProps<E extends Element> = ElementRestProps<E>;

export interface PaperElementaryProps extends Partial<WithStyle> {}

export interface PaperShapeProps {
  color: PaperColor;
  variant: PaperVariant;
  isSquare: boolean;
  elevation: Elevation;
}

export type PaperProps<T extends ElementType> = {
  styles?: Partial<PaperStyles>;
} & PaperInitialProps<T> &
  PaperElementaryProps &
  Partial<PaperShapeProps>;

export interface UsePaperStyles {
  styles?: Partial<PaperStyles>;
}

export interface UsePaperStylesReturn {
  composedStyles: PaperStyles;
}

export interface UsePaperProps extends Partial<PaperShapeProps>, Partial<WithStyle> {}

export interface UsePaperPropsReturn<E extends Element> {
  root: Partial<PaperRestProps<E>>;
}

export interface PaperStylesProps extends PaperShapeProps {}
