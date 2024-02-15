import Color from 'color';
import { shapeSizeKeys, ShapeSize, ThemeSpacing, ThemeTypography } from 'types';
import { SHAPE_MIN_HEIGHT } from 'core';

export const getFocusPropertyValue = (background: string, focusOutlineAlpha: number, focusOutlineWidth: string) => {
  return {
    outline: `${focusOutlineWidth} solid ${Color(background).alpha(focusOutlineAlpha).toString()}`,
  };
};

export const getShapeSizeVariant = (size: ShapeSize, spacing: ThemeSpacing, typography: ThemeTypography) => {
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
