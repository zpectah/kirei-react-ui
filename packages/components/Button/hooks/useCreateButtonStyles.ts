import {
  Theme,
  ButtonStylesProps,
  shapeVariantKeys,
  ShapeVariant,
  ThemePalette,
  ThemeShape,
  ThemeSpacing,
  ButtonColor,
  ShapeSize,
} from 'types';
import { LOADING_LABEL_ALPHA, STATUS_CLASS_NAMES } from 'core';
import {
  getElementTransitions,
  getContainedButtonVariant,
  getOutlinedButtonVariant,
  getTextButtonVariant,
  getShapeSizeVariant,
} from 'styles';

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
      ...getShapeSizeVariant(size, spacing, typography),
      ...getRootVariant(variant, palette, shape, spacing, { size, color }),
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
