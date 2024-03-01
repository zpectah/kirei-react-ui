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
    width: '2rem',
    height: '1.3rem',

    position: 'relative',
    borderRadius: shape.borderRadius.medium,

    [`&.isChecked`]: {},
    [`&.isFocused`]: {},
    [`&.isDisabled`]: {},
  };

  const sliderBase = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: palette.text.secondary,
    borderRadius: shape.borderRadius.medium,
    border: `3px solid ${palette.text.secondary}`,

    [`&:hover`]: {
      backgroundColor: palette.text.primary,
    },

    [`.isFocused &`]: {
      outline: `${shape.borderWidth.outline} solid ${palette.action.active}`,
    },
    [`.isChecked &`]: {
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
      height: '0.925rem',
      left: 0,
      top: 0,
      backgroundColor: palette.background.default,
      borderRadius: shape.borderRadius.small,
      transition: `transform .125s ease-in-out 0s`,

      [`.isChecked &`]: {
        transform: 'translateX(1.1rem)',
      },
      [`.isFocused &`]: {
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
