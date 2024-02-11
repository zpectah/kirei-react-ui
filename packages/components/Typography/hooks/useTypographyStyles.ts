import { UseTypographyStyles, UseTypographyStylesReturn, TypographyStylesProps } from 'types';
import { useKireiContext } from 'styles';
import { useCreateTypographyStyles } from './useCreateTypographyStyles';

export const useTypographyStyles = (
  { styles }: UseTypographyStyles,
  { ...typographyStyles }: TypographyStylesProps
): UseTypographyStylesReturn => {
  const { theme } = useKireiContext();
  const {
    styles: { root },
  } = useCreateTypographyStyles(theme, typographyStyles);

  const composedStyles = {
    root: [root, theme.components.Typography.root, styles?.root],
  };

  return {
    composedStyles,
  };
};
