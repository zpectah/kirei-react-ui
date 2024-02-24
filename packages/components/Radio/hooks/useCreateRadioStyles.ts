import { Theme, RadioStylesProps } from 'types';

export const useCreateRadioStyles = (theme: Theme, stylesProps: RadioStylesProps) => {
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
