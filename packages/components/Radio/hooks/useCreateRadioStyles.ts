import { Theme, RadioStylesProps } from 'types';

export const useCreateRadioStyles = (theme: Theme, stylesProps: RadioStylesProps) => {
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
    width: '1.4rem',
    height: '1.4rem',
    fontSize: '1.3rem',

    color: palette.text.secondary,

    position: 'relative',

    [`&:hover`]: {
      color: palette.text.primary,
    },
    [`&.isChecked`]: {
      color: palette.primary.main,
    },
    [`&.isFocused`]: {
      color: palette.primary.main,

      [`&::before`]: {
        content: '""',
        width: '130%',
        height: '130%',
        backgroundColor: palette.action.active,
        borderRadius: '100%',
        display: 'block',
        position: 'absolute',
        top: '-15%',
        left: '-15%',
        zIndex: '-1',
      },
    },
    [`&.isDisabled`]: {},
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
