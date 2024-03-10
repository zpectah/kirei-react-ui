import { Theme, ModalHeaderStylesProps } from 'types';
// import { useModalContext } from '../../Modal';

export const useCreateModalHeaderStyles = (theme: Theme, stylesProps: ModalHeaderStylesProps) => {
  const { spacing, palette } = theme;
  const { divider } = stylesProps;

  // TODO
  // const { color } = useModalContext();

  const rootBase = {
    padding: spacing.get(3, 3),
    borderBottom: divider ? `1px solid ${palette.background.divider}` : 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'space-between',
  };

  const titleContainerBase = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.get(1),
    flex: 1,
  };

  const actionsContainerBase = {};

  const titleBase = {};

  const subtitleBase = {};

  const styles = {
    root: Object.assign({ ...rootBase }),
    titleContainer: Object.assign({ ...titleContainerBase }),
    actionsContainer: Object.assign({ ...actionsContainerBase }),
    title: Object.assign({ ...titleBase }),
    subtitle: Object.assign({ ...subtitleBase }),
  };

  return { styles };
};
