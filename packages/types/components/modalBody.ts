import { ComponentPropsWithRef } from 'react';
import { ElementRestProps, WithoutChildren, WithStyle } from '../common';
import { ComponentStyles } from '../styles';

type ContainerProps = ComponentPropsWithRef<'div'>;

interface StylesScheme<T> {
  root: T;
  container: T;
}

export type ModalBodyStyles = NonNullable<unknown> & StylesScheme<ComponentStyles>;
export type ModalBodyInitialProps = ComponentPropsWithRef<'article'>;
export type ModalBodyRestProps = ElementRestProps<HTMLElement>;

export interface ModalBodyElementaryProps extends Partial<WithStyle> {}

export interface ModalBodyShapeProps {
  disableOffset?: boolean;
}

export interface ModalBodySlotProps {
  containerProps: WithoutChildren<ContainerProps>;
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
  root: Partial<ModalBodyRestProps>;
  container: Partial<ContainerProps>;
}

export interface ModalBodyStylesProps extends ModalBodyShapeProps {}
