import { ComponentPropsWithRef, ReactNode, RefObject } from 'react';
import { WithStyle, ElementRestProps, InputPickedProps } from '../common';
import { ComponentStyles, InputColor, ShapeSize } from '../styles';

type CheckboxLabelProps = ComponentPropsWithRef<'label'>;

interface StylesScheme<T> {
  root: T;
  label: T;
}

export type CheckboxStyles = NonNullable<unknown> & StylesScheme<ComponentStyles>;
export type CheckboxInitialProps = NonNullable<unknown> & Omit<ComponentPropsWithRef<'input'>, 'size'>;
export type CheckboxRestProps = Omit<ElementRestProps<HTMLInputElement>, 'color'>;

export interface CheckboxElementaryProps extends Partial<WithStyle> {
  labelRef?: RefObject<HTMLLabelElement>;
}

export interface CheckboxShapeProps {
  color: InputColor;
  size: ShapeSize;
}

export interface CheckboxStateProps {
  isDisabled: boolean;
  indeterminate: boolean;
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

export interface UseCheckboxProps
  extends Partial<CheckboxShapeProps>,
    Partial<CheckboxStateProps>,
    Partial<CheckboxRestProps> {
  slotProps: CheckboxSlotProps;
  isChecked: boolean;
  isFocused: boolean;
}

export interface UseCheckboxPropsReturn {
  root: Partial<CheckboxRestProps>;
  label: Partial<CheckboxLabelProps>;
}

export interface CheckboxStylesProps extends CheckboxShapeProps {}

export interface UseCheckboxHandlingProps extends Pick<CheckboxInitialProps, InputPickedProps> {}

export interface UseCheckboxHandlingReturn extends UseCheckboxHandlingProps {
  focused: boolean;
  inputRef: RefObject<HTMLInputElement>;
}
