import { ElementType } from 'react';
import { PolymorphicComponentPropsWithRef, WithStyle } from '../common';
import { BaseColor, ComponentStyles, EmotionColor, ExoticColor, PaperBackgroundColor } from '../styles';

export type PaperColor = BaseColor | ExoticColor | EmotionColor | PaperBackgroundColor;

interface PaperStylesScheme<T> {
  root: T;
}

export interface PaperStyles extends PaperStylesScheme<ComponentStyles> {}

export type PaperInitialProps<T extends ElementType> = NonNullable<unknown> & PolymorphicComponentPropsWithRef<T>;

export interface PaperElementaryProps extends Partial<WithStyle> {}

export interface PaperShapeProps {
  color: PaperColor;
  elevation: 0 | 1 | 2; // TODO
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

export interface UsePaperPropsReturn extends PaperStylesScheme<WithStyle> {}

export interface PaperStylesProps extends PaperShapeProps {}
