import { UseCheckboxStyles, UseCheckboxStylesReturn, CheckboxStylesProps } from 'types';
import { useKireiContext } from 'styles';
import { useCreateCheckboxStyles } from './useCreateCheckboxStyles';

export const useCheckboxStyles = (
  { styles }: UseCheckboxStyles,
  { ...CheckboxStyles }: CheckboxStylesProps
): UseCheckboxStylesReturn => {
  const { theme } = useKireiContext();
  const {
    styles: { root, label },
  } = useCreateCheckboxStyles(theme, CheckboxStyles);

  const composedStyles = {
    root: [root, theme.components.Checkbox.root, styles?.root],
    label: [label, theme.components.Checkbox.label, styles?.label],
  };

  return {
    composedStyles,
  };
};
