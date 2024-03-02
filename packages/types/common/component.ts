import { ElementType, ComponentPropsWithRef, Ref, CSSProperties, HTMLAttributes, AriaAttributes } from 'react';

export type PolymorphicComponentPropsWithRef<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithRef<T>;

export type PolymorphicIntrinsicElementRef<T extends ElementType> = Ref<
  T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : T
>;

// TODO
export interface ComponentStyleProps {
  className: string;
  style: CSSProperties;
}

export type ElementRestProps<E> = Partial<HTMLAttributes<E>> & Partial<AriaAttributes>;
