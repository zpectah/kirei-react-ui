import { KeyboardEvent, MutableRefObject, ComponentPropsWithRef } from 'react';
import { WithStyle } from '../common';
import { BreakpointKeys, ComponentStyles } from '../styles';

interface ModalDialogStylesScheme<T> {
  root: T;
  backdrop: T;
}

export interface ModalDialogStyles extends ModalDialogStylesScheme<ComponentStyles> {}

export type ModalDialogInitialProps = ComponentPropsWithRef<'dialog'>;

export interface ModalDialogElementaryProps extends Partial<WithStyle> {}

export interface ModalHandlingProps {
  onClose: () => void;
  isOpen: boolean;
}

export interface ModalDialogShapeProps {
  maxWidth: BreakpointKeys;
}

export type ModalDialogProps = {
  styles?: Partial<ModalDialogStyles>;
} & ModalDialogInitialProps &
  ModalDialogElementaryProps &
  Partial<ModalDialogShapeProps> &
  ModalHandlingProps;

export interface UseModalDialogStyles {
  styles?: Partial<ModalDialogStyles>;
}

export interface UseModalDialogStylesReturn {
  composedStyles: ModalDialogStyles;
}

export interface UseModalDialogProps
  extends Partial<ModalDialogShapeProps>,
    Partial<WithStyle>,
    Partial<ModalHandlingProps> {
  isOpening: boolean;
  isClosing: boolean;
}

export interface UseModalDialogPropsReturn extends ModalDialogStylesScheme<WithStyle> {}

export interface ModalDialogStylesProps extends ModalDialogShapeProps {}

export interface UseModalDialogHandlingProps extends ModalHandlingProps {}

export interface UseModalDialogHandlingReturn extends Pick<ModalHandlingProps, 'onClose'> {
  dialogRef: MutableRefObject<HTMLDialogElement | null>;
  isMounted: boolean;
  isOpening: boolean;
  isClosing: boolean;
  onKeyDown: (event: KeyboardEvent<HTMLDialogElement>) => void;
}

export interface ModalDialogContextProps extends ModalHandlingProps, Pick<ModalDialogInitialProps, 'id'> {}
