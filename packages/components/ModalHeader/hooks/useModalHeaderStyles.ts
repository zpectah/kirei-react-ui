import { UseModalHeaderStyles, UseModalHeaderStylesReturn, ModalHeaderStylesProps } from 'types';
import { useKireiContext } from 'styles';
import { useCreateModalHeaderStyles } from './useCreateModalHeaderStyles';

export const useModalHeaderStyles = (
  { styles }: UseModalHeaderStyles,
  { ...modalHeaderStyles }: ModalHeaderStylesProps
): UseModalHeaderStylesReturn => {
  const { theme } = useKireiContext();
  const {
    styles: { root, titleContainer, actionsContainer, title, subtitle },
  } = useCreateModalHeaderStyles(theme, modalHeaderStyles);

  const composedStyles = {
    root: [root, theme.components.ModalHeader.root, styles?.root],
    titleContainer: [titleContainer, theme.components.ModalHeader.titleContainer, styles?.titleContainer],
    actionsContainer: [actionsContainer, theme.components.ModalHeader.actionsContainer, styles?.actionsContainer],
    title: [title, theme.components.ModalHeader.title, styles?.title],
    subtitle: [subtitle, theme.components.ModalHeader.subtitle, styles?.subtitle],
  };

  return {
    composedStyles,
  };
};
