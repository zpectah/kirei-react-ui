import { MouseEvent, KeyboardEvent, SyntheticEvent, MutableRefObject, ComponentPropsWithRef, ElementType } from 'react';
import { WithStyle } from '../common';
import { Breakpoints, ComponentStyles } from '../styles';
import { PaperProps } from './paper';

interface ModalStylesScheme<T> {
  root: T;
  container: T;
  backdrop: T;
  dialog: T;
  paper: T;
}

export enum modalScrollDeterminateKeys {
  body = 'body',
  paper = 'paper',
}

export type ModalScrollDeterminate = keyof typeof modalScrollDeterminateKeys;

export interface ModalStyles extends ModalStylesScheme<ComponentStyles> {}

export type ModalInitialProps = Omit<ComponentPropsWithRef<'dialog'>, 'onCancel'>;

export interface ModalElementaryProps extends Partial<WithStyle> {}

export interface ModalHandlingProps {
  disableBackdropClose?: boolean;
  disableEscapeClose?: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export interface ModalShapeProps {
  isFullscreen: boolean;
  maxWidth: Breakpoints;
  scroll: ModalScrollDeterminate;
}

export interface ModalSlotProps {
  containerProps: Omit<Partial<ComponentPropsWithRef<'div'>>, 'children'>;
  backdropProps: Omit<Partial<ComponentPropsWithRef<'div'>>, 'children'>;
  dialogProps: Omit<Partial<ComponentPropsWithRef<'div'>>, 'children'>;
  PaperProps: Omit<Partial<PaperProps<ElementType>>, 'children'>;
}

export type ModalProps = {
  styles?: Partial<ModalStyles>;
  slotProps?: Partial<ModalSlotProps>;
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
  isClosing: boolean;
  isOpening: boolean;
  slotProps: ModalSlotProps;
}

export interface UseModalPropsReturn {
  root: Partial<ModalInitialProps>;
  container: Partial<ComponentPropsWithRef<'div'>>;
  backdrop: Partial<ComponentPropsWithRef<'div'>>;
  dialog: Partial<ComponentPropsWithRef<'div'>>;
  paper: Partial<PaperProps<ElementType>>;
}

export interface ModalStylesProps extends ModalShapeProps {}

export interface UseModalHandlingProps extends ModalHandlingProps {}

export interface UseModalHandlingReturn extends Pick<ModalHandlingProps, 'onClose'> {
  isClosing: boolean;
  isMounted: boolean;
  isOpen: boolean;
  isOpening: boolean;
  modalDialogRef: MutableRefObject<HTMLDivElement | null>;
  modalRootRef: MutableRefObject<HTMLDialogElement | null>;
  onBackdropClick: (event: MouseEvent<HTMLDivElement>) => void;
  onCancel: (event: SyntheticEvent<HTMLDialogElement, Event>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLDialogElement>) => void;
  portalElement: HTMLElement;
}

export interface ModalContextProps
  extends ModalHandlingProps,
    Pick<ModalInitialProps, 'id'>,
    Pick<ModalShapeProps, 'scroll'> {}
