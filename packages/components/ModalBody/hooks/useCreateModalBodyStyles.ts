import { Theme, ModalBodyStylesProps } from 'types';
import { useModalContext } from '../../Modal';

export const useCreateModalBodyStyles = (theme: Theme, stylesProps: ModalBodyStylesProps) => {
  const { spacing } = theme;
  const { disableOffset } = stylesProps;

  const { scroll } = useModalContext();

  const rootBase = {
    width: '100%',
    height: '100%',
    padding: disableOffset ? 0 : spacing.get(3, 3),
    flex: 1,
  };
  const rootScroll = {
    body: {},
    paper: {
      flexGrow: 1,
      overflowX: 'hidden',
      overflowY: 'scroll',
      minHeight: 0,
      position: 'relative',
      overscrollBehavior: 'contain',
    },
  };

  const containerBase = {
    position: 'relative',
  };

  const styles = {
    root: Object.assign({ ...rootBase, ...rootScroll[scroll] }),
    container: Object.assign({ ...containerBase }),
  };

  return { styles };
};
