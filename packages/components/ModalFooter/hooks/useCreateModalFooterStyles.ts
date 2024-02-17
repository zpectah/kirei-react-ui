import { Theme, ModalFooterStylesProps } from 'types';
import { getPaperDividerColor } from 'styles';
import { useModalContext } from '../../Modal';

export const useCreateModalFooterStyles = (theme: Theme, stylesProps: ModalFooterStylesProps) => {
  const { spacing, palette } = theme;
  const { justifyContent, divider } = stylesProps;

  const { color } = useModalContext();

  const rootDividerColor = getPaperDividerColor(color, palette);
  const rootBase = {
    paddingTop: divider ? spacing.get(3) : 0,
    paddingBottom: spacing.get(3),
    paddingLeft: spacing.get(3),
    paddingRight: spacing.get(3),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.get(2),
    justifyContent,
    borderTop: divider ? `1px solid ${rootDividerColor}` : 'none',
  };

  const styles = {
    root: Object.assign({ ...rootBase }),
  };

  return { styles };
};
