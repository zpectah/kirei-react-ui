import { Theme, PaperStylesProps } from 'types';

export const useCreatePaperStyles = (theme: Theme, stylesProps: PaperStylesProps) => {
  const { color } = stylesProps;
  const { palette, shape } = theme;

  const rootBase = {
    // backgroundColor: palette.background.paper,
    // color: palette.text.primary,
    borderRadius: shape.borderRadius.medium,
    boxShadow: `${palette.utils.getAlphaColor(palette.common.black, 0.125)} 0px 2px 8px 0px`, // TODO
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

  const styles = {
    root: Object.assign({
      ...rootBase,
      ...rootColor[color],
    }),
  };

  return { styles };
};
