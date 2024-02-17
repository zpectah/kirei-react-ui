import { Theme, PaperStylesProps } from 'types';

export const useCreatePaperStyles = (theme: Theme, stylesProps: PaperStylesProps) => {
  const {} = stylesProps;
  const { palette, shape } = theme;

  const rootBase = {
    backgroundColor: palette.background.paper,
    color: palette.text.primary,
    borderRadius: shape.borderRadius.medium,
    boxShadow: `${palette.utils.getAlphaColor(palette.common.black, 0.125)} 0px 2px 8px 0px`, // TODO
  };

  const styles = {
    root: Object.assign({
      ...rootBase,
    }),
  };

  return { styles };
};
