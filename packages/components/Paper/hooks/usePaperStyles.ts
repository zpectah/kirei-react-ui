import { UsePaperStyles, UsePaperStylesReturn, PaperStylesProps } from 'types';
import { useKireiContext } from 'styles';
import { useCreatePaperStyles } from './useCreatePaperStyles';

export const usePaperStyles = (
  { styles }: UsePaperStyles,
  { ...PaperStyles }: PaperStylesProps
): UsePaperStylesReturn => {
  const { theme } = useKireiContext();
  const {
    styles: { root },
  } = useCreatePaperStyles(theme, PaperStyles);

  const composedStyles = {
    root: [root, theme.components.Paper.root, styles?.root],
  };

  return {
    composedStyles,
  };
};
