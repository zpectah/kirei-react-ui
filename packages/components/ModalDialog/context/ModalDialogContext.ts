import { createContext, useContext } from 'react';
import { ModalDialogContextProps } from 'types';

const modalDialogContextDefaults: ModalDialogContextProps = {
  id: '',
  isOpen: false,
  onClose: () => {},
};

const ModalDialogContext = createContext(modalDialogContextDefaults);

export const ModalDialogContextProvider = ModalDialogContext.Provider;
export const ModalDialogContextConsumer = ModalDialogContext.Consumer;

export const useModalContext = (): ModalDialogContextProps => useContext(ModalDialogContext);

export default ModalDialogContext;
