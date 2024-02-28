import { Theme, FieldLabelStylesProps } from 'types';

export const useCreateFieldLabelStyles = (theme: Theme, stylesProps: FieldLabelStylesProps) => {
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
