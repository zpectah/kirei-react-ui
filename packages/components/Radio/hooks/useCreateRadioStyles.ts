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

    [`&.isChecked`]: {
      color: palette.primary.main,
      [`&.isFocused`]: {
        [`svg`]: {
          outline: `${shape.borderWidth.outline} solid ${palette.action.active}`,
          borderRadius: '100%',
        },
      },
    },
    [`&.isFocused`]: {
      color: palette.primary.main,
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
