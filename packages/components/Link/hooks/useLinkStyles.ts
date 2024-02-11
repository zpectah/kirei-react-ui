import { UseLinkStyles, UseLinkStylesReturn, LinkStylesProps } from 'types';
import { useKireiContext } from 'styles';
import { useCreateLinkStyles } from './useCreateLinkStyles';

export const useLinkStyles = ({ styles }: UseLinkStyles, { ...linkStyles }: LinkStylesProps): UseLinkStylesReturn => {
  const { theme } = useKireiContext();
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
