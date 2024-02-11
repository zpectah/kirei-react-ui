import { Breakpoints, ThemeBreakpoints } from 'types';

export const getContainerMaxWidth = (maxWidth: Breakpoints, breakpoints: ThemeBreakpoints) => {
  const { unit, up, container } = breakpoints;

  const elementMaxWidth = {
    xs: {
      [`${up('xs')}`]: {
        maxWidth: `${container.xs}${unit}`,
      },
    },
    sm: {
      maxWidth: '100%',
      [`${up('sm')}`]: {
        maxWidth: `${container.sm}${unit}`,
      },
    },
    md: {
      maxWidth: '100%',
      [`${up('md')}`]: {
        maxWidth: `${container.md}${unit}`,
      },
    },
    lg: {
      maxWidth: '100%',
      [`${up('lg')}`]: {
        maxWidth: `${container.lg}${unit}`,
      },
    },
    xl: {
      maxWidth: '100%',
      [`${up('xl')}`]: {
        maxWidth: `${container.xl}${unit}`,
      },
    },
    xxl: {
      maxWidth: '100%',
      [`${up('xxl')}`]: {
        maxWidth: `${container.xxl}${unit}`,
      },
    },
  };

  return elementMaxWidth[maxWidth];
};
