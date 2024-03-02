import { Theme, SwitchStylesProps } from 'types';
import { SHAPE_MIN_HEIGHT, STATUS_CLASS_NAMES } from 'core';
import { getElementTransitions } from 'styles';

export const useCreateSwitchStyles = (theme: Theme, stylesProps: SwitchStylesProps) => {
  const {} = stylesProps;
  const { palette, shape, transitions } = theme;

  const sliderTransition = getElementTransitions(
    ['background-color', 'color', 'border-color'],
    transitions.duration.shortest,
    transitions.easing.easeInOut
  );
  const sliderBeforeTransition = getElementTransitions(
    ['transform', 'background-color', 'color', 'border-color'],
    transitions.duration.shortest,
    transitions.easing.easeInOut
  );
  const focusElementTransition = getElementTransitions(
    ['background-color'],
    transitions.duration.shortest,
    transitions.easing.easeInOut
  );

  const rootBase = {
    width: 0,
    height: 0,
    opacity: 0,
  };

  const labelBase = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    cursor: 'pointer',
    width: `calc(${SHAPE_MIN_HEIGHT.medium} / 1.25)`,
    height: `calc(${SHAPE_MIN_HEIGHT.medium} / 1.5)`,
    position: 'relative',
    borderRadius: shape.borderRadius.medium,

    [`&::before`]: {
      content: '""',
      display: 'block',
      width: '120%',
      height: '120%',
      backgroundColor: 'transparent',
      borderRadius: shape.borderRadius.medium,
      position: 'absolute',
      top: '-10%',
      left: '-10%',
      zIndex: '-1',
      transition: focusElementTransition,
    },

    [`&.${STATUS_CLASS_NAMES.isChecked}`]: {},
    [`&.${STATUS_CLASS_NAMES.isFocused}`]: {
      [`&::before`]: {
        backgroundColor: palette.action.active,
      },
    },
    [`&.${STATUS_CLASS_NAMES.isDisabled}`]: {
      pointerEvents: 'none',
      cursor: 'default',
      opacity: palette.ratio.disabledAlpha,
    },
  };

  const sliderBase = {
    position: 'absolute',
    top: '.325rem',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: palette.text.secondary,
    borderRadius: shape.borderRadius.medium,
    border: `3px solid ${palette.text.secondary}`,
    transition: sliderTransition,
    height: `calc((${SHAPE_MIN_HEIGHT.medium} / 1.81) - 6px)`,

    [`&:hover`]: {
      backgroundColor: palette.text.primary,
    },

    // [`.${STATUS_CLASS_NAMES.isFocused} &`]: {},
    [`.${STATUS_CLASS_NAMES.isChecked} &`]: {
      backgroundColor: palette.primary.main,
      borderColor: palette.primary.main,

      [`&:hover`]: {
        backgroundColor: palette.primary.main,
      },
    },

    [`&::before`]: {
      position: 'absolute',
      content: '""',
      width: '0.5rem',
      height: '100%',
      left: 0,
      top: 0,
      backgroundColor: palette.background.default,
      borderRadius: shape.borderRadius.small,
      transition: sliderBeforeTransition,

      [`.${STATUS_CLASS_NAMES.isChecked} &`]: {
        transform: 'translateX(1.1rem)',
      },
      [`.${STATUS_CLASS_NAMES.isFocused} &`]: {
        outline: `${shape.borderWidth.outline} solid ${palette.action.active}`,
      },
    },
  };

  const styles = {
    root: Object.assign({
      ...rootBase,
    }),
    label: Object.assign({
      ...labelBase,
    }),
    slider: Object.assign({
      ...sliderBase,
    }),
  };

  return { styles };
};
