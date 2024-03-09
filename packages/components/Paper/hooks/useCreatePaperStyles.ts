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
  const { paletteV2, shape, shadows } = theme;

  const borderPrefix = `${shape.borderWidth.divider} solid`;

  const rootBase = {
    borderRadius: isSquare ? 0 : shape.borderRadius.medium,
    boxShadow: shadows[elevation],
  };
  const rootVariants = {
    paper: {
      contained: {
        backgroundColor: paletteV2.background.paper.current,
        color: paletteV2.text.body.current,
      },
      outlined: {
        color: paletteV2.text.body.current,
        border: `${borderPrefix} ${paletteV2.background.divider}`,
      },
      glass: {
        backgroundColor: paletteV2.utils.getAlphaColor(paletteV2.background.paper.current, BACKGROUND_GLASS_ALPHA),
        border: `${borderPrefix} ${paletteV2.background.divider}`,
      },
    },
    primary: getShapePaper(paletteV2.primary, borderPrefix, paletteV2.utils.getAlphaColor),
    secondary: getShapePaper(paletteV2.secondary, borderPrefix, paletteV2.utils.getAlphaColor),
    tertiary: getShapePaper(paletteV2.tertiary, borderPrefix, paletteV2.utils.getAlphaColor),
    success: getShapePaper(paletteV2.success, borderPrefix, paletteV2.utils.getAlphaColor),
    info: getShapePaper(paletteV2.info, borderPrefix, paletteV2.utils.getAlphaColor),
    warning: getShapePaper(paletteV2.warning, borderPrefix, paletteV2.utils.getAlphaColor),
    error: getShapePaper(paletteV2.error, borderPrefix, paletteV2.utils.getAlphaColor),
    light: getShapePaper(paletteV2.light, borderPrefix, paletteV2.utils.getAlphaColor),
    dark: getShapePaper(paletteV2.dark, borderPrefix, paletteV2.utils.getAlphaColor),
    neutral: getShapePaper(paletteV2.neutral, borderPrefix, paletteV2.utils.getAlphaColor),
    inverted: getShapePaper(paletteV2.inverted, borderPrefix, paletteV2.utils.getAlphaColor),
  };

  const styles = {
    root: Object.assign({
      ...rootBase,
      ...rootVariants[color][variant],
    }),
  };

  return { styles };
};
