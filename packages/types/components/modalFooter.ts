import { ComponentPropsWithRef } from 'react';
import { ElementRestProps, WithStyle } from '../common';
import { ComponentStyles, FlexJustifyContent } from '../styles';

interface ModalFooterStylesScheme<T> {
  root: T;
}

export interface ModalFooterStyles extends ModalFooterStylesScheme<ComponentStyles> {}

export type ModalFooterInitialProps = ComponentPropsWithRef<'footer'>;
export type ModalFooterRestProps = ElementRestProps<HTMLElement>;

export interface ModalFooterElementaryProps extends Partial<WithStyle> {}

export interface ModalFooterShapeProps {
  divider?: boolean;
  justifyContent: FlexJustifyContent;
}

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

export interface UseModalFooterPropsReturn {
  root: Partial<ModalFooterRestProps>;
}

export interface ModalFooterStylesProps extends ModalFooterShapeProps {}
