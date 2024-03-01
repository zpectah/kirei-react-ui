import { Theme, RadioStylesProps } from 'types';
import { getElementTransitions } from 'styles';
import { STATUS_CLASS_NAMES } from 'core';

export const useCreateRadioStyles = (theme: Theme, stylesProps: RadioStylesProps) => {
  const {} = stylesProps;
  const { palette, shape, transitions } = theme;

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
    width: '1.4rem',
    height: '1.4rem',
    fontSize: '1.3rem',
    color: palette.text.secondary,
    position: 'relative',
    transition: labelTransition,

    [`&::before`]: {
      content: '""',
      display: 'block',
      width: '130%',
      height: '130%',
      backgroundColor: 'transparent',
      borderRadius: '100%',
      position: 'absolute',
      top: '-15%',
      left: '-15%',
      zIndex: '-1',
      transition: focusElementTransition,
    },

    [`&:hover`]: {
      color: palette.text.primary,
    },

    [`&.${STATUS_CLASS_NAMES.isChecked}`]: {
      color: palette.primary.main,
    },
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

  const styles = {
    root: Object.assign({
      ...rootBase,
    }),
    label: Object.assign({
      ...labelBase,
    }),
  };

  return { styles };
};