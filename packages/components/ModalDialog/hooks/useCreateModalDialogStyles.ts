import { Theme, ModalDialogStylesProps } from 'types';

export const useCreateModalDialogStyles = (theme: Theme, stylesProps: ModalDialogStylesProps) => {
  // eslint-disable-next-line no-empty-pattern
  const {} = stylesProps;

  const rootBase = {
    width: '100%',
    height: '100%',
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
      backgroundColor: 'rgba(25,25,25,.25)',
    },

    '& .dialog': {
      width: '50%',
      height: '50%',
      position: 'fixed',
      top: '25%',
      left: '25%',
      backgroundColor: 'rgb(250,250,250)',
    },
  };

  const styles = {
    root: Object.assign({ ...rootBase }),
  };

  return { styles };
};
