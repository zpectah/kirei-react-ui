import { Theme, ModalStylesProps } from 'types';

export const useCreateModalStyles = (theme: Theme, stylesProps: ModalStylesProps) => {
  // eslint-disable-next-line no-empty-pattern
  const {} = stylesProps;

  const rootBase = {
    margin: 0,
    padding: 0,
    border: 0,
    position: 'fixed',
    top: 0,
    left: 0,
    background: 'none',

    '&:modal': {},
    '&:not(:modal)': {},

    '&::backdrop': {
      background: 'none',
    },

    '&.isOpen': {},
    '&.isOpening': {},
    '&.isClosing': {},

    '& .dialog': {
      width: '50%',
      height: '50%',
      position: 'fixed',
      top: '25%',
      left: '25%',
      backgroundColor: 'rgb(250,250,250)',
      opacity: 0,

      transition: 'opacity 250ms ease-in-out 0s',
    },
    '&.isOpen:not(.isOpening,.isClosing)': {
      '.dialog': {
        opacity: 1,
      },
    },
  };
  const backdropBase = {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    backgroundColor: 'rgba(25,25,25,0)',
    transition: 'background-color 250ms ease-in-out 0s',

    '.isOpening &': {},
    '.isClosing &': {},

    '.isOpen:not(.isOpening,.isClosing) &': {
      backgroundColor: 'rgba(25,25,25,.25)',
    },
  };

  const styles = {
    root: Object.assign({ ...rootBase }),
    backdrop: Object.assign({ ...backdropBase }),
  };

  return { styles };
};
