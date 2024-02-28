import { Theme, RadioStylesProps } from 'types';
import { SHAPE_MIN_HEIGHT } from 'core';

export const useCreateRadioStyles = (theme: Theme, stylesProps: RadioStylesProps) => {
  const { size } = stylesProps;
  const {} = theme;

  const rootBase = {
    width: 0,
    height: 0,
  };

  const labelBase = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    cursor: 'pointer',
  };
  const labelSize = {
    small: {
      width: SHAPE_MIN_HEIGHT.small,
      height: SHAPE_MIN_HEIGHT.small,
    },
    medium: {
      width: SHAPE_MIN_HEIGHT.medium,
      height: SHAPE_MIN_HEIGHT.medium,
    },
    large: {
      width: SHAPE_MIN_HEIGHT.large,
      height: SHAPE_MIN_HEIGHT.large,
    },
  };

  const styles = {
    root: Object.assign({
      ...rootBase,
    }),
    label: Object.assign({
      ...labelBase,
      ...labelSize[size],
    }),
  };

  return { styles };
};
