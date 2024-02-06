import { Theme, ContainerStylesProps } from 'types';

export const useCreateContainerStyles = (theme: Theme, stylesProps: ContainerStylesProps) => {
  const { maxWidth, isFluid, xOffset } = stylesProps;
  const {
    breakpoints: { container, unit, up },
  } = theme;

  const rootBase = {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
    paddingLeft: theme.spacing.get(xOffset),
    paddingRight: theme.spacing.get(xOffset),
  };

  const rootMaxWidth = {
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

  const rootWidth = isFluid
    ? {
        maxWidth: '100%',
      }
    : rootMaxWidth[maxWidth];

  const styles = {
    root: Object.assign({
      ...rootBase,
      ...rootWidth,
    }),
  };

  return { styles };
};
