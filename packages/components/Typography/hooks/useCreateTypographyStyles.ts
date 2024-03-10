import { Theme, TypographyStylesProps } from 'types';
import { getTypographyColor } from 'styles';

export const useCreateTypographyStyles = (theme: Theme, stylesProps: TypographyStylesProps) => {
  const { variant, color, isTruncated } = stylesProps;
  const { palette } = theme;

  const rootBaseColor = getTypographyColor(palette, color);

  const rootBase = {
    color: rootBaseColor,
  };
  const rootVariant = variant === 'inherit' ? {} : theme.typography[variant];
  const rootTruncate = isTruncated
    ? {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }
    : {};

  const styles = {
    root: Object.assign({
      ...rootBase,
      ...rootVariant,
      ...rootTruncate,
    }),
  };

  return { styles };
};
