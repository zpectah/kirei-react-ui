import { ComponentPropsWithRef, ReactNode, RefObject } from 'react';
import { WithStyle } from '../common';
import { ComponentStyles, ShapeSize } from '../styles';

type RadioLabelProps = ComponentPropsWithRef<'label'>;

interface RadioStylesScheme<T> {
  root: T;
  label: T;
}

export interface RadioStyles extends RadioStylesScheme<ComponentStyles> {}

export type RadioInitialProps = NonNullable<unknown> & Omit<ComponentPropsWithRef<'input'>, 'size'>;

export interface RadioElementaryProps extends Partial<WithStyle> {
  labelRef?: RefObject<HTMLLabelElement>;
}

export interface RadioShapeProps {
  size: ShapeSize;
}

export interface RadioStateProps {
  isDisabled: boolean;
}

export interface RadioSlots {
  checkedIcon?: ReactNode;
  uncheckedIcon?: ReactNode;
}

export interface RadioSlotProps {
  labelProps: RadioLabelProps;
}

export type RadioProps = {
  styles?: Partial<RadioStyles>;
  slots?: RadioSlots;
  slotProps?: Partial<RadioSlotProps>;
} & Omit<RadioInitialProps, 'type'> &
  RadioElementaryProps &
  Partial<RadioShapeProps> &
  Partial<RadioStateProps>;

export interface UseRadioStyles {
  styles?: Partial<RadioStyles>;
}

export interface UseRadioStylesReturn {
  composedStyles: RadioStyles;
}

export interface UseRadioProps extends Partial<RadioShapeProps>, Partial<RadioStateProps>, Partial<WithStyle> {
  slotProps: RadioSlotProps;
}

export interface UseRadioPropsReturn extends RadioStylesScheme<WithStyle> {}

export interface RadioStylesProps extends RadioShapeProps {}
