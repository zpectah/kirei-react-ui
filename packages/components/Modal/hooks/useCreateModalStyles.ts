import { Theme, ModalStylesProps } from 'types';
import { animations } from 'styles';

export const useCreateModalStyles = (theme: Theme, stylesProps: ModalStylesProps) => {
  const {
    transitions,
    palette,
    shape,
    spacing,
    breakpoints: { container, unit, up },
  } = theme;
  const { maxWidth, isFullscreen } = stylesProps;

  const rootBase = {
    margin: 0,
    padding: 0,
    border: 0,
    position: 'fixed',
    top: 0,
    left: 0,
    background: 'none',
    zIndex: 999, // TODO

    '&::backdrop': {
      background: 'none',
    },

    // '&:modal': {},
    // '&:not(:modal)': {},
    // '&.isOpen': {},
    // '&.isOpening': {},
    // '&.isClosing': {},
  };
  const containerBase = {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const backdropBase = {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    backgroundColor: palette.utils.getAlphaColor(palette.dark.dark, palette.ratio.backgroundAlpha),

    '.isOpen.isOpening &': {
      animation: `${animations.fadeIn} ${transitions.duration.screen - 10}ms ease-in-out 1`,
    },
    '.isOpen.isClosing &': {
      animation: `${animations.fadeOut} ${transitions.duration.screen - 5}ms ease-in-out 1`,
    },
  };
  const dialogBase = {
    position: 'relative',
    zIndex: 1000, // TODO
    backgroundColor: palette.background.secondary,
    padding: spacing.get(2),

    '.isOpen.isOpening &': {
      animation: `${animations.fadeInUp} ${transitions.duration.screen - 10}ms ease-in-out 1`,
    },
    '.isOpen.isClosing &': {
      animation: `${animations.fadeOutDown} ${transitions.duration.screen - 5}ms ease-in-out 1`,
    },
  };
  const dialogMaxWidth = {
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
  const dialogSize = isFullscreen
    ? {
        width: '100vw',
        height: '100vh',
      }
    : {
        width: '100%',
        margin: spacing.get(4),
        maxHeight: '60vh',
        borderRadius: shape.borderRadius.medium,
        ...dialogMaxWidth[maxWidth],
      };

  const styles = {
    root: Object.assign({ ...rootBase }),
    container: Object.assign({ ...containerBase }),
    backdrop: Object.assign({ ...backdropBase }),
    dialog: Object.assign({ ...dialogBase, ...dialogSize }),
  };

  return { styles };
};
