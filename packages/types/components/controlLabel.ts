import { ComponentPropsWithRef, ElementType, ReactElement, ReactNode, RefObject } from 'react';
import { ElementRestProps, InputPickedProps, WithoutChildren, WithStyle } from '../common';
import { ComponentStyles, Placement, Spacing } from '../styles';
import { TypographyProps } from './typography';

type LabelProps = TypographyProps<'label'>;

interface StylesScheme<T> {
  root: T;
  label: T;
}

export type ControlLabelStyles = NonNullable<unknown> & StylesScheme<ComponentStyles>;
export type ControlLabelInitialProps = NonNullable<unknown> & WithoutChildren<ComponentPropsWithRef<'label'>>;
export type ControlLabelRestProps = ElementRestProps<HTMLLabelElement>;

export interface ControlLabelElementaryProps extends Partial<WithStyle> {
  control: ReactElement;
  inputRef?: RefObject<HTMLInputElement>;
  inputProps?: Partial<ComponentPropsWithRef<'input'>>;
  label?: ReactNode;
  labelTypographyProps?: WithoutChildren<TypographyProps<ElementType>>;
}

export interface ControlLabelInputProps extends Pick<ComponentPropsWithRef<'input'>, InputPickedProps> {
  isDisabled?: boolean;
}

export interface ControlLabelShapeProps {
  labelPlacement: Placement;
  gap: Spacing;
}

export interface ControlLabelSlotProps {
  labelProps: WithoutChildren<LabelProps, 'as'>;
}

export type ControlLabelProps = {
  styles?: Partial<ControlLabelStyles>;
  slotProps?: Partial<ControlLabelSlotProps>;
} & ControlLabelInitialProps &
  ControlLabelElementaryProps &
  Partial<ControlLabelShapeProps> &
  Partial<ControlLabelInputProps>;

export interface UseControlLabelStyles {
  styles?: Partial<ControlLabelStyles>;
}

export interface UseControlLabelStylesReturn {
  composedStyles: ControlLabelStyles;
}

export interface UseControlLabelProps extends Partial<ControlLabelShapeProps>, Partial<WithStyle> {
  isDisabled?: boolean;
  slotProps: ControlLabelSlotProps;
}

export interface UseControlLabelPropsReturn {
  root: Partial<ControlLabelRestProps>;
  label: Partial<LabelProps>;
}

export interface ControlLabelStylesProps extends ControlLabelShapeProps {}
