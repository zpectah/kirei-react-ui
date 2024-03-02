import { ComponentPropsWithRef, ElementType, ReactElement, ReactNode, RefObject } from 'react';
import { WithStyle } from '../common';
import { ComponentStyles, Placement, Spacing } from '../styles';
import { TypographyProps } from './typography';

type LabelProps = TypographyProps<'label'>;

interface ControlLabelStylesScheme<T> {
  root: T;
  label: T;
}

export interface ControlLabelStyles extends ControlLabelStylesScheme<ComponentStyles> {}

export type ControlLabelInitialProps = NonNullable<unknown> & Omit<ComponentPropsWithRef<'label'>, 'children'>;
export type ControlLabelPickedProps = 'checked' | 'required' | 'value' | 'onChange' | 'onFocus' | 'onBlur';

export interface ControlLabelElementaryProps extends Partial<WithStyle> {
  control: ReactElement;
  inputRef?: RefObject<HTMLInputElement>;
  inputProps?: Partial<ComponentPropsWithRef<'input'>>;
  label?: ReactNode;
  labelTypographyProps?: Omit<TypographyProps<ElementType>, 'children'>;
}

export interface ControlLabelInputProps extends Pick<ComponentPropsWithRef<'input'>, ControlLabelPickedProps> {
  isDisabled?: boolean;
}

export interface ControlLabelShapeProps {
  labelPlacement: Placement;
  gap: Spacing;
}

export interface ControlLabelSlotProps {
  labelProps: Omit<LabelProps, 'children' | 'as'>;
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

export interface UseControlLabelPropsReturn extends ControlLabelStylesScheme<WithStyle> {}

export interface ControlLabelStylesProps extends ControlLabelShapeProps {}
