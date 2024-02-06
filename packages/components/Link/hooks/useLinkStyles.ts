import { UseLinkStyles, UseLinkStylesReturn, LinkStylesProps } from 'types';
import { useUiContext } from 'styles';
import { useCreateLinkStyles } from './useCreateLinkStyles';

export const useLinkStyles = ({ styles }: UseLinkStyles, { ...linkStyles }: LinkStylesProps): UseLinkStylesReturn => {
  const { theme } = useUiContext();
  const {
    styles: { root },
  } = useCreateLinkStyles(theme, linkStyles);

  const composedStyles = {
    root: [root, theme.components.Link.root, styles?.root],
  };

  return {
    composedStyles,
  };
};
