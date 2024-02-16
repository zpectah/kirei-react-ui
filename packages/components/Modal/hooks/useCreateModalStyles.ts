import { Theme, ModalStylesProps } from 'types';
import { STATUS_CLASS_NAMES } from 'core';
import { animations, getContainerMaxWidth } from 'styles';

export const useCreateModalStyles = (theme: Theme, stylesProps: ModalStylesProps) => {
  const { breakpoints, transitions, palette, shape, spacing, zIndex } = theme;
  const { maxWidth, isFullscreen } = stylesProps;

  const rootBase = {
    margin: 0,
    padding: 0,
    border: 0,
    position: 'fixed',
    top: 0,
    left: 0,
    background: 'none',
    zIndex: zIndex.modal - 1,

    '&::backdrop': {
      background: 'none',
    },
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
    overflowY: 'scroll',
  };
  const backdropBase = {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    backgroundColor: palette.utils.getAlphaColor(palette.dark.dark, palette.ratio.backgroundAlpha),

    [`.${STATUS_CLASS_NAMES.isOpen}.${STATUS_CLASS_NAMES.isOpening} &`]: {
      animation: `${animations.fadeIn} ${transitions.duration.screen - 5}ms ${transitions.easing.easeIn} 1`,
    },
    [`.${STATUS_CLASS_NAMES.isOpen}.${STATUS_CLASS_NAMES.isClosing} &`]: {
      animation: `${animations.fadeOut} ${transitions.duration.screen + 10}ms ${transitions.easing.easeOut} 1`,
    },
  };
  const dialogBase = {
    position: 'absolute',
    zIndex: zIndex.modal,
    backgroundColor: palette.background.secondary,
    color: palette.text.primary,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',

    [`.${STATUS_CLASS_NAMES.isOpen}.${STATUS_CLASS_NAMES.isOpening} &`]: {
      animation: `${animations.zoomIn} ${transitions.duration.screen - 5}ms ${transitions.easing.easeIn} 1`,
    },
    [`.${STATUS_CLASS_NAMES.isOpen}.${STATUS_CLASS_NAMES.isClosing} &`]: {
      animation: `${animations.zoomOut} ${transitions.duration.screen + 10}ms ${transitions.easing.easeOut} 1`,
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
        maxHeight: `calc(100vh - ${spacing.get(8)})`,
        borderRadius: shape.borderRadius.medium,
        ...getContainerMaxWidth(maxWidth, breakpoints),
      };

  const paperBase = {};

  const styles = {
    root: Object.assign({ ...rootBase }),
    container: Object.assign({ ...containerBase }),
    backdrop: Object.assign({ ...backdropBase }),
    dialog: Object.assign({ ...dialogBase, ...dialogSize }),
    paper: Object.assign({ ...paperBase }),
  };

  return { styles };
};
