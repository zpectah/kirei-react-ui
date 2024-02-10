import { MouseEvent, KeyboardEvent, MutableRefObject, ComponentPropsWithRef } from 'react';
import { WithStyle } from '../common';
import { BreakpointKeys, ComponentStyles } from '../styles';

interface ModalStylesScheme<T> {
  root: T;
  backdrop: T;
  container: T;
  dialog: T;
}

export interface ModalStyles extends ModalStylesScheme<ComponentStyles> {}

export type ModalInitialProps = ComponentPropsWithRef<'dialog'>;

export interface ModalElementaryProps extends Partial<WithStyle> {}

export interface ModalHandlingProps {
  onClose: () => void;
  isOpen: boolean;
  disableBackdropClose?: boolean;
  disableEscapeClose?: boolean;
}

export interface ModalShapeProps {
  maxWidth: BreakpointKeys;
}

export type ModalProps = {
  styles?: Partial<ModalStyles>;
} & ModalInitialProps &
  ModalElementaryProps &
  Partial<ModalShapeProps> &
  ModalHandlingProps;

export interface UseModalStyles {
  styles?: Partial<ModalStyles>;
}

export interface UseModalStylesReturn {
  composedStyles: ModalStyles;
}

export interface UseModalProps extends Partial<ModalShapeProps>, Partial<WithStyle>, Partial<ModalHandlingProps> {
  isOpening: boolean;
  isClosing: boolean;
}

export interface UseModalPropsReturn extends ModalStylesScheme<WithStyle> {}

export interface ModalStylesProps extends ModalShapeProps {}

export interface UseModalHandlingProps extends ModalHandlingProps {}

export interface UseModalHandlingReturn extends Pick<ModalHandlingProps, 'onClose'> {
  modalRootRef: MutableRefObject<HTMLDialogElement | null>;
  modalDialogRef: MutableRefObject<HTMLDivElement | null>;
  isMounted: boolean;
  isOpen: boolean;
  isOpening: boolean;
  isClosing: boolean;
  onKeyDown: (event: KeyboardEvent<HTMLDialogElement>) => void;
  onBackdropClick: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface ModalContextProps extends ModalHandlingProps, Pick<ModalInitialProps, 'id'> {}
