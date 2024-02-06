/// <reference types="@emotion/react/types/css-prop" />

import { ComponentStyles } from 'types';

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: ComponentStyles;
  }

  function forwardRef<T, P = NonNullable<unknown>>(
    render: (props: P, ref: ForwardedRef<T>) => ReactElement | null
  ): (props: P & RefAttributes<T>) => ReactElement | null;
}
