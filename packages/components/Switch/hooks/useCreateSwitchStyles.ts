import { Theme, SwitchStylesProps, ThemePalette, InputColor } from 'types';
import { SHAPE_MIN_HEIGHT, STATUS_CLASS_NAMES } from 'core';
import { getElementTransitions } from 'styles';

const getColorVariant = (palette: ThemePalette, color: InputColor) => {
  const colorMain = palette[color].main.current;

  return {
    label: {
      [`&.${STATUS_CLASS_NAMES.isFocused}`]: {
        [`&::before`]: {
          backgroundColor: palette.utils.getAlphaColor(colorMain, palette.action.activeAlpha),
        },
      },
    },
    slider: {
      [`.${STATUS_CLASS_NAMES.isChecked} &`]: {
        backgroundColor: colorMain,
        borderColor: colorMain,

        [`&:hover`]: {
          backgroundColor: colorMain,
        },
      },
    },
  };
};

export const useCreateSwitchStyles = (theme: Theme, stylesProps: SwitchStylesProps) => {
  const { color, size } = stylesProps;
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
    position: 'relative',
    borderRadius: shape.borderRadius.medium,

    [`&::before`]: {
      content: '""',
      display: 'block',
      width: '110%',
      height: '110%',
      backgroundColor: 'transparent',
      borderRadius: shape.borderRadius.medium,
      position: 'absolute',
      top: '-5%',
      left: '-5%',
      zIndex: 0,
      transition: focusElementTransition,
    },

    [`&.${STATUS_CLASS_NAMES.isDisabled}`]: {
      pointerEvents: 'none',
      cursor: 'default',
      opacity: palette.action.disableAlpha,
    },
  };

  const sliderBase = {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: palette.text.muted.current,
    borderRadius: shape.borderRadius.medium,
    border: `3px solid ${palette.text.muted.current}`, // TODO - add border width as variable
    transition: sliderTransition,

    [`&:hover`]: {
      backgroundColor: palette.text.body.current,
    },
  };

  const labelSize = {
    small: {
      width: `calc(${SHAPE_MIN_HEIGHT.small} * 1.25)`,
      height: SHAPE_MIN_HEIGHT.small,
    },
    medium: {
      width: `calc(${SHAPE_MIN_HEIGHT.medium} * 1.25)`,
      height: SHAPE_MIN_HEIGHT.medium,
    },
    large: {
      width: `calc(${SHAPE_MIN_HEIGHT.large} * 1.25)`,
      height: SHAPE_MIN_HEIGHT.large,
    },
  };

  const sliderSize = {
    small: {
      top: '26%',
      left: '15%',
      width: '70%',
      height: '48%',

      [`&::before`]: {
        position: 'absolute',
        content: '""',
        width: '0.5rem',
        height: '100%',
        left: 0,
        top: 0,
        backgroundColor: palette.background.body.current,
        borderRadius: shape.borderRadius.small,
        transition: sliderBeforeTransition,

        [`.${STATUS_CLASS_NAMES.isChecked} &`]: {
          transform: `translateX(calc(${SHAPE_MIN_HEIGHT.small} / 2.5))`,
        },
      },
    },
    medium: {
      top: '26%',
      left: '15%',
      width: '70%',
      height: '48%',

      [`&::before`]: {
        position: 'absolute',
        content: '""',
        width: '0.5rem',
        height: '100%',
        left: 0,
        top: 0,
        backgroundColor: palette.background.body.current,
        borderRadius: shape.borderRadius.small,
        transition: sliderBeforeTransition,

        [`.${STATUS_CLASS_NAMES.isChecked} &`]: {
          transform: `translateX(calc(${SHAPE_MIN_HEIGHT.medium} / 1.95))`,
        },
      },
    },
    large: {
      top: '26%',
      left: '15%',
      width: '70%',
      height: '48%',

      [`&::before`]: {
        position: 'absolute',
        content: '""',
        width: '0.5rem',
        height: '100%',
        left: 0,
        top: 0,
        backgroundColor: palette.background.body.current,
        borderRadius: shape.borderRadius.small,
        transition: sliderBeforeTransition,

        [`.${STATUS_CLASS_NAMES.isChecked} &`]: {
          transform: `translateX(calc(${SHAPE_MIN_HEIGHT.large} / 1.75))`,
        },
      },
    },
  };

  const colorVariant = getColorVariant(palette, color);

  const styles = {
    root: Object.assign({
      ...rootBase,
    }),
    label: Object.assign({
      ...labelBase,
      ...labelSize[size],
      ...colorVariant.label,
    }),
    slider: Object.assign({
      ...sliderBase,
      ...sliderSize[size],
      ...colorVariant.slider,
    }),
  };

  return { styles };
};
