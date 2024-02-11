import { UseModalBodyStyles, UseModalBodyStylesReturn, ModalBodyStylesProps } from 'types';
import { useKireiContext } from 'styles';
import { useCreateModalBodyStyles } from './useCreateModalBodyStyles';

export const useModalBodyStyles = (
  { styles }: UseModalBodyStyles,
  { ...modalBodyStyles }: ModalBodyStylesProps
): UseModalBodyStylesReturn => {
  const { theme } = useKireiContext();
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
