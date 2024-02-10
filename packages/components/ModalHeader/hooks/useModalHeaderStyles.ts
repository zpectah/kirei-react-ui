import { UseModalHeaderStyles, UseModalHeaderStylesReturn, ModalHeaderStylesProps } from 'types';
import { useUiContext } from 'styles';
import { useCreateModalHeaderStyles } from './useCreateModalHeaderStyles';

export const useModalHeaderStyles = (
  { styles }: UseModalHeaderStyles,
  { ...modalHeaderStyles }: ModalHeaderStylesProps
): UseModalHeaderStylesReturn => {
  const { theme } = useUiContext();
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
