import Color from 'color';
import { Theme, LinkStylesProps } from 'types';
import { getTypographyColor } from 'styles';

export const useCreateLinkStyles = (theme: Theme, stylesProps: LinkStylesProps) => {
  const { variant, color, underline } = stylesProps;

  const rootBaseColor = getTypographyColor(theme, color);

  const rootBase = {
    color: rootBaseColor,
    cursor: 'pointer',
  };
  const rootVariant = variant === 'inherit' ? {} : theme.typography[variant];
  const rootUnderline = {
    none: {},
    hover: {
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'underline',
      },
    },
    always: {
      textDecoration: 'underline',

      '&:hover': {
        textDecorationColor: Color(rootBaseColor).alpha(0.5).toString(),
      },
    },
  };

  const styles = {
    root: Object.assign({
      ...rootBase,
      ...rootVariant,
      ...rootUnderline[underline],
    }),
  };

  return {
    styles,
  };
};
