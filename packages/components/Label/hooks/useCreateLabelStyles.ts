import { Theme, LabelStylesProps } from 'types';

export const useCreateLabelStyles = (theme: Theme, stylesProps: LabelStylesProps) => {
  const {} = stylesProps;
  const {} = theme;

  const rootBase = {};

  const styles = {
    root: Object.assign({
      ...rootBase,
    }),
  };

  return { styles };
};
