import { UseCheckboxStyles, UseCheckboxStylesReturn, CheckboxStylesProps } from 'types';
import { useKireiContext } from 'styles';
import { useCreateCheckboxStyles } from './useCreateCheckboxStyles';

export const useCheckboxStyles = (
  { styles }: UseCheckboxStyles,
  { ...CheckboxStyles }: CheckboxStylesProps
): UseCheckboxStylesReturn => {
  const { theme } = useKireiContext();
  const {
    styles: { root },
  } = useCreateCheckboxStyles(theme, CheckboxStyles);

  const composedStyles = {
    root: [root, theme.components.Checkbox.root, styles?.root],
  };

  return {
    composedStyles,
  };
};
