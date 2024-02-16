import { ComponentPropsWithRef, ElementType, ReactNode } from 'react';
import { WithStyle } from '../common';
import { ComponentStyles } from '../styles';
import { TypographyProps } from './typography';

interface ModalHeaderStylesScheme<T> {
  root: T;
  titleContainer: T;
  actionsContainer: T;
  title: T;
  subtitle: T;
}

export interface ModalHeaderStyles extends ModalHeaderStylesScheme<ComponentStyles> {}

export type ModalHeaderInitialProps = ComponentPropsWithRef<'header'>;

export interface ModalHeaderElementaryProps extends Partial<WithStyle> {
  title?: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  titleTypographyProps?: Omit<TypographyProps<ElementType>, 'children'>;
  subtitleTypographyProps?: Omit<TypographyProps<ElementType>, 'children'>;
}

export interface ModalHeaderShapeProps {
  divider?: boolean;
}

export type ModalHeaderProps = {
  styles?: Partial<ModalHeaderStyles>;
} & ModalHeaderInitialProps &
  ModalHeaderElementaryProps &
  Partial<ModalHeaderShapeProps>;

export interface UseModalHeaderStyles {
  styles?: Partial<ModalHeaderStyles>;
}

export interface UseModalHeaderStylesReturn {
  composedStyles: ModalHeaderStyles;
}

export interface UseModalHeaderProps extends Partial<ModalHeaderShapeProps>, Partial<WithStyle> {}

export interface UseModalHeaderPropsReturn extends ModalHeaderStylesScheme<WithStyle> {}

export interface ModalHeaderStylesProps extends ModalHeaderShapeProps {}
