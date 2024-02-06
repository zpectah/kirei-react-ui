import { ElementType } from 'react';
import { PolymorphicComponentPropsWithRef, WithStyle } from '../common';
import { BreakpointKeys, ComponentStyles } from '../styles';

interface ModalDialogStylesScheme<T> {
  root: T;
}

export interface ModalDialogStyles extends ModalDialogStylesScheme<ComponentStyles> {}

export type ModalDialogInitialProps<T extends ElementType> = NonNullable<unknown> & PolymorphicComponentPropsWithRef<T>;

export interface ModalDialogElementaryProps extends Partial<WithStyle> {}

export interface ModalDialogShapeProps {
  maxWidth: BreakpointKeys;
}

export type ModalDialogProps<T extends ElementType> = {
  styles?: Partial<ModalDialogStyles>;
} & ModalDialogInitialProps<T> &
  ModalDialogElementaryProps &
  Partial<ModalDialogShapeProps>;

export interface UseModalDialogStyles {
  styles?: Partial<ModalDialogStyles>;
}

export interface UseModalDialogStylesReturn {
  composedStyles: ModalDialogStyles;
}

export interface UseModalDialogProps extends Partial<ModalDialogShapeProps>, Partial<WithStyle> {}

export interface UseModalDialogPropsReturn extends ModalDialogStylesScheme<WithStyle> {}

export interface ModalDialogStylesProps extends ModalDialogShapeProps {}
