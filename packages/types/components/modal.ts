import { MouseEvent, KeyboardEvent, SyntheticEvent, MutableRefObject, ComponentPropsWithRef, ElementType } from 'react';
import { ElementRestProps, WithStyle } from '../common';
import { Breakpoints, ComponentStyles } from '../styles';
import { PaperColor, PaperProps } from './paper';
import { BackdropProps } from './backdrop';

type ContainerProps = ComponentPropsWithRef<'div'>;
type DialogProps = ComponentPropsWithRef<'div'>;

export enum modalScrollDeterminateKeys {
  body = 'body',
  paper = 'paper',
}

export type ModalScrollDeterminate = keyof typeof modalScrollDeterminateKeys;

interface ModalStylesScheme<T> {
  root: T;
  container: T;
  backdrop: T;
  dialog: T;
  paper: T;
}

export interface ModalStyles extends ModalStylesScheme<ComponentStyles> {}

export type ModalInitialProps = Omit<ComponentPropsWithRef<'dialog'>, 'onCancel'>;
export type ModalRestProps = ElementRestProps<HTMLDialogElement>;

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
  containerProps: Omit<Partial<ContainerProps>, 'children'>;
  backdropProps: Partial<BackdropProps<ElementType>>;
  dialogProps: Omit<Partial<DialogProps>, 'children'>;
  paperProps: Omit<Partial<PaperProps<ElementType>>, 'children'>;
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
  root: Partial<ModalRestProps>;
  container: Partial<ContainerProps>;
  backdrop: Partial<BackdropProps<ElementType>>;
  dialog: Partial<DialogProps>;
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
    Pick<ModalShapeProps, 'scroll'> {
  color: PaperColor;
}
