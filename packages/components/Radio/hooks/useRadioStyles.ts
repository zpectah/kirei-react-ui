import { UseRadioStyles, UseRadioStylesReturn, RadioStylesProps } from 'types';
import { useKireiContext } from 'styles';
import { useCreateRadioStyles } from './useCreateRadioStyles';

export const useRadioStyles = (
  { styles }: UseRadioStyles,
  { ...RadioStyles }: RadioStylesProps
): UseRadioStylesReturn => {
  const { theme } = useKireiContext();
  const {
    styles: { root },
  } = useCreateRadioStyles(theme, RadioStyles);

  const composedStyles = {
    root: [root, theme.components.Radio.root, styles?.root],
  };

  return {
    composedStyles,
  };
};
