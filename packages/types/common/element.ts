import { CSSProperties, ReactNode } from 'react';

export interface WithChildren {
  children: ReactNode;
}

export interface WithStyle {
  className: string;
  style: CSSProperties;
}
