import { Theme, ButtonStylesProps, shapeSizeKeys, shapeVariantKeys } from 'types';
import {
  getElementTransitions,
  getContainedButtonVariant,
  getOutlinedButtonVariant,
  getTextButtonVariant,
} from 'styles';
import { BUTTON_LABEL } from 'core';

export const useCreateButtonStyles = (theme: Theme, stylesProps: ButtonStylesProps) => {
  const { transitions, palette, spacing, shape, typography } = theme;
  const { isLoading, isDisabled, fullWidth, size, variant } = stylesProps;

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
  };
  const rootIsDisabled = isDisabled
    ? {
        pointerEvents: 'none',
        cursor: 'default',
      }
    : {};
  const rootIsLoading = isLoading
    ? {
        position: 'relative',
        overflow: 'hidden',
        cursor: 'wait',

        [`& .${BUTTON_LABEL}`]: {
          opacity: palette.ratio.loadingLabelAlpha,
        },
      }
    : {};
  const rootIsFullWidth = fullWidth
    ? {
        width: '100%',
      }
    : {};

  const getRootSize = () => {
    switch (size) {
      case shapeSizeKeys.small:
        return {
          ...typography.shapeSmall,
          padding: spacing.get(2),
          gap: spacing.get(2),
        };

      case shapeSizeKeys.medium:
        return {
          ...typography.shapeMedium,
          padding: spacing.get(2, 3),
          gap: spacing.get(2),
        };

      case shapeSizeKeys.large:
        return {
          ...typography.shapeLarge,
          padding: spacing.get(3, 4),
          gap: spacing.get(3),
        };
    }
  };
  const getRootVariant = () => {
    switch (variant) {
      case shapeVariantKeys.contained:
        return getContainedButtonVariant(palette, shape, spacing, stylesProps);

      case shapeVariantKeys.outlined:
        return getOutlinedButtonVariant(palette, shape, spacing, stylesProps);

      case shapeVariantKeys.text:
        return getTextButtonVariant(palette, shape, spacing, stylesProps);
    }
  };

  // label
  const labelBase = {
    pointerEvents: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
  };

  // iconStart
  const iconStartBase = {};

  // iconEnd
  const iconEndBase = {};

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
      ...rootIsDisabled,
      ...rootIsLoading,
      ...rootIsFullWidth,
      ...getRootSize(),
      ...getRootVariant(),
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
