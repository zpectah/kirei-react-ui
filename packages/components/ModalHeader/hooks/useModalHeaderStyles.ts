import { UseModalHeaderStyles, UseModalHeaderStylesReturn, ModalHeaderStylesProps } from 'types';
import { useKireiContext } from 'styles';
import { useCreateModalHeaderStyles } from './useCreateModalHeaderStyles';

export const useModalHeaderStyles = (
  { styles }: UseModalHeaderStyles,
  { ...modalHeaderStyles }: ModalHeaderStylesProps
): UseModalHeaderStylesReturn => {
  const { theme } = useKireiContext();
  const {
    styles: { root, anchorLeft, anchorRight, title, subtitle },
  } = useCreateModalHeaderStyles(theme, modalHeaderStyles);

  const composedStyles = {
    root: [root, theme.components.ModalHeader.root, styles?.root],
    anchorLeft: [anchorLeft, theme.components.ModalHeader.anchorLeft, styles?.anchorLeft],
    anchorRight: [anchorRight, theme.components.ModalHeader.anchorRight, styles?.anchorRight],
    title: [title, theme.components.ModalHeader.title, styles?.title],
    subtitle: [subtitle, theme.components.ModalHeader.subtitle, styles?.subtitle],
  };

  return {
    composedStyles,
  };
};
