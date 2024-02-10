import { ComponentPropsWithRef } from 'react';
import { WithStyle } from '../common';
import { ComponentStyles } from '../styles';

interface ModalFooterStylesScheme<T> {
  root: T;
}

export interface ModalFooterStyles extends ModalFooterStylesScheme<ComponentStyles> {}

export type ModalFooterInitialProps = ComponentPropsWithRef<'footer'>;

export interface ModalFooterElementaryProps extends Partial<WithStyle> {}

export interface ModalFooterShapeProps {}

export type ModalFooterProps = {
  styles?: Partial<ModalFooterStyles>;
} & ModalFooterInitialProps &
  ModalFooterElementaryProps &
  Partial<ModalFooterShapeProps>;

export interface UseModalFooterStyles {
  styles?: Partial<ModalFooterStyles>;
}

export interface UseModalFooterStylesReturn {
  composedStyles: ModalFooterStyles;
}

export interface UseModalFooterProps extends Partial<ModalFooterShapeProps>, Partial<WithStyle> {}

export interface UseModalFooterPropsReturn extends ModalFooterStylesScheme<WithStyle> {}

export interface ModalFooterStylesProps extends ModalFooterShapeProps {}
