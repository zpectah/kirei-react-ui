import { ComponentPropsWithRef, ReactElement, ReactNode, RefObject } from 'react';
import { WithStyle } from '../common';
import { ComponentStyles, Placement, Spacing } from '../styles';

interface ControlLabelStylesScheme<T> {
  root: T;
}

export interface ControlLabelStyles extends ControlLabelStylesScheme<ComponentStyles> {}

export type ControlLabelInitialProps = NonNullable<unknown> & Omit<ComponentPropsWithRef<'label'>, 'children'>;
export type ControlLabelPickedProps = Pick<
  ComponentPropsWithRef<'input'>,
  'checked' | 'required' | 'value' | 'onChange' | 'onFocus' | 'onBlur'
>;

export interface ControlLabelElementaryProps extends Partial<WithStyle> {
  control: ReactElement;
  inputRef?: RefObject<HTMLInputElement>;
  inputProps?: Partial<ComponentPropsWithRef<'input'>>;
  label?: ReactNode;
}

export interface ControlLabelInputProps extends ControlLabelPickedProps {
  isDisabled?: boolean;
}

export interface ControlLabelShapeProps {
  labelPlacement: Placement;
  gap: Spacing;
}

export type ControlLabelProps = {
  styles?: Partial<ControlLabelStyles>;
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
}

export interface UseControlLabelPropsReturn extends ControlLabelStylesScheme<WithStyle> {}

export interface ControlLabelStylesProps extends ControlLabelShapeProps {}
