import { KeyboardEvent, MutableRefObject, ComponentPropsWithRef } from 'react';
import { WithStyle } from '../common';
import { BreakpointKeys, ComponentStyles } from '../styles';

interface ModalDialogStylesScheme<T> {
  root: T;
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

export interface UseModalDialogProps extends Partial<ModalDialogShapeProps>, Partial<WithStyle> {}

export interface UseModalDialogPropsReturn extends ModalDialogStylesScheme<WithStyle> {}

export interface ModalDialogStylesProps extends ModalDialogShapeProps {}

export interface UseModalDialog extends ModalHandlingProps {}

export interface UseModalDialogReturn {
  dialogRef: MutableRefObject<HTMLDialogElement | null>;
  isMounted: boolean;
  onClose: () => void;
  onKeyDown: (event: KeyboardEvent<HTMLDialogElement>) => void;
}

export interface ModalDialogContextProps extends ModalHandlingProps {
  id: string;
}
