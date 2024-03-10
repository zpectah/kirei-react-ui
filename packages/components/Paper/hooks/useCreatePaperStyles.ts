import { BACKGROUND_GLASS_ALPHA } from 'core';
import { Theme, PaperStylesProps, ThemePaletteColor } from 'types';

const getShapePaper = (
  tone: ThemePaletteColor,
  borderPrefix: string,
  getAlphaColor: (color: string, ratio: number) => string
) => {
  return {
    contained: {
      backgroundColor: tone.main.current,
      color: tone.contrast.current,
    },
    outlined: {
      color: tone.main.current,
      border: `${borderPrefix} ${tone.main.current}`,
    },
    glass: {
      color: tone.main.current,
      backgroundColor: getAlphaColor(tone.main.current, BACKGROUND_GLASS_ALPHA),
      border: `${borderPrefix} ${tone.main.current}`,
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
        backgroundColor: palette.background.paper.current,
        color: palette.text.body.current,
      },
      outlined: {
        color: palette.text.body.current,
        border: `${borderPrefix} ${palette.background.divider}`,
      },
      glass: {
        backgroundColor: palette.utils.getAlphaColor(palette.background.paper.current, BACKGROUND_GLASS_ALPHA),
        border: `${borderPrefix} ${palette.background.divider}`,
      },
    },
    primary: getShapePaper(palette.primary, borderPrefix, palette.utils.getAlphaColor),
    secondary: getShapePaper(palette.secondary, borderPrefix, palette.utils.getAlphaColor),
    tertiary: getShapePaper(palette.tertiary, borderPrefix, palette.utils.getAlphaColor),
    success: getShapePaper(palette.success, borderPrefix, palette.utils.getAlphaColor),
    info: getShapePaper(palette.info, borderPrefix, palette.utils.getAlphaColor),
    warning: getShapePaper(palette.warning, borderPrefix, palette.utils.getAlphaColor),
    error: getShapePaper(palette.error, borderPrefix, palette.utils.getAlphaColor),
    light: getShapePaper(palette.light, borderPrefix, palette.utils.getAlphaColor),
    dark: getShapePaper(palette.dark, borderPrefix, palette.utils.getAlphaColor),
    neutral: getShapePaper(palette.neutral, borderPrefix, palette.utils.getAlphaColor),
    inverted: getShapePaper(palette.inverted, borderPrefix, palette.utils.getAlphaColor),
  };

  const styles = {
    root: Object.assign({
      ...rootBase,
      ...rootVariants[color][variant],
    }),
  };

  return { styles };
};
