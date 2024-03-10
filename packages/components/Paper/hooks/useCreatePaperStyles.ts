import { Theme, PaperStylesProps, paperVariantKeys } from 'types';

export const useCreatePaperStyles = (theme: Theme, stylesProps: PaperStylesProps) => {
  const { isSquare, variant, elevation } = stylesProps;
  const { palette, shape, shadows } = theme;

  const borderPrefix = `${shape.borderWidth.divider} solid`;

  const rootBase = {
    borderRadius: isSquare ? 0 : shape.borderRadius.medium,
    boxShadow: variant === paperVariantKeys.elevated ? shadows[elevation] : 'none',
  };
  const rootVariants = {
    elevated: {
      backgroundColor: palette.background.paper.current,
      color: palette.text.body.current,
    },
    outlined: {
      color: palette.text.body.current,
      border: `${borderPrefix} ${palette.background.divider}`,
    },
  };

  const styles = {
    root: Object.assign({
      ...rootBase,
      ...rootVariants[variant],
    }),
  };

  return { styles };
};
