import { Theme, ModalFooterStylesProps } from 'types';

export const useCreateModalFooterStyles = (theme: Theme, stylesProps: ModalFooterStylesProps) => {
  const {} = theme;
  const {} = stylesProps;

  const rootBase = {};

  const styles = {
    root: Object.assign({ ...rootBase }),
  };

  return { styles };
};
