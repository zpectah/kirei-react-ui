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
    width: '2.8rem',
    height: '1.4rem',
    fontSize: '1.4rem',

    position: 'relative',
    borderRadius: '2.8rem',

    [`&.isChecked`]: {},
    [`&.isFocused`]: {
      outline: `${shape.borderWidth.outline} solid ${palette.action.active}`,
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
    borderRadius: '2.8rem',

    [`.isChecked &`]: {
      backgroundColor: palette.primary.main,
    },

    [`&::before`]: {
      position: 'absolute',
      content: '""',
      width: '.99rem',
      height: '.99rem',
      left: '0.22rem',
      top: '0.21rem',

      backgroundColor: palette.background.default,

      borderRadius: '2.8rem',
      transition: `transform .125s ease-in-out 0s`,

      [`.isChecked &`]: {
        transform: 'translateX(1.3rem)',
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
