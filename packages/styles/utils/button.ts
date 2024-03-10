import Color from 'color';
import {
  ThemeSpacing,
  ShapeSize,
  shapeSizeKeys,
  ThemeTypography,
  ShapeVariant,
  ButtonColor,
  ThemePalette,
  ThemeShape,
  shapeVariantKeys,
  Shape,
  shapeKeys,
} from 'types';
import { SHAPE_MIN_HEIGHT, SHAPE_VARIANT_CLASS_NAME, STATUS_CLASS_NAMES } from 'core';

const capitalizeFirstLetter = (input: string) => input.charAt(0).toUpperCase() + input.slice(1);

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

export const getButtonShapeSizeVariant = (size: ShapeSize, spacing: ThemeSpacing, typography: ThemeTypography) => {
  switch (size) {
    case shapeSizeKeys.small:
      return {
        ...typography.shapeSmall,
        padding: spacing.get(1, 2),
        gap: spacing.get(1),
        minHeight: SHAPE_MIN_HEIGHT.small,
      };

    case shapeSizeKeys.medium:
      return {
        ...typography.shapeMedium,
        padding: spacing.get(2, 3),
        gap: spacing.get(1),
        minHeight: SHAPE_MIN_HEIGHT.medium,
      };

    case shapeSizeKeys.large:
      return {
        ...typography.shapeLarge,
        padding: spacing.get(2, 4),
        gap: spacing.get(2),
        minHeight: SHAPE_MIN_HEIGHT.large,
      };
  }
};

export const getButtonRootColorVariant = (
  variant: ShapeVariant,
  color: ButtonColor,
  size: ShapeSize,
  palette: ThemePalette,
  spacing: ThemeSpacing,
  shape: ThemeShape
) => {
  const capitalizeColor = capitalizeFirstLetter(color);
  const baseColor = palette[color];
  const hoverShadowWidth = getShadowWidth(size, spacing);

  switch (variant) {
    case shapeVariantKeys.contained:
      return {
        [`&.${SHAPE_VARIANT_CLASS_NAME.contained}${capitalizeColor}`]: {
          backgroundColor: baseColor.main.current,
          color: baseColor.contrast.current,
          borderColor: baseColor.main.current,

          [`&:hover:not(&.${STATUS_CLASS_NAMES.isDisabled}), &.${STATUS_CLASS_NAMES.isActive}`]: {
            boxShadow: `inset 0 0 0 ${hoverShadowWidth} ${baseColor.base}`,
            borderColor: baseColor.base,
          },
          ['&:focus']: {
            outline: `${shape.borderWidth.outline} solid ${Color(baseColor.main.current).alpha(palette.action.focusAlpha).toString()}`,
          },
          [`&.${STATUS_CLASS_NAMES.isDisabled}`]: {
            pointerEvents: 'none',
            cursor: 'default',
            color: color,
            backgroundColor: palette.action.disabled.current,
            borderColor: 'transparent',
          },
        },
      };

    case shapeVariantKeys.outlined:
      return {
        [`&.${SHAPE_VARIANT_CLASS_NAME.outlined}${capitalizeColor}`]: {
          backgroundColor: 'transparent',
          color: baseColor.main.current,
          borderColor: baseColor.main.current,

          [`&:hover:not(&.${STATUS_CLASS_NAMES.isDisabled}), &.${STATUS_CLASS_NAMES.isActive}`]: {
            boxShadow: `inset 0 0 0 ${hoverShadowWidth} ${Color(baseColor.base).alpha(0.05).toString()}`,
            color: baseColor.base,
            borderColor: baseColor.base,
          },
          ['&:focus']: {
            outline: `${shape.borderWidth.outline} solid ${Color(baseColor.main.current).alpha(palette.action.focusAlpha).toString()}`,
          },
          [`&.${STATUS_CLASS_NAMES.isDisabled}`]: {
            pointerEvents: 'none',
            cursor: 'default',
            color: palette.action.disabled.current,
            borderColor: palette.action.disabled.current,
          },
        },
      };

    case shapeVariantKeys.text:
      return {
        [`&.${SHAPE_VARIANT_CLASS_NAME.text}${capitalizeColor}`]: {
          backgroundColor: 'transparent',
          color: baseColor.main.current,
          borderColor: 'transparent',

          [`&:hover:not(&.${STATUS_CLASS_NAMES.isDisabled}), &.${STATUS_CLASS_NAMES.isActive}`]: {
            boxShadow: `inset 0 0 0 ${hoverShadowWidth} ${Color(baseColor.base).alpha(0.05).toString()}`,
            color: baseColor.base,
          },
          ['&:focus']: {
            outline: `${shape.borderWidth.outline} solid ${Color(baseColor.main.current).alpha(palette.action.focusAlpha).toString()}`,
          },
          [`&.${STATUS_CLASS_NAMES.isDisabled}`]: {
            color: palette.action.disabled.current,
          },
        },
      };
  }
};

export const getIconButtonShapeSizeVariant = (size: ShapeSize, spacing: ThemeSpacing) => {
  switch (size) {
    case shapeSizeKeys.small:
      return {
        fontSize: '1.125rem',
        padding: spacing.get(1, 1),
        width: SHAPE_MIN_HEIGHT.small,
        height: SHAPE_MIN_HEIGHT.small,
      };

    case shapeSizeKeys.medium:
      return {
        fontSize: '1.45rem',
        padding: spacing.get(2, 2),
        width: SHAPE_MIN_HEIGHT.medium,
        height: SHAPE_MIN_HEIGHT.medium,
      };

    case shapeSizeKeys.large:
      return {
        fontSize: '1.825rem',
        padding: spacing.get(3, 3),
        width: SHAPE_MIN_HEIGHT.large,
        height: SHAPE_MIN_HEIGHT.large,
      };
  }
};

export const getIconButtonShapeBorder = (shape: Shape, size: ShapeSize, themeShape: ThemeShape) => {
  const radiusSize = {
    small: SHAPE_MIN_HEIGHT.small,
    medium: SHAPE_MIN_HEIGHT.medium,
    large: SHAPE_MIN_HEIGHT.large,
  };

  switch (shape) {
    case shapeKeys.circle:
      return {
        borderRadius: radiusSize[size],
      };

    case shapeKeys.rounded:
      return {
        borderRadius: themeShape.borderRadius.medium,
      };

    case shapeKeys.square:
      return {};
  }
};
