import { Theme, BackdropStylesProps } from 'types';
import { STATUS_CLASS_NAMES, BACKDROP_DEFAULT_VALUES } from 'core';
import { animations } from 'styles';

export const useCreateBackdropStyles = (theme: Theme, stylesProps: BackdropStylesProps) => {
  const { background = BACKDROP_DEFAULT_VALUES.background } = stylesProps;
  const { palette, transitions } = theme;

  const bgColor = palette[background].dark;
  const rootBase = {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 'inherit',
    backgroundColor: palette.utils.getAlphaColor(bgColor, palette.ratio.backgroundAlpha),

    [`.${STATUS_CLASS_NAMES.isOpen}.${STATUS_CLASS_NAMES.isOpening} &`]: {
      animation: `${animations.fadeIn} ${transitions.duration.screen}ms ${transitions.easing.easeIn} 1`,
    },
    [`.${STATUS_CLASS_NAMES.isOpen}.${STATUS_CLASS_NAMES.isClosing} &`]: {
      animation: `${animations.fadeOut} ${transitions.duration.screen}ms ${transitions.easing.easeOut} 1`,
    },
  };

  const styles = {
    root: Object.assign({
      ...rootBase,
    }),
  };

  return { styles };
};
