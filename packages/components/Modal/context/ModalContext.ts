import { createContext, useContext } from 'react';
import { ModalContextProps, modalScrollDeterminateKeys } from 'types';

const ModalContextDefaults: ModalContextProps = {
  id: '',
  isOpen: false,
  onClose: () => {},
  scroll: modalScrollDeterminateKeys.paper,
};

const ModalContext = createContext(ModalContextDefaults);

export const ModalContextProvider = ModalContext.Provider;
export const ModalContextConsumer = ModalContext.Consumer;

export const useModalContext = (): ModalContextProps => useContext(ModalContext);

export default ModalContext;
