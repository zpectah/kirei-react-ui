import { UseIconButtonStyles, UseIconButtonStylesReturn, IconButtonStylesProps } from 'types';
import { useKireiContext } from 'styles';
import { useCreateIconButtonStyles } from './useCreateIconButtonStyles';

export const useIconButtonStyles = (
  { styles }: UseIconButtonStyles,
  { ...iconButtonStyles }: IconButtonStylesProps
): UseIconButtonStylesReturn => {
  const { theme } = useKireiContext();
  const {
    styles: { root, icon },
  } = useCreateIconButtonStyles(theme, iconButtonStyles);

  const composedStyles = {
    root: [root, theme.components.IconButton.root, styles?.root],
    icon: [icon, theme.components.IconButton.icon, styles?.icon],
  };

  return {
    composedStyles,
  };
};
