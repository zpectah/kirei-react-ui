import { UseModalBodyStyles, UseModalBodyStylesReturn, ModalBodyStylesProps } from 'types';
import { useUiContext } from 'styles';
import { useCreateModalBodyStyles } from './useCreateModalBodyStyles';

export const useModalBodyStyles = (
  { styles }: UseModalBodyStyles,
  { ...modalBodyStyles }: ModalBodyStylesProps
): UseModalBodyStylesReturn => {
  const { theme } = useUiContext();
  const {
    styles: { root },
  } = useCreateModalBodyStyles(theme, modalBodyStyles);

  const composedStyles = {
    root: [root, theme.components.ModalBody.root, styles?.root],
  };

  return {
    composedStyles,
  };
};
