import { Theme, ModalStylesProps } from 'types';
import { STATUS_CLASS_NAMES } from 'core';
import { animations, getContainerMaxWidth } from 'styles';

export const useCreateModalStyles = (theme: Theme, stylesProps: ModalStylesProps) => {
  const { breakpoints, transitions, palette, shape, spacing, zIndex } = theme;
  const { maxWidth, isFullscreen, scroll } = stylesProps;

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
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // TODO - this cause problem when overflow
    // justifyContent: 'space-evenly',
    // justifyContent: 'center', // TODO !!! -- only with paper
    overflowY: 'auto',
    overflowX: 'hidden',

    // '&::before': {
    //   content: '""',
    // },
    // '&::after': {
    //   content: '""',
    // },
  };
  const containerScroll = {
    body: {},
    paper: {
      justifyContent: 'center',
    },
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
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // flex: 1,
    // flexGrow: 1,
    minHeight: 'min-content',
    // flexShrink: 0,

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
        ...getContainerMaxWidth(maxWidth, breakpoints),
      };

  const dialogScroll = {
    body: {
      height: 'auto',
      minHeight: '100%',
    },
    paper: {
      // height: '100vh',
      maxHeight: `calc(100vh - ${spacing.get(8)})`,
    },
  };

  const paperBase = {
    position: 'relative',
    flexShrink: 0,
    margin: spacing.get(4),
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: palette.background.secondary,
    color: palette.text.primary,
    borderRadius: shape.borderRadius.medium,
  };

  const paperScroll = {
    body: {
      // maxHeight: '100vh',
      height: 'auto',
    },
    paper: {
      minHeight: 0,
      maxHeight: `calc(100vh - ${spacing.get(8)})`,
    },
  };

  const styles = {
    root: Object.assign({ ...rootBase }),
    container: Object.assign({ ...containerBase, ...containerScroll[scroll] }),
    backdrop: Object.assign({ ...backdropBase }),
    dialog: Object.assign({ ...dialogBase, ...dialogSize, ...dialogScroll[scroll] }),
    paper: Object.assign({ ...paperBase, ...paperScroll[scroll] }),
  };

  return { styles };
};
