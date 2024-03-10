import { Theme, ButtonStylesProps } from 'types';
import { LOADING_LABEL_ALPHA, SHAPE_SIZE_CLASS_NAMES, STATUS_CLASS_NAMES } from 'core';
import { getElementTransitions, getButtonShapeSizeVariant, getButtonRootColorVariant } from 'styles';

// TODO

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
      ...getButtonRootColorVariant(variant, color, size, palette, spacing, shape),
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
