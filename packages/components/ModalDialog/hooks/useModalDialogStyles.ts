import { UseModalDialogStyles, UseModalDialogStylesReturn, ModalDialogStylesProps } from 'types';
import { useUiContext } from 'styles';
import { useCreateModalDialogStyles } from './useCreateModalDialogStyles';

export const useModalDialogStyles = (
  { styles }: UseModalDialogStyles,
  { ...modalDialogStyles }: ModalDialogStylesProps
): UseModalDialogStylesReturn => {
  const { theme } = useUiContext();
  const {
    styles: { root, backdrop },
  } = useCreateModalDialogStyles(theme, modalDialogStyles);

  const composedStyles = {
    root: [root, theme.components.ModalDialog.root, styles?.root],
    backdrop: [backdrop, theme.components.ModalDialog.backdrop, styles?.backdrop],
  };

  return {
    composedStyles,
  };
};
