import { ComponentPropsWithRef } from 'react';
import { WithStyle } from '../common';
import { ComponentStyles } from '../styles';

interface ModalHeaderStylesScheme<T> {
  root: T;
}

export interface ModalHeaderStyles extends ModalHeaderStylesScheme<ComponentStyles> {}

export type ModalHeaderInitialProps = ComponentPropsWithRef<'header'>;

export interface ModalHeaderElementaryProps extends Partial<WithStyle> {}

export interface ModalHeaderShapeProps {}

export type ModalHeaderProps = {
  styles?: Partial<ModalHeaderStyles>;
} & ModalHeaderInitialProps &
  ModalHeaderElementaryProps &
  Partial<ModalHeaderShapeProps>;

export interface UseModalHeaderStyles {
  styles?: Partial<ModalHeaderStyles>;
}

export interface UseModalHeaderStylesReturn {
  composedStyles: ModalHeaderStyles;
}

export interface UseModalHeaderProps extends Partial<ModalHeaderShapeProps>, Partial<WithStyle> {}

export interface UseModalHeaderPropsReturn extends ModalHeaderStylesScheme<WithStyle> {}

export interface ModalHeaderStylesProps extends ModalHeaderShapeProps {}
