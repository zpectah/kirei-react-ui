import { UseModalFooterStyles, UseModalFooterStylesReturn, ModalFooterStylesProps } from 'types';
import { useKireiContext } from 'styles';
import { useCreateModalFooterStyles } from './useCreateModalFooterStyles';

export const useModalFooterStyles = (
  { styles }: UseModalFooterStyles,
  { ...modalFooterStyles }: ModalFooterStylesProps
): UseModalFooterStylesReturn => {
  const { theme } = useKireiContext();
  const {
    styles: { root },
  } = useCreateModalFooterStyles(theme, modalFooterStyles);

  const composedStyles = {
    root: [root, theme.components.ModalFooter.root, styles?.root],
  };

  return {
    composedStyles,
  };
};
