import { Theme, ModalStylesProps } from 'types';
import { animations } from 'styles';

export const useCreateModalStyles = (theme: Theme, stylesProps: ModalStylesProps) => {
  const { transitions, palette, shape, spacing } = theme;
  // eslint-disable-next-line no-empty-pattern
  const {} = stylesProps;

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
    // width: '50vw', // TODO
    // height: 'auto', // TODO
    // position: 'fixed',
    // top: '25vh', // TODO
    // left: '25vw', // TODO

    width: '60vw',
    margin: spacing.get(4),

    maxWidth: '80vw',
    maxHeight: '60vh',
    position: 'relative',
    zIndex: 1000, // TODO
    backgroundColor: palette.background.secondary,
    borderRadius: shape.borderRadius.medium,
    padding: spacing.get(2),

    '.isOpen.isOpening &': {
      animation: `${animations.fadeInUp} ${transitions.duration.screen - 10}ms ease-in-out 1`,
    },
    '.isOpen.isClosing &': {
      animation: `${animations.fadeOutDown} ${transitions.duration.screen - 5}ms ease-in-out 1`,
    },
  };

  const styles = {
    root: Object.assign({ ...rootBase }),
    container: Object.assign({ ...containerBase }),
    backdrop: Object.assign({ ...backdropBase }),
    dialog: Object.assign({ ...dialogBase }),
  };

  return { styles };
};
