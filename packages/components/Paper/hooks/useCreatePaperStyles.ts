import { Theme, PaperStylesProps } from 'types';

export const useCreatePaperStyles = (theme: Theme, stylesProps: PaperStylesProps) => {
  const {} = stylesProps;
  const { palette, shape } = theme;

  const rootBase = {
    backgroundColor: palette.background.paper,
    color: palette.text.primary,
    borderRadius: shape.borderRadius.medium,
    border: `1px solid ${palette.utils.getAlphaColor(palette.shape.border, 0.7)}`,
    // TODO #shadow
  };

  const styles = {
    root: Object.assign({
      ...rootBase,
    }),
  };

  return { styles };
};
