import { UseStackStyles, UseStackStylesReturn, StackStylesProps } from 'types';
import { useUiContext } from 'styles';
import { useCreateStackStyles } from './useCreateStackStyles';

export const useStackStyles = (
  { styles }: UseStackStyles,
  { ...stackStyles }: StackStylesProps
): UseStackStylesReturn => {
  const { theme } = useUiContext();
  const {
    styles: { root },
  } = useCreateStackStyles(theme, stackStyles);

  const composedStyles = {
    root: [root, theme.components.Stack.root, styles?.root],
  };

  return {
    composedStyles,
  };
};
