import { DeepPartial, ThemeTypography } from 'types';
import {
  TYPOGRAPHY_FONT_SIZE,
  TYPOGRAPHY_FONT_FAMILY,
  TYPOGRAPHY_DIRECTION,
  TYPOGRAPHY_FONT_WEIGHT_LIGHT,
  TYPOGRAPHY_FONT_WEIGHT_REGULAR,
  TYPOGRAPHY_FONT_WEIGHT_MEDIUM,
  TYPOGRAPHY_FONT_WEIGHT_SEMI_BOLD,
  TYPOGRAPHY_FONT_WEIGHT_BOLD,
  TYPOGRAPHY_FONT_WEIGHT_EXTRA_BOLD,
  TYPOGRAPHY_H1,
  TYPOGRAPHY_H2,
  TYPOGRAPHY_H3,
  TYPOGRAPHY_H4,
  TYPOGRAPHY_H5,
  TYPOGRAPHY_H6,
  TYPOGRAPHY_SUBTITLE1,
  TYPOGRAPHY_SUBTITLE2,
  TYPOGRAPHY_BODY1,
  TYPOGRAPHY_BODY2,
  TYPOGRAPHY_CAPTION,
  TYPOGRAPHY_OVERLINE,
  TYPOGRAPHY_SHAPE_SMALL,
  TYPOGRAPHY_SHAPE_MEDIUM,
  TYPOGRAPHY_SHAPE_LARGE,
} from 'core';

export const createThemeTypography = (typography?: DeepPartial<ThemeTypography>): ThemeTypography => {
  return {
    fontSize: typography?.fontSize || TYPOGRAPHY_FONT_SIZE,
    fontFamily: typography?.fontFamily || TYPOGRAPHY_FONT_FAMILY,
    fontWeightLight: typography?.fontWeightLight || TYPOGRAPHY_FONT_WEIGHT_LIGHT,
    fontWeightRegular: typography?.fontWeightRegular || TYPOGRAPHY_FONT_WEIGHT_REGULAR,
    fontWeightMedium: typography?.fontWeightMedium || TYPOGRAPHY_FONT_WEIGHT_MEDIUM,
    fontWeightSemiBold: typography?.fontWeightSemiBold || TYPOGRAPHY_FONT_WEIGHT_SEMI_BOLD,
    fontWeightBold: typography?.fontWeightBold || TYPOGRAPHY_FONT_WEIGHT_BOLD,
    fontWeightExtraBold: typography?.fontWeightExtraBold || TYPOGRAPHY_FONT_WEIGHT_EXTRA_BOLD,
    direction: typography?.direction || TYPOGRAPHY_DIRECTION,
    h1: {
      ...TYPOGRAPHY_H1,
      ...typography?.h1,
    },
    h2: {
      ...TYPOGRAPHY_H2,
      ...typography?.h2,
    },
    h3: {
      ...TYPOGRAPHY_H3,
      ...typography?.h3,
    },
    h4: {
      ...TYPOGRAPHY_H4,
      ...typography?.h4,
    },
    h5: {
      ...TYPOGRAPHY_H5,
      ...typography?.h5,
    },
    h6: {
      ...TYPOGRAPHY_H6,
      ...typography?.h6,
    },
    subtitle1: {
      ...TYPOGRAPHY_SUBTITLE1,
      ...typography?.subtitle1,
    },
    subtitle2: {
      ...TYPOGRAPHY_SUBTITLE2,
      ...typography?.subtitle2,
    },
    body1: {
      ...TYPOGRAPHY_BODY1,
      ...typography?.body1,
    },
    body2: {
      ...TYPOGRAPHY_BODY2,
      ...typography?.body2,
    },
    caption: {
      ...TYPOGRAPHY_CAPTION,
      ...typography?.caption,
    },
    overline: {
      ...TYPOGRAPHY_OVERLINE,
      ...typography?.overline,
    },
    shapeSmall: {
      ...TYPOGRAPHY_SHAPE_SMALL,
      ...typography?.shapeSmall,
    },
    shapeMedium: {
      ...TYPOGRAPHY_SHAPE_MEDIUM,
      ...typography?.shapeMedium,
    },
    shapeLarge: {
      ...TYPOGRAPHY_SHAPE_LARGE,
      ...typography?.shapeLarge,
    },
  };
};
