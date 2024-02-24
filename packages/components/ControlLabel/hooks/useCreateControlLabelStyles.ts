import { Theme, ControlLabelStylesProps } from 'types';

export const useCreateControlLabelStyles = (theme: Theme, stylesProps: ControlLabelStylesProps) => {
  const {} = stylesProps;
  const { breakpoints } = theme;

  const rootBase = {};

  const styles = {
    root: Object.assign({
      ...rootBase,
    }),
  };

  return { styles };
};
