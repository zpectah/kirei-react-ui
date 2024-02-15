import { Theme, ModalHeaderStylesProps } from 'types';

export const useCreateModalHeaderStyles = (theme: Theme, stylesProps: ModalHeaderStylesProps) => {
  const { spacing, palette } = theme;
  const { divider } = stylesProps;

  const rootBase = {
    padding: spacing.get(3, 3),
    borderBottom: divider ? `1px solid ${palette.shape.divider}` : 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'space-between',
  };

  const anchorLeftBase = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.get(1),
    flex: 1,
  };

  const anchorRightBase = {};

  const titleBase = {};

  const subtitleBase = {};

  const styles = {
    root: Object.assign({ ...rootBase }),
    anchorLeft: Object.assign({ ...anchorLeftBase }),
    anchorRight: Object.assign({ ...anchorRightBase }),
    title: Object.assign({ ...titleBase }),
    subtitle: Object.assign({ ...subtitleBase }),
  };

  return { styles };
};
