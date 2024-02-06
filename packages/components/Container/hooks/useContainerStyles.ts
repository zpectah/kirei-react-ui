import { UseContainerStyles, UseContainerStylesReturn, ContainerStylesProps } from 'types';
import { useUiContext } from 'styles';
import { useCreateContainerStyles } from './useCreateContainerStyles';

export const useContainerStyles = (
  { styles }: UseContainerStyles,
  { ...containerStyles }: ContainerStylesProps
): UseContainerStylesReturn => {
  const { theme } = useUiContext();
  const {
    styles: { root },
  } = useCreateContainerStyles(theme, containerStyles);

  const composedStyles = {
    root: [root, theme.components.Container.root, styles?.root],
  };

  return {
    composedStyles,
  };
};
