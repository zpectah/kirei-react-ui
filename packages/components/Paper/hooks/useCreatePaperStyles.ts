import { BACKGROUND_GLASS_ALPHA } from 'core';
import { Theme, PaperStylesProps } from 'types';

const getPaperShape = (
  background: string,
  color: string,
  colorAlt: string,
  border: string,
  getAlphaColor: (color: string, ratio: number) => string,
  borderPrefix: string
) => {
  return {
    contained: {
      backgroundColor: background,
      color: color,
    },
    outlined: {
      color: background,
      border: `${borderPrefix} ${border}`,
    },
    glass: {
      color: colorAlt,
      backgroundColor: getAlphaColor(background, BACKGROUND_GLASS_ALPHA),
      border: `${borderPrefix} ${border}`,
    },
  };
};

export const useCreatePaperStyles = (theme: Theme, stylesProps: PaperStylesProps) => {
  const { color, isSquare, variant, elevation } = stylesProps;
  const { palette, shape, shadows } = theme;

  const borderPrefix = `${shape.borderWidth.divider} solid`;

  const rootBase = {
    borderRadius: isSquare ? 0 : shape.borderRadius.medium,
    boxShadow: shadows[elevation],
  };
  const rootVariants = {
    paper: {
      contained: {
        backgroundColor: palette.background.paper,
        color: palette.text.primary,
      },
      outlined: {
        color: palette.text.primary,
        border: `${borderPrefix} ${palette.shape.border}`,
      },
      glass: {
        backgroundColor: palette.utils.getAlphaColor(palette.background.paper, BACKGROUND_GLASS_ALPHA),
        border: `${borderPrefix} ${palette.shape.border}`,
      },
    },

    primary: getPaperShape(
      palette.primary.main,
      palette.primary.contrast,
      palette.primary.dark,
      palette.primary.main,
      palette.utils.getAlphaColor,
      borderPrefix
    ),
    secondary: getPaperShape(
      palette.secondary.main,
      palette.secondary.contrast,
      palette.secondary.dark,
      palette.secondary.main,
      palette.utils.getAlphaColor,
      borderPrefix
    ),
    tertiary: getPaperShape(
      palette.tertiary.main,
      palette.tertiary.contrast,
      palette.tertiary.dark,
      palette.tertiary.main,
      palette.utils.getAlphaColor,
      borderPrefix
    ),

    success: getPaperShape(
      palette.success.main,
      palette.success.contrast,
      palette.success.dark,
      palette.success.main,
      palette.utils.getAlphaColor,
      borderPrefix
    ),
    info: getPaperShape(
      palette.info.main,
      palette.info.contrast,
      palette.info.dark,
      palette.info.main,
      palette.utils.getAlphaColor,
      borderPrefix
    ),
    warning: getPaperShape(
      palette.warning.main,
      palette.warning.contrast,
      palette.warning.dark,
      palette.warning.main,
      palette.utils.getAlphaColor,
      borderPrefix
    ),
    error: getPaperShape(
      palette.error.main,
      palette.error.contrast,
      palette.error.dark,
      palette.error.main,
      palette.utils.getAlphaColor,
      borderPrefix
    ),

    inverted: getPaperShape(
      palette.inverted.main,
      palette.inverted.contrast,
      palette.inverted.dark,
      palette.inverted.main,
      palette.utils.getAlphaColor,
      borderPrefix
    ),
    neutral: getPaperShape(
      palette.neutral.main,
      palette.neutral.contrast,
      palette.neutral.dark,
      palette.neutral.main,
      palette.utils.getAlphaColor,
      borderPrefix
    ),
    light: getPaperShape(
      palette.light.main,
      palette.light.contrast,
      palette.light.dark,
      palette.light.main,
      palette.utils.getAlphaColor,
      borderPrefix
    ),
    dark: getPaperShape(
      palette.dark.main,
      palette.dark.contrast,
      palette.dark.dark,
      palette.dark.main,
      palette.utils.getAlphaColor,
      borderPrefix
    ),
  };

  const styles = {
    root: Object.assign({
      ...rootBase,
      ...rootVariants[color][variant],
    }),
  };

  return { styles };
};
