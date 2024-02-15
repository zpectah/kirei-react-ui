import { Theme, ModalFooterStylesProps } from 'types';

export const useCreateModalFooterStyles = (theme: Theme, stylesProps: ModalFooterStylesProps) => {
  const { spacing } = theme;
  const {} = stylesProps;

  const rootBase = {
    padding: spacing.get(0, 3, 3, 3),
  };

  const styles = {
    root: Object.assign({ ...rootBase }),
  };

  return { styles };
};
