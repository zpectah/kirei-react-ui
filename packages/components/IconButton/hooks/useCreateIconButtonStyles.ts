import Color from 'color';
import {
  Theme,
  IconButtonStylesProps,
  ShapeVariant,
  ButtonColor,
  ShapeSize,
  ThemePaletteV2,
  ThemeSpacing,
  ThemeShape,
  shapeVariantKeys,
  shapeSizeKeys,
  Shape,
  shapeKeys,
} from 'types';
import { getElementTransitions, getShadowWidth } from 'styles';
import { capitalizeFirstLetter } from 'utils';
import { SHAPE_VARIANT_CLASS_NAME, STATUS_CLASS_NAMES, SHAPE_MIN_HEIGHT } from 'core';

// TODO
const getRootColorVariant = (
  variant: ShapeVariant,
  color: ButtonColor,
  size: ShapeSize,
  palette: ThemePaletteV2,
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

// TODO
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

// TODO
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

export const useCreateIconButtonStyles = (theme: Theme, stylesProps: IconButtonStylesProps) => {
  const { transitions, paletteV2, spacing, shape: themeShape } = theme;
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
      ...getRootColorVariant(variant, color, size, paletteV2, spacing, themeShape),
      ...getShapeBorder(shape, size, themeShape),
    }),
    icon: Object.assign({
      ...iconBase,
    }),
  };

  return { styles };
};
