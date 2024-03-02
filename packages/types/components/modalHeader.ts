import { ComponentPropsWithRef, ElementType, ReactNode } from 'react';
import { ElementRestProps, WithoutChildren, WithStyle } from '../common';
import { ComponentStyles } from '../styles';
import { TypographyProps } from './typography';

type TitleContainerProps = ComponentPropsWithRef<'div'>;
type ActionsContainerProps = ComponentPropsWithRef<'div'>;
type TitleProps<T extends ElementType> = TypographyProps<T>;
type SubtitleProps<T extends ElementType> = TypographyProps<T>;

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

export interface ModalHeaderSlotProps<T1 extends ElementType, T2 extends ElementType> {
  titleContainerProps: WithoutChildren<Partial<TitleContainerProps>>;
  actionsContainerProps: WithoutChildren<Partial<ActionsContainerProps>>;
  titleProps: WithoutChildren<TitleProps<T1>>;
  subtitleProps: WithoutChildren<SubtitleProps<T2>>;
}

export type ModalHeaderProps<T1 extends ElementType, T2 extends ElementType> = {
  styles?: Partial<ModalHeaderStyles>;
  slotProps?: Partial<ModalHeaderSlotProps<T1, T2>>;
} & ModalHeaderInitialProps &
  ModalHeaderElementaryProps &
  Partial<ModalHeaderShapeProps>;

export interface UseModalHeaderStyles {
  styles?: Partial<ModalHeaderStyles>;
}

export interface UseModalHeaderStylesReturn {
  composedStyles: ModalHeaderStyles;
}

export interface UseModalHeaderProps<T1 extends ElementType, T2 extends ElementType>
  extends Partial<ModalHeaderShapeProps>,
    Partial<WithStyle> {
  slotProps: ModalHeaderSlotProps<T1, T2>;
}

export interface UseModalHeaderPropsReturn<T1 extends ElementType, T2 extends ElementType> {
  root: Partial<ModalHeaderRestProps>;
  titleContainer: Partial<TitleContainerProps>;
  actionsContainer: Partial<ActionsContainerProps>;
  title: Partial<TitleProps<T1>>;
  subtitle: Partial<SubtitleProps<T2>>;
}

export interface ModalHeaderStylesProps extends ModalHeaderShapeProps {}
