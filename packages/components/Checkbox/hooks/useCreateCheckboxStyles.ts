import { Theme, CheckboxStylesProps } from 'types';
import { SHAPE_MIN_HEIGHT } from 'core';

export const useCreateCheckboxStyles = (theme: Theme, stylesProps: CheckboxStylesProps) => {
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
      width: `calc(${SHAPE_MIN_HEIGHT.small} / 2)`,
      height: `calc(${SHAPE_MIN_HEIGHT.small} / 2)`,
      fontSize: '1rem',
    },
    medium: {
      width: `calc(${SHAPE_MIN_HEIGHT.medium} / 2)`,
      height: `calc(${SHAPE_MIN_HEIGHT.medium} / 2)`,
      fontSize: '1.45rem',
    },
    large: {
      width: `calc(${SHAPE_MIN_HEIGHT.large} / 2)`,
      height: `calc(${SHAPE_MIN_HEIGHT.large} / 2)`,
      fontSize: '1.7rem',
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
