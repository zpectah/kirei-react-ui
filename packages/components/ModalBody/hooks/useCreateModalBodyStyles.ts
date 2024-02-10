import { Theme, ModalBodyStylesProps } from 'types';

export const useCreateModalBodyStyles = (theme: Theme, stylesProps: ModalBodyStylesProps) => {
  const {} = theme;
  const {} = stylesProps;

  const rootBase = {};

  const styles = {
    root: Object.assign({ ...rootBase }),
  };

  return { styles };
};
