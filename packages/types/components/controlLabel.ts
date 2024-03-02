import { ComponentPropsWithRef, ReactElement, ReactNode, RefObject } from 'react';
import { WithStyle } from '../common';
import { ComponentStyles } from '../styles';

interface ControlLabelStylesScheme<T> {
  root: T;
}

export interface ControlLabelStyles extends ControlLabelStylesScheme<ComponentStyles> {}

export type ControlLabelInitialProps = NonNullable<unknown> & Omit<ComponentPropsWithRef<'label'>, 'children'>;

export interface ControlLabelElementaryProps extends Partial<WithStyle> {
  control: ReactElement;
  inputRef?: RefObject<HTMLInputElement>;
  inputProps?: Partial<ComponentPropsWithRef<'input'>>;
  label?: ReactNode;
  labelPlacement?: 'left' | 'right'; // TODO
}

export interface ControlLabelInputProps
  extends Pick<ComponentPropsWithRef<'input'>, 'checked' | 'required' | 'value' | 'onChange' | 'onFocus' | 'onBlur'> {
  isDisabled?: boolean;
}

export interface ControlLabelShapeProps {}

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
