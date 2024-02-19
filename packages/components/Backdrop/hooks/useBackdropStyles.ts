import { UseBackdropStyles, UseBackdropStylesReturn, BackdropStylesProps } from 'types';
import { useKireiContext } from 'styles';
import { useCreateBackdropStyles } from './useCreateBackdropStyles';

export const useBackdropStyles = (
  { styles }: UseBackdropStyles,
  { ...BackdropStyles }: BackdropStylesProps
): UseBackdropStylesReturn => {
  const { theme } = useKireiContext();
  const {
    styles: { root },
  } = useCreateBackdropStyles(theme, BackdropStyles);

  const composedStyles = {
    root: [root, theme.components.Backdrop.root, styles?.root],
  };

  return {
    composedStyles,
  };
};
