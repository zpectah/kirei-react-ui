import { Theme, TypographyColor, baseColorKeys, neutralColorKeys, emotionColorKeys, textColorKeys } from 'types';

export const getTypographyColor = (theme: Theme, color: TypographyColor) => {
  const rootColorMap = {
    [baseColorKeys.primary]: theme.palette.primary.main,
    [baseColorKeys.secondary]: theme.palette.secondary.main,
    [baseColorKeys.tertiary]: theme.palette.tertiary.main,
    [emotionColorKeys.error]: theme.palette.error.main,
    [emotionColorKeys.warning]: theme.palette.warning.main,
    [emotionColorKeys.info]: theme.palette.info.main,
    [emotionColorKeys.success]: theme.palette.success.main,
    [neutralColorKeys.light]: theme.palette.light.main,
    [neutralColorKeys.dark]: theme.palette.dark.main,
    [neutralColorKeys.inverted]: theme.palette.inverted.main,
    [neutralColorKeys.neutral]: theme.palette.neutral.main,
    [textColorKeys['text-primary']]: theme.palette.text.primary,
    [textColorKeys['text-secondary']]: theme.palette.text.secondary,
    [textColorKeys.muted]: theme.palette.text.muted,
    [textColorKeys.disabled]: theme.palette.text.disabled,
    [textColorKeys.inherit]: 'inherit',
  };

  return rootColorMap[color];
};
