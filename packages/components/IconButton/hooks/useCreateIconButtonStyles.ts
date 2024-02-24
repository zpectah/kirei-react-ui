import {
  Theme,
  IconButtonStylesProps,
  shapeVariantKeys,
  ShapeSize,
  ThemeSpacing,
  shapeSizeKeys,
  Shape,
  shapeKeys,
  ThemeShape,
  ShapeVariant,
  ThemePalette,
  ButtonColor,
} from 'types';
import { SHAPE_MIN_HEIGHT } from 'core';
import {
  getElementTransitions,
  getContainedButtonVariant,
  getOutlinedButtonVariant,
  getTextButtonVariant,
} from 'styles';

const getShapeSizeVariant = (size: ShapeSize, spacing: ThemeSpacing) => {
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

const getShapeBorder = (shape: Shape, size: ShapeSize, themeShape: ThemeShape) => {
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

const getRootVariant = (
  variant: ShapeVariant,
  palette: ThemePalette,
  shape: ThemeShape,
  spacing: ThemeSpacing,
  stylesProps: { color: ButtonColor; size: ShapeSize }
) => {
  switch (variant) {
    case shapeVariantKeys.contained:
      return getContainedButtonVariant(palette, shape, spacing, stylesProps);

    case shapeVariantKeys.outlined:
      return getOutlinedButtonVariant(palette, shape, spacing, stylesProps);

    case shapeVariantKeys.text:
      return getTextButtonVariant(palette, shape, spacing, stylesProps);
  }
};

export const useCreateIconButtonStyles = (theme: Theme, stylesProps: IconButtonStylesProps) => {
  const { transitions, palette, spacing, shape: themeShape } = theme;
  const { size, color, variant, shape } = stylesProps;

  const transition = getElementTransitions(
    ['background-color', 'color', 'border-color', 'box-shadow'],
    transitions.duration.shortest,
    transitions.easing.easeInOut
  );

  // root
  const rootBase = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    userSelect: 'none',
    cursor: 'pointer',
    boxSizing: 'border-box',
    borderStyle: 'solid',
    borderColor: 'transparent',
    outline: 0,
    lineHeight: 1,
    appearance: 'none',
    borderWidth: themeShape.borderWidth.button,
    transition: transition,
  };

  // icon
  const iconBase = {
    pointerEvents: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
  };

  const styles = {
    root: Object.assign({
      ...rootBase,
      ...getShapeSizeVariant(size, spacing),
      ...getRootVariant(variant, palette, themeShape, spacing, { size, color }),
      ...getShapeBorder(shape, size, themeShape),
    }),
    icon: Object.assign({
      ...iconBase,
    }),
  };

  return { styles };
};
