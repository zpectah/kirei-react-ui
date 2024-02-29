import { ComponentPropsWithRef, ReactNode, RefObject } from 'react';
import { WithStyle } from '../common';
import { ComponentStyles } from '../styles';

type CheckboxLabelProps = ComponentPropsWithRef<'label'>;

interface CheckboxStylesScheme<T> {
  root: T;
  label: T;
}

export interface CheckboxStyles extends CheckboxStylesScheme<ComponentStyles> {}

export type CheckboxInitialProps = NonNullable<unknown> & Omit<ComponentPropsWithRef<'input'>, 'size'>;

export interface CheckboxElementaryProps extends Partial<WithStyle> {
  labelRef?: RefObject<HTMLLabelElement>;
}

export interface CheckboxShapeProps {}

export interface CheckboxStateProps {
  isDisabled: boolean;
}

export interface CheckboxSlots {
  checkedIcon?: ReactNode;
  uncheckedIcon?: ReactNode;
  indeterminateIcon?: ReactNode;
}

export interface CheckboxSlotProps {
  labelProps: CheckboxLabelProps;
}

export type CheckboxProps = {
  styles?: Partial<CheckboxStyles>;
  slots?: CheckboxSlots;
  slotProps?: Partial<CheckboxSlotProps>;
} & Omit<CheckboxInitialProps, 'type'> &
  CheckboxElementaryProps &
  Partial<CheckboxShapeProps> &
  Partial<CheckboxStateProps>;

export interface UseCheckboxStyles {
  styles?: Partial<CheckboxStyles>;
}

export interface UseCheckboxStylesReturn {
  composedStyles: CheckboxStyles;
}

export interface UseCheckboxProps extends Partial<CheckboxShapeProps>, Partial<CheckboxStateProps>, Partial<WithStyle> {
  slotProps: CheckboxSlotProps;
  isChecked: boolean;
  isFocused: boolean;
}

export interface UseCheckboxPropsReturn extends CheckboxStylesScheme<WithStyle> {}

export interface CheckboxStylesProps extends CheckboxShapeProps {}
