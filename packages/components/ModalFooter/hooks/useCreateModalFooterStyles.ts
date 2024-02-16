import { Theme, ModalFooterStylesProps } from 'types';

export const useCreateModalFooterStyles = (theme: Theme, stylesProps: ModalFooterStylesProps) => {
  const { spacing, palette } = theme;
  const { justifyContent, divider } = stylesProps;

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
    borderTop: divider ? `1px solid ${palette.shape.divider}` : 'none',
  };

  const styles = {
    root: Object.assign({ ...rootBase }),
  };

  return { styles };
};
