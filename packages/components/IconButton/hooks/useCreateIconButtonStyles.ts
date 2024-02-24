import { Theme, IconButtonStylesProps } from 'types';
// import {} from 'styles';

export const useCreateIconButtonStyles = (theme: Theme, stylesProps: IconButtonStylesProps) => {
  const { size, color, variant } = stylesProps;
  const {} = theme;

  const rootBase = {};

  const iconBase = {};

  const styles = {
    root: Object.assign({
      ...rootBase,
    }),
    icon: Object.assign({
      ...iconBase,
    }),
  };

  return { styles };
};
