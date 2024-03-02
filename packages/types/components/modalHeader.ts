import { ComponentPropsWithRef, ElementType, ReactNode } from 'react';
import { ElementRestProps, WithoutChildren, WithStyle } from '../common';
import { ComponentStyles } from '../styles';
import { TypographyProps } from './typography';

type TitleContainerProps = ComponentPropsWithRef<'div'>;
type ActionsContainerProps = ComponentPropsWithRef<'div'>;
type TitleProps = TypographyProps<ElementType>;
type SubtitleProps = TypographyProps<ElementType>;

interface StylesScheme<T> {
  root: T;
  titleContainer: T;
  actionsContainer: T;
  title: T;
  subtitle: T;
}

export type ModalHeaderStyles = NonNullable<unknown> & StylesScheme<ComponentStyles>;
export type ModalHeaderInitialProps = ComponentPropsWithRef<'header'>;
export type ModalHeaderRestProps = ElementRestProps<HTMLElement>;

export interface ModalHeaderElementaryProps extends Partial<WithStyle> {
  title?: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  titleTypographyProps?: WithoutChildren<TypographyProps<ElementType>>;
  subtitleTypographyProps?: WithoutChildren<TypographyProps<ElementType>>;
}

export interface ModalHeaderShapeProps {
  divider?: boolean;
}

export interface ModalHeaderSlotProps {
  titleContainerProps: WithoutChildren<Partial<TitleContainerProps>>;
  actionsContainerProps: WithoutChildren<Partial<ActionsContainerProps>>;
  titleProps: WithoutChildren<TitleProps>;
  subtitleProps: WithoutChildren<SubtitleProps>;
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
  root: Partial<ModalHeaderRestProps>;
  titleContainer: Partial<TitleContainerProps>;
  actionsContainer: Partial<ActionsContainerProps>;
  title: Partial<TitleProps>;
  subtitle: Partial<SubtitleProps>;
}

export interface ModalHeaderStylesProps extends ModalHeaderShapeProps {}
