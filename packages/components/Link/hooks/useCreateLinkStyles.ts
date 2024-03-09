import Color from 'color';
import { Theme, LinkStylesProps } from 'types';
import { STATUS_CLASS_NAMES } from 'core';
import { getTypographyColor } from 'styles';

export const useCreateLinkStyles = (theme: Theme, stylesProps: LinkStylesProps) => {
  const { variant, color, underline } = stylesProps;
  const { paletteV2 } = theme;

  const rootBaseColor = getTypographyColor(paletteV2, color);

  const rootBase = {
    color: rootBaseColor,
    cursor: 'pointer',

    [`&.${STATUS_CLASS_NAMES.isDisabled}`]: {
      pointerEvents: 'none',
      cursor: 'default',
      opacity: theme.palette.ratio.disabledAlpha,
    },
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
