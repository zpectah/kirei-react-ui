import { ComponentPropsWithRef, ElementType, ReactNode } from 'react';
import { WithStyle } from '../common';
import { ComponentStyles } from '../styles';
import { TypographyProps } from './typography';

type TitleContainerProps = ComponentPropsWithRef<'div'>;
type ActionsContainerProps = ComponentPropsWithRef<'div'>;
type TitleProps = TypographyProps<ElementType>;
type SubtitleProps = TypographyProps<ElementType>;

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

export interface ModalHeaderSlotProps {
  titleContainerProps: Omit<Partial<TitleContainerProps>, 'children'>;
  actionsContainerProps: Omit<Partial<ActionsContainerProps>, 'children'>;
  titleProps: Omit<TitleProps, 'children'>;
  subtitleProps: Omit<SubtitleProps, 'children'>;
}

export type ModalHeaderProps = {
  styles?: Partial<ModalHeaderStyles>;
  slotProps?: Partial<ModalHeaderSlotProps>;
} & ModalHeaderInitialProps &
  ModalHeaderElementaryProps &
  Partial<ModalHeaderShapeProps>;

export interface UseModalHeaderStyles {
  styles?: Partial<ModalHeaderStyles>;
}

export interface UseModalHeaderStylesReturn {
  composedStyles: ModalHeaderStyles;
}

export interface UseModalHeaderProps extends Partial<ModalHeaderShapeProps>, Partial<WithStyle> {
  slotProps: ModalHeaderSlotProps;
}

export interface UseModalHeaderPropsReturn {
  root: Partial<ModalHeaderInitialProps>;
  titleContainer: Partial<TitleContainerProps>;
  actionsContainer: Partial<ActionsContainerProps>;
  title: Partial<TitleProps>;
  subtitle: Partial<SubtitleProps>;
}

export interface ModalHeaderStylesProps extends ModalHeaderShapeProps {}
