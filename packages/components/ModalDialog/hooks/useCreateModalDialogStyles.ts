import { Theme, ModalDialogStylesProps } from 'types';

export const useCreateModalDialogStyles = (theme: Theme, stylesProps: ModalDialogStylesProps) => {
  // eslint-disable-next-line no-empty-pattern
  const {} = stylesProps;

  const rootBase = {};

  const styles = {
    root: Object.assign({ ...rootBase }),
  };

  return { styles };
};
