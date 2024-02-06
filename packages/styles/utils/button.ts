import Color from 'color';
import {
  ButtonStylesProps,
  ThemePalette,
  ThemeShape,
  ThemeSpacing,
  ShapeSize,
  shapeSizeKeys,
  exoticColorKeys,
  themeModeKeys,
} from 'types';
import { STATUS_CLASS_NAMES } from 'core';
import { getFocusPropertyValue } from './shape';

export const getShadowWidth = (size: ShapeSize, spacing: ThemeSpacing) => {
  switch (size) {
    case shapeSizeKeys.small:
      return spacing.get(4);

    case shapeSizeKeys.medium:
      return spacing.get(6);

    case shapeSizeKeys.large:
      return spacing.get(8);
  }
};

export const getContainedButtonVariant = (
  palette: ThemePalette,
  shape: ThemeShape,
  spacing: ThemeSpacing,
  { color, size }: ButtonStylesProps
) => {
  const baseColor = palette[color];
  const isInverted = color === exoticColorKeys.inverted;
  const isLightMode = palette.mode === themeModeKeys.light;
  const bgMain = baseColor.main;
  const bgLight = baseColor.light;
  const bgDark = baseColor.dark;
  const bgContrast = baseColor.contrast;
  const bgDisabled = palette.action.disabled;
  const hoverShadowWidth = getShadowWidth(size, spacing);

  return {
    backgroundColor: bgMain,
    color: bgContrast,
    borderColor: bgMain,

    [`&:hover:not(&.${STATUS_CLASS_NAMES.isDisabled}), &.${STATUS_CLASS_NAMES.isActive}`]: isInverted
      ? {
          boxShadow: `inset 0 0 0 ${hoverShadowWidth} ${isLightMode ? bgLight : bgDark}`,
          borderColor: isLightMode ? bgLight : bgDark,
        }
      : {
          boxShadow: `inset 0 0 0 ${hoverShadowWidth} ${isLightMode ? bgDark : bgLight}`,
          borderColor: isLightMode ? bgDark : bgLight,
        },
    ['&:focus']: getFocusPropertyValue(bgLight, palette.ratio.focusOutlineAlpha, shape.borderWidth.outline),
    [`&.${STATUS_CLASS_NAMES.isDisabled}`]: isInverted
      ? {
          backgroundColor: bgDisabled,
          color: Color(bgMain).alpha(palette.ratio.disabledInvertedAlpha).toString(),
          borderColor: bgDisabled,
        }
      : {
          color: isLightMode ? Color(bgDisabled).darken(0.25).toString() : Color(bgDisabled).lighten(0.25).toString(),
          backgroundColor: bgDisabled,
          borderColor: 'transparent',
        },
  };
};

export const getOutlinedButtonVariant = (
  palette: ThemePalette,
  shape: ThemeShape,
  spacing: ThemeSpacing,
  { color, size }: ButtonStylesProps
) => {
  const baseColor = palette[color];
  const isInverted = color === exoticColorKeys.inverted;
  const isLightMode = palette.mode === themeModeKeys.light;
  const bgMain = baseColor.main;
  const bgLight = baseColor.light;
  const bgDark = baseColor.dark;
  const bgDisabled = palette.action.disabled;
  const hoverShadowWidth = getShadowWidth(size, spacing);

  return {
    backgroundColor: 'transparent',
    color: bgMain,
    borderColor: bgMain,

    [`&:hover:not(&.${STATUS_CLASS_NAMES.isDisabled}), &.${STATUS_CLASS_NAMES.isActive}`]: isInverted
      ? {
          boxShadow: `inset 0 0 0 ${hoverShadowWidth} ${Color(isLightMode ? bgLight : bgDark)
            .alpha(palette.ratio.hoverShadowAlpha)
            .toString()}`,
          color: isLightMode ? bgLight : bgDark,
          borderColor: isLightMode ? bgLight : bgDark,
        }
      : {
          boxShadow: `inset 0 0 0 ${hoverShadowWidth} ${Color(bgLight).alpha(palette.ratio.hoverShadowAlpha).toString()}`,
          color: isLightMode ? bgDark : bgLight,
          borderColor: isLightMode ? bgDark : bgLight,
        },
    ['&:focus']: getFocusPropertyValue(bgLight, palette.ratio.focusOutlineAlpha, shape.borderWidth.outline),
    [`&.${STATUS_CLASS_NAMES.isDisabled}`]: isInverted
      ? {
          color: bgDisabled,
          borderColor: bgDisabled,
        }
      : {
          color: bgDisabled,
          borderColor: bgDisabled,
        },
  };
};

export const getTextButtonVariant = (
  palette: ThemePalette,
  shape: ThemeShape,
  spacing: ThemeSpacing,
  { color, size }: ButtonStylesProps
) => {
  const baseColor = palette[color];
  const isInverted = color === exoticColorKeys.inverted;
  const isLightMode = palette.mode === themeModeKeys.light;
  const bgMain = baseColor.main;
  const bgLight = baseColor.light;
  const bgDark = baseColor.dark;
  const bgDisabled = palette.action.disabled;
  const hoverShadowWidth = getShadowWidth(size, spacing);

  return {
    backgroundColor: 'transparent',
    color: bgMain,
    borderColor: 'transparent',

    [`&:hover:not(&.${STATUS_CLASS_NAMES.isDisabled}), &.${STATUS_CLASS_NAMES.isActive}`]: isInverted
      ? {
          boxShadow: `inset 0 0 0 ${hoverShadowWidth} ${Color(isLightMode ? bgLight : bgDark)
            .alpha(palette.ratio.hoverShadowAlpha)
            .toString()}`,
          color: isLightMode ? bgLight : bgDark,
        }
      : {
          boxShadow: `inset 0 0 0 ${hoverShadowWidth} ${Color(bgLight).alpha(palette.ratio.hoverShadowAlpha).toString()}`,
          color: isLightMode ? bgDark : bgLight,
        },
    ['&:focus']: getFocusPropertyValue(bgLight, palette.ratio.focusOutlineAlpha, shape.borderWidth.outline),
    [`&.${STATUS_CLASS_NAMES.isDisabled}`]: isInverted
      ? {
          color: bgDisabled,
        }
      : {
          color: bgDisabled,
        },
  };
};
