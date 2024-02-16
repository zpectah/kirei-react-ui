import { Theme, ModalBodyStylesProps } from 'types';

export const useCreateModalBodyStyles = (theme: Theme, stylesProps: ModalBodyStylesProps) => {
  const { spacing } = theme;
  const { disableOffset } = stylesProps;

  const rootBase = {
    width: '100%',
    height: '100%',
    padding: disableOffset ? 0 : spacing.get(3, 3),
    flex: 1,
    flexGrow: 1,
    overflowX: 'hidden',
    overflowY: 'scroll',
    minHeight: 0,
    position: 'relative',
    overscrollBehavior: 'contain',
  };

  const containerBase = {
    position: 'relative',
  };

  const styles = {
    root: Object.assign({ ...rootBase }),
    container: Object.assign({ ...containerBase }),
  };

  return { styles };
};
