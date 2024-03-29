import { Theme, BackdropStylesProps } from 'types';
import { BACKDROP_DEFAULT_VALUES } from 'core';

export const useCreateBackdropStyles = (theme: Theme, stylesProps: BackdropStylesProps) => {
  const { background = BACKDROP_DEFAULT_VALUES.background } = stylesProps;
  const { palette } = theme;

  const rootBase = {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.utils.getAlphaColor(palette.common[background], 0.65),
  };

  const styles = {
    root: Object.assign({
      ...rootBase,
    }),
  };

  return { styles };
};
