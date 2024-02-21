import { createContext, useContext } from 'react';
import { ModalContextProps, modalScrollDeterminateKeys } from 'types';
import { MODAL_PAPER_DEFAULT_COLOR } from 'core';

const ModalContextDefaults: ModalContextProps = {
  id: '',
  isOpen: false,
  onClose: () => {},
  scroll: modalScrollDeterminateKeys.paper,
  color: MODAL_PAPER_DEFAULT_COLOR,
};

const ModalContext = createContext(ModalContextDefaults);

export const ModalContextProvider = ModalContext.Provider;
export const ModalContextConsumer = ModalContext.Consumer;

export const useModalContext = (): ModalContextProps => useContext(ModalContext);

export default ModalContext;
