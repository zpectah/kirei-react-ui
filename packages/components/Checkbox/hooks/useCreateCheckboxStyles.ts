import { Theme, CheckboxStylesProps } from 'types';

export const useCreateCheckboxStyles = (theme: Theme, stylesProps: CheckboxStylesProps) => {
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
