import clsx from 'clsx';
import { css } from '@emotion/react';
import { UseSvgIconProps, UseSvgIconPropsReturn } from 'types';

export const useSvgIconProps = (
  { style, className, ...rest }: UseSvgIconProps,
  animatedHorizontal?: boolean
): UseSvgIconPropsReturn => {
  const styles = css({
    width: animatedHorizontal ? '2em' : '1em',
    height: '1em',
    display: 'inline-block',
    alignSelf: 'center',
    flexShrink: 0,
    userSelect: 'none',
    verticalAlign: '-0.125em',
  });

  return {
    styles,
    style: { ...style },
    className: clsx('Icon', className),
    xmlns: 'http://www.w3.org/2000/svg',
    ...rest,
  };
};
