import { UseModalHeaderStyles, UseModalHeaderStylesReturn, ModalHeaderStylesProps } from 'types';
import { useKireiContext } from 'styles';
import { useCreateModalHeaderStyles } from './useCreateModalHeaderStyles';

export const useModalHeaderStyles = (
  { styles }: UseModalHeaderStyles,
  { ...modalHeaderStyles }: ModalHeaderStylesProps
): UseModalHeaderStylesReturn => {
  const { theme } = useKireiContext();
  const {
    styles: { root },
  } = useCreateModalHeaderStyles(theme, modalHeaderStyles);

  const composedStyles = {
    root: [root, theme.components.ModalHeader.root, styles?.root],
  };

  return {
    composedStyles,
  };
};
