import {
  Theme,
  ButtonStylesProps,
  shapeVariantKeys,
  ShapeVariant,
  ThemeShape,
  ThemeSpacing,
  ButtonColor,
  ShapeSize,
  ThemePalette,
} from 'types';
import { LOADING_LABEL_ALPHA, SHAPE_SIZE_CLASS_NAMES, SHAPE_VARIANT_CLASS_NAME, STATUS_CLASS_NAMES } from 'core';
import { getElementTransitions, getButtonShapeSizeVariant, getShadowWidth } from 'styles';
import { capitalizeFirstLetter } from 'utils';
import Color from 'color';

// TODO
const getRootColorVariant = (
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

export const useCreateButtonStyles = (theme: Theme, stylesProps: ButtonStylesProps) => {
  const { transitions, palette, spacing, shape, typography } = theme;
  const { size, color, variant } = stylesProps;

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
    appearance: 'none',
    borderWidth: shape.borderWidth.button,
    borderRadius: shape.borderRadius.medium,
    transition: transition,

    [`&.${STATUS_CLASS_NAMES.isLoading}`]: {
      position: 'relative',
      overflow: 'hidden',
      cursor: 'wait',
    },
    [`&.${STATUS_CLASS_NAMES.isFullWidth}`]: {
      width: '100%',
    },
    [`&.${SHAPE_SIZE_CLASS_NAMES[size]}`]: {
      ...getButtonShapeSizeVariant(size, spacing, typography),
    },
  };

  const rootChildBase = {
    pointerEvents: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
  };

  // label
  const labelBase = {
    ...rootChildBase,

    [`.${STATUS_CLASS_NAMES.isLoading} &`]: {
      opacity: LOADING_LABEL_ALPHA,
    },
  };

  // iconStart
  const iconStartBase = {
    ...rootChildBase,
  };

  // iconEnd
  const iconEndBase = {
    ...rootChildBase,
  };

  // iconLoading
  const iconLoadingBase = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: shape.borderRadius.medium,
  };

  // Final styles object
  const styles = {
    root: Object.assign({
      ...rootBase,
      ...getRootColorVariant(variant, color, size, palette, spacing, shape),
    }),
    label: Object.assign(labelBase),
    iconStart: Object.assign(iconStartBase),
    iconEnd: Object.assign(iconEndBase),
    iconLoading: Object.assign(iconLoadingBase),
  };

  return {
    styles,
  };
};
