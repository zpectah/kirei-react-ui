import { Theme, PaperStylesProps } from 'types';

export const useCreatePaperStyles = (theme: Theme, stylesProps: PaperStylesProps) => {
  const { color, isActive, isGlass, isSquare, disableElevation } = stylesProps;
  const { palette, shape } = theme;

  const rootBase = {
    borderRadius: isSquare ? 0 : shape.borderRadius.medium,
    boxShadow: disableElevation
      ? 'none'
      : `${palette.utils.getAlphaColor(palette.common.black, 0.1)} 0px 0.25rem 1rem, 
      ${palette.utils.getAlphaColor(palette.common.black, 0.1)} 0px 0.5rem 1.5rem, 
      ${palette.utils.getAlphaColor(palette.common.black, 0.1)} 0px 1rem 4.25rem`,
  };
  const rootColor = {
    paper: {
      backgroundColor: palette.background.paper,
      color: palette.text.primary,
    },
    primary: {
      backgroundColor: palette.primary.main,
      color: palette.primary.contrast,
    },
    secondary: {
      backgroundColor: palette.secondary.main,
      color: palette.secondary.contrast,
    },
    tertiary: {
      backgroundColor: palette.tertiary.main,
      color: palette.tertiary.contrast,
    },
    neutral: {
      backgroundColor: palette.neutral.main,
      color: palette.neutral.contrast,
    },
    inverted: {
      backgroundColor: palette.inverted.main,
      color: palette.inverted.contrast,
    },
    dark: {
      backgroundColor: palette.dark.main,
      color: palette.dark.contrast,
    },
    light: {
      backgroundColor: palette.light.main,
      color: palette.light.contrast,
    },
    success: {
      backgroundColor: palette.success.main,
      color: palette.success.contrast,
    },
    info: {
      backgroundColor: palette.info.main,
      color: palette.info.contrast,
    },
    warning: {
      backgroundColor: palette.warning.main,
      color: palette.warning.contrast,
    },
    error: {
      backgroundColor: palette.error.main,
      color: palette.error.contrast,
    },
  };

  // TODO #clean-code
  const rootGlass = isGlass
    ? {
        backgroundColor: palette.utils.getAlphaColor(rootColor[color].backgroundColor, 0.45),
        color: rootColor[color].color,
      }
    : {
        ...rootColor[color],
      };
  const outlineColor = color === 'paper' ? palette.primary.main : rootColor[color].backgroundColor;
  const rootActive = isActive
    ? {
        ...rootGlass,
        outline: `${shape.borderWidth.outline} solid ${palette.utils.getAlphaColor(outlineColor, palette.ratio.activeAlpha * 5)}`,
      }
    : {
        ...rootGlass,
      };

  const styles = {
    root: Object.assign({
      ...rootBase,
      ...rootActive,
    }),
  };

  return { styles };
};
