import { Theme, ControlLabelStylesProps } from 'types';
import { STATUS_CLASS_NAMES } from 'core';

export const useCreateControlLabelStyles = (theme: Theme, stylesProps: ControlLabelStylesProps) => {
  const {} = stylesProps;
  const { palette } = theme;

  const rootBase = {
    [`&.${STATUS_CLASS_NAMES.isDisabled}`]: {
      pointerEvents: 'none',
      cursor: 'default',
      // opacity: palette.ratio.disabledAlpha,
    },
  };

  const styles = {
    root: Object.assign({
      ...rootBase,
    }),
  };

  return { styles };
};
