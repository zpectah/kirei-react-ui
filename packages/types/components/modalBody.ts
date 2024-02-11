import { ComponentPropsWithRef } from 'react';
import { WithStyle } from '../common';
import { ComponentStyles } from '../styles';

interface ModalBodyStylesScheme<T> {
  root: T;
}

export interface ModalBodyStyles extends ModalBodyStylesScheme<ComponentStyles> {}

export type ModalBodyInitialProps = ComponentPropsWithRef<'article'>;

export interface ModalBodyElementaryProps extends Partial<WithStyle> {}

export interface ModalBodyShapeProps {}

export type ModalBodyProps = {
  styles?: Partial<ModalBodyStyles>;
} & ModalBodyInitialProps &
  ModalBodyElementaryProps &
  Partial<ModalBodyShapeProps>;

export interface UseModalBodyStyles {
  styles?: Partial<ModalBodyStyles>;
}

export interface UseModalBodyStylesReturn {
  composedStyles: ModalBodyStyles;
}

export interface UseModalBodyProps extends Partial<ModalBodyShapeProps>, Partial<WithStyle> {}

export interface UseModalBodyPropsReturn extends ModalBodyStylesScheme<WithStyle> {}

export interface ModalBodyStylesProps extends ModalBodyShapeProps {}