import { ComponentPropsWithRef } from 'react';
import { WithStyle } from '../common';
import { ComponentStyles } from '../styles';

type ContainerProps = ComponentPropsWithRef<'div'>;

interface ModalBodyStylesScheme<T> {
  root: T;
  container: T;
}

export interface ModalBodyStyles extends ModalBodyStylesScheme<ComponentStyles> {}

export type ModalBodyInitialProps = ComponentPropsWithRef<'article'>;

export interface ModalBodyElementaryProps extends Partial<WithStyle> {}

export interface ModalBodyShapeProps {
  disableOffset?: boolean;
}

export interface ModalBodySlotProps {
  containerProps: Omit<ContainerProps, 'children'>;
}

export type ModalBodyProps = {
  styles?: Partial<ModalBodyStyles>;
  slotProps?: Partial<ModalBodySlotProps>;
} & ModalBodyInitialProps &
  ModalBodyElementaryProps &
  Partial<ModalBodyShapeProps>;

export interface UseModalBodyStyles {
  styles?: Partial<ModalBodyStyles>;
}

export interface UseModalBodyStylesReturn {
  composedStyles: ModalBodyStyles;
}

export interface UseModalBodyProps extends Partial<ModalBodyShapeProps>, Partial<WithStyle> {
  slotProps: ModalBodySlotProps;
}

export interface UseModalBodyPropsReturn {
  root: Partial<ModalBodyInitialProps>;
  container: Partial<ContainerProps>;
}

export interface ModalBodyStylesProps extends ModalBodyShapeProps {}
