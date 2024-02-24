import { UseControlLabelStyles, UseControlLabelStylesReturn, ControlLabelStylesProps } from 'types';
import { useKireiContext } from 'styles';
import { useCreateControlLabelStyles } from './useCreateControlLabelStyles';

export const useControlLabelStyles = (
  { styles }: UseControlLabelStyles,
  { ...ControlLabelStyles }: ControlLabelStylesProps
): UseControlLabelStylesReturn => {
  const { theme } = useKireiContext();
  const {
    styles: { root },
  } = useCreateControlLabelStyles(theme, ControlLabelStyles);

  const composedStyles = {
    root: [root, theme.components.ControlLabel.root, styles?.root],
  };

  return {
    composedStyles,
  };
};
