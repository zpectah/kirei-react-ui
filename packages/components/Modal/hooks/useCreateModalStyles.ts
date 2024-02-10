import { Theme, ModalStylesProps } from 'types';
import { getElementTransitions } from 'styles';

export const useCreateModalStyles = (theme: Theme, stylesProps: ModalStylesProps) => {
  const { transitions, palette, shape } = theme;
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
  const backdropBase = {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    transition: getElementTransitions(['background-color'], transitions.duration.screen, transitions.easing.easeInOut),

    backgroundColor: palette.utils.getAlphaColor(palette.dark.dark, 0),
    '.isOpen:not(.isOpening,.isClosing) &': {
      backgroundColor: palette.utils.getAlphaColor(palette.dark.dark, palette.ratio.backgroundAlpha),
    },

    // '.isOpening &': {},
    // '.isClosing &': {},
  };
  const containerBase = {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
  };
  const dialogBase = {
    width: '50%', // TODO
    height: '50%', // TODO
    position: 'fixed',
    top: '25%', // TODO
    left: '25%', // TODO

    backgroundColor: palette.background.secondary,
    borderRadius: shape.borderRadius.medium,
    transition: getElementTransitions(['opacity'], transitions.duration.screen, transitions.easing.easeInOut),

    opacity: 0,
    '.isOpen:not(.isOpening,.isClosing) &': {
      opacity: 1,
    },
  };

  const styles = {
    root: Object.assign({ ...rootBase }),
    backdrop: Object.assign({ ...backdropBase }),
    container: Object.assign({ ...containerBase }),
    dialog: Object.assign({ ...dialogBase }),
  };

  return { styles };
};
