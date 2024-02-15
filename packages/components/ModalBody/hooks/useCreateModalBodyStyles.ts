import { Theme, ModalBodyStylesProps } from 'types';

export const useCreateModalBodyStyles = (theme: Theme, stylesProps: ModalBodyStylesProps) => {
  const { spacing } = theme;
  const {} = stylesProps;

  const rootBase = {
    padding: spacing.get(3, 3),
  };

  const styles = {
    root: Object.assign({ ...rootBase }),
  };

  return { styles };
};
