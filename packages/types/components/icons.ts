import { ComponentPropsWithRef } from 'react';
import { ComponentStyles } from '../styles';

export interface SvgIconProps extends ComponentPropsWithRef<'svg'> {}

export interface UseSvgIconProps extends SvgIconProps {}

export interface UseSvgIconPropsReturn extends SvgIconProps {
  styles: ComponentStyles;
}
