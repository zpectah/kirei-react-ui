import { ElementType, ReactElement } from 'react';
import { PolymorphicIntrinsicElementRef } from '../common';
import { ButtonProps } from './button';

declare module 'Button' {
  const Button: <T extends ElementType = 'button'>(
    props: ButtonProps<T>,
    ref: PolymorphicIntrinsicElementRef<T> | null
  ) => ReactElement | null;

  export default Button;
}
