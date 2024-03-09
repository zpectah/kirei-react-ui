import { Theme, RadioStylesProps, ThemePaletteV2, InputColor } from 'types';
import { getElementTransitions } from 'styles';
import { SHAPE_MIN_HEIGHT, STATUS_CLASS_NAMES } from 'core';

const getColorVariant = (palette: ThemePaletteV2, color: InputColor) => {
  const colorMain = palette[color].main.current;

  return {
    [`&.${STATUS_CLASS_NAMES.isChecked}, &.${STATUS_CLASS_NAMES.isIndeterminate}`]: {
      color: colorMain,
    },
    [`&.${STATUS_CLASS_NAMES.isFocused}`]: {
      [`&::before`]: {
        backgroundColor: palette.utils.getAlphaColor(colorMain, palette.action.activeAlpha),
      },
    },
  };
};

export const useCreateRadioStyles = (theme: Theme, stylesProps: RadioStylesProps) => {
  const { color, size } = stylesProps;
  const { paletteV2, transitions } = theme;

  const labelTransition = getElementTransitions(['color'], transitions.duration.shortest, transitions.easing.easeInOut);
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
    color: paletteV2.text.muted,
    position: 'relative',
    transition: labelTransition,

    [`&::before`]: {
      content: '""',
      display: 'block',
      width: '120%',
      height: '120%',
      backgroundColor: 'transparent',
      borderRadius: '100%',
      position: 'absolute',
      top: '-10%',
      left: '-10%',
      zIndex: 0,
      transition: focusElementTransition,
    },

    [`&:hover`]: {
      color: paletteV2.text.body,
    },

    [`&.${STATUS_CLASS_NAMES.isDisabled}`]: {
      pointerEvents: 'none',
      cursor: 'default',
      opacity: paletteV2.action.disableAlpha,
    },
  };

  const labelSize = {
    small: {
      width: SHAPE_MIN_HEIGHT.small,
      height: SHAPE_MIN_HEIGHT.small,
      fontSize: `calc(${SHAPE_MIN_HEIGHT.small} / 2.1)`,
    },
    medium: {
      width: SHAPE_MIN_HEIGHT.medium,
      height: SHAPE_MIN_HEIGHT.medium,
      fontSize: `calc(${SHAPE_MIN_HEIGHT.medium} / 1.81)`,
    },
    large: {
      width: SHAPE_MIN_HEIGHT.large,
      height: SHAPE_MIN_HEIGHT.large,
      fontSize: `calc(${SHAPE_MIN_HEIGHT.large} / 1.62)`,
    },
  };

  const styles = {
    root: Object.assign({
      ...rootBase,
    }),
    label: Object.assign({
      ...labelBase,
      ...labelSize[size],
      ...getColorVariant(paletteV2, color),
    }),
  };

  return { styles };
};
