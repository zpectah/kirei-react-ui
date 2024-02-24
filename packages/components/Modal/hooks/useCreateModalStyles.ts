import { Theme, ModalStylesProps } from 'types';
import { STATUS_CLASS_NAMES } from 'core';
import { animations, getContainerMaxWidth } from 'styles';

export const useCreateModalStyles = (theme: Theme, stylesProps: ModalStylesProps) => {
  const { breakpoints, transitions, spacing, zIndex } = theme;
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
    alignItems: 'center',
    overflowY: 'auto',
    overflowX: 'hidden',
  };
  const containerScroll = {
    body: {},
    paper: {
      justifyContent: 'center',
    },
  };

  const backdropBase = {
    zIndex: -1,
  };

  const dialogBase = {
    position: 'absolute',
    zIndex: zIndex.modal,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 'min-content',

    [`.${STATUS_CLASS_NAMES.isOpen}.${STATUS_CLASS_NAMES.isOpening} &`]: {
      animation: `${animations.zoomIn} ${transitions.duration.screen - 5}ms ${transitions.easing.easeIn} 1`,
    },
    [`.${STATUS_CLASS_NAMES.isOpen}.${STATUS_CLASS_NAMES.isClosing} &`]: {
      animation: `${animations.zoomOut} ${transitions.duration.screen + 10}ms ${transitions.easing.easeOut} 1`,
    },
  };
  const dialogWidth = isFullscreen
    ? {
        width: '100vw',
      }
    : {
        width: '100%',
        ...getContainerMaxWidth(maxWidth, breakpoints),
      };

  const dialogHeight = {
    body: isFullscreen
      ? {}
      : {
          height: 'auto',
          minHeight: '100%',
        },
    paper: isFullscreen
      ? {
          height: `calc(100vh - ${spacing.get(8)})`,
        }
      : {
          maxHeight: `calc(100vh - ${spacing.get(8)})`,
        },
  };

  const paperBase = {
    position: 'relative',
    flexShrink: 0,
    margin: spacing.get(4),
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    overflowX: 'hidden',
  };
  const paperHeight = {
    body: isFullscreen
      ? {
          minHeight: `calc(100vh - ${spacing.get(8)})`,
        }
      : {
          height: 'auto',
        },
    paper: isFullscreen
      ? {
          height: `calc(100vh - ${spacing.get(8)})`,
        }
      : {
          minHeight: 0,
          maxHeight: `calc(100vh - ${spacing.get(8)})`,
        },
  };

  const styles = {
    root: Object.assign({ ...rootBase }),
    container: Object.assign({ ...containerBase, ...containerScroll[scroll] }),
    backdrop: Object.assign({ ...backdropBase }),
    dialog: Object.assign({ ...dialogBase, ...dialogWidth, ...dialogHeight[scroll] }),
    paper: Object.assign({ ...paperBase, ...paperHeight[scroll] }),
  };

  return { styles };
};
