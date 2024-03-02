import { Theme, ControlLabelStylesProps } from 'types';
import { STATUS_CLASS_NAMES } from 'core';

export const useCreateControlLabelStyles = (theme: Theme, stylesProps: ControlLabelStylesProps) => {
  const { labelPlacement, gap } = stylesProps;
  const { spacing } = theme;

  const rootBase = {
    display: 'inline-flex',
    gap: spacing.get(gap),

    [`&.${STATUS_CLASS_NAMES.isDisabled}`]: {
      pointerEvents: 'none',
      cursor: 'default',
    },
  };
  const rootPlacement = {
    top: {
      alignItems: 'center',
      flexDirection: 'column-reverse',
    },
    bottom: {
      alignItems: 'center',
      flexDirection: 'column',
    },
    start: {
      alignItems: 'center',
      flexDirection: 'row-reverse',

      [`label`]: {
        alignSelf: 'start',
      },
    },
    end: {
      alignItems: 'center',
      flexDirection: 'row',

      [`label`]: {
        alignSelf: 'start',
      },
    },
  };

  const styles = {
    root: Object.assign({
      ...rootBase,
      ...rootPlacement[labelPlacement],
    }),
  };

  return { styles };
};
