import { Theme, TypographyColor, baseColorKeys, exoticColorKeys, emotionColorKeys, textColorKeys } from 'types';

export const getTypographyColor = (theme: Theme, color: TypographyColor) => {
  const rootColorMap = {
    [baseColorKeys.primary]: theme.palette.primary.main,
    [baseColorKeys.secondary]: theme.palette.secondary.main,
    [baseColorKeys.tertiary]: theme.palette.tertiary.main,
    [emotionColorKeys.error]: theme.palette.error.main,
    [emotionColorKeys.warning]: theme.palette.warning.main,
    [emotionColorKeys.info]: theme.palette.info.main,
    [emotionColorKeys.success]: theme.palette.success.main,
    [exoticColorKeys.light]: theme.palette.light.main,
    [exoticColorKeys.dark]: theme.palette.dark.main,
    [exoticColorKeys.inverted]: theme.palette.inverted.main,
    [textColorKeys['text-primary']]: theme.palette.text.primary,
    [textColorKeys['text-secondary']]: theme.palette.text.secondary,
    [textColorKeys['text-tertiary']]: theme.palette.text.tertiary,
    [textColorKeys.muted]: theme.palette.text.muted,
    [textColorKeys.disabled]: theme.palette.text.disabled,
    [textColorKeys.inherit]: 'inherit',
  };

  return rootColorMap[color];
};
