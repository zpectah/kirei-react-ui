import { UseModalStyles, UseModalStylesReturn, ModalStylesProps } from 'types';
import { useUiContext } from 'styles';
import { useCreateModalStyles } from './useCreateModalStyles';

export const useModalStyles = (
  { styles }: UseModalStyles,
  { ...ModalStyles }: ModalStylesProps
): UseModalStylesReturn => {
  const { theme } = useUiContext();
  const {
    styles: { root, backdrop, container, dialog },
  } = useCreateModalStyles(theme, ModalStyles);

  const composedStyles = {
    root: [root, theme.components.Modal.root, styles?.root],
    backdrop: [backdrop, theme.components.Modal.backdrop, styles?.backdrop],
    container: [container, theme.components.Modal.container, styles?.container],
    dialog: [dialog, theme.components.Modal.dialog, styles?.dialog],
  };

  return {
    composedStyles,
  };
};
