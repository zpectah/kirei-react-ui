import { Theme, SwitchStylesProps } from 'types';
import { SHAPE_MIN_HEIGHT } from 'core';

export const useCreateSwitchStyles = (theme: Theme, stylesProps: SwitchStylesProps) => {
  const {} = stylesProps;
  const { palette, shape } = theme;

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
    width: '1.3rem',
    height: '1.3rem',
    fontSize: '1.3rem',

    position: 'relative',

    [`&.isChecked`]: {
      color: palette.primary.main,
      [`&.isFocused`]: {
        [`svg`]: {
          outline: `${shape.borderWidth.outline} solid ${palette.action.active}`,
        },
      },
    },
    [`&.isFocused`]: {
      color: palette.primary.main,
    },
    [`&.isDisabled`]: {},
  };

  const sliderBase = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: palette.text.secondary,

    [`&::before`]: {
      position: 'absolute',
      content: '""',
      width: '1rem',
      height: '1rem',
      left: 0,
      bottom: 0,

      backgroundColor: palette.primary.main,
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
