import { UseFieldLabelStyles, UseFieldLabelStylesReturn, FieldLabelStylesProps } from 'types';
import { useKireiContext } from 'styles';
import { useCreateFieldLabelStyles } from './useCreateFieldLabelStyles';

export const useFieldLabelStyles = (
  { styles }: UseFieldLabelStyles,
  { ...LabelStyles }: FieldLabelStylesProps
): UseFieldLabelStylesReturn => {
  const { theme } = useKireiContext();
  const {
    styles: { root },
  } = useCreateFieldLabelStyles(theme, LabelStyles);

  const composedStyles = {
    root: [root, theme.components.FieldLabel.root, styles?.root],
  };

  return {
    composedStyles,
  };
};
