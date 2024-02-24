import { UseLabelStyles, UseLabelStylesReturn, LabelStylesProps } from 'types';
import { useKireiContext } from 'styles';
import { useCreateLabelStyles } from './useCreateLabelStyles';

export const useLabelStyles = (
  { styles }: UseLabelStyles,
  { ...LabelStyles }: LabelStylesProps
): UseLabelStylesReturn => {
  const { theme } = useKireiContext();
  const {
    styles: { root },
  } = useCreateLabelStyles(theme, LabelStyles);

  const composedStyles = {
    root: [root, theme.components.Label.root, styles?.root],
  };

  return {
    composedStyles,
  };
};
