import { UseModalStyles, UseModalStylesReturn, ModalStylesProps } from 'types';
import { useKireiContext } from 'styles';
import { useCreateModalStyles } from './useCreateModalStyles';

export const useModalStyles = (
  { styles }: UseModalStyles,
  { ...ModalStyles }: ModalStylesProps
): UseModalStylesReturn => {
  const { theme } = useKireiContext();
  const {
    styles: { root, container, backdrop, dialog },
  } = useCreateModalStyles(theme, ModalStyles);

  const composedStyles = {
    root: [root, theme.components.Modal.root, styles?.root],
    container: [container, theme.components.Modal.container, styles?.container],
    backdrop: [backdrop, theme.components.Modal.backdrop, styles?.backdrop],
    dialog: [dialog, theme.components.Modal.dialog, styles?.dialog],
  };

  return {
    composedStyles,
  };
};
