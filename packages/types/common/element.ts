import { CSSProperties, ReactNode } from 'react';

export type WithoutChildren<T, P extends string | number | symbol = ''> = Omit<T, 'children' | P>;
export interface WithChildren {
  children: ReactNode;
}

export interface WithStyle {
  className: string;
  style: CSSProperties;
}
