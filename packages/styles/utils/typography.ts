import {
  TypographyColor,
  brandColorKeys,
  neutralColorKeys,
  emotionColorKeys,
  textColorKeys,
  ThemePaletteV2,
} from 'types';

export const getTypographyColor = (palette: ThemePaletteV2, color: TypographyColor) => {
  const rootColorMap = {
    [brandColorKeys.primary]: palette.primary.main.current,
    [brandColorKeys.secondary]: palette.secondary.main.current,
    [brandColorKeys.tertiary]: palette.tertiary.main.current,
    [emotionColorKeys.error]: palette.error.main.current,
    [emotionColorKeys.warning]: palette.warning.main.current,
    [emotionColorKeys.info]: palette.info.main.current,
    [emotionColorKeys.success]: palette.success.main.current,
    [neutralColorKeys.light]: palette.light.main.current,
    [neutralColorKeys.dark]: palette.dark.main.current,
    [neutralColorKeys.inverted]: palette.inverted.main.current,
    [neutralColorKeys.neutral]: palette.neutral.main.current,
    [textColorKeys.body]: palette.text.body.current,
    [textColorKeys.muted]: palette.text.muted.current,
    [textColorKeys.disabled]: palette.text.disabled.current,
    [textColorKeys.inherit]: 'inherit',
  };

  return rootColorMap[color];
};
