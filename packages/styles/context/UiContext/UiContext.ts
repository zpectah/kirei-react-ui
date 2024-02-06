import { createContext, useContext } from 'react';
import { UiContextProps } from 'types';
import { defaultUiContext } from './constants';

const UiContext = createContext<UiContextProps>(defaultUiContext);
export const UiContextProvider = UiContext.Provider;
export const UiContextConsumer = UiContext.Consumer;

export const useUiContext = (): UiContextProps => useContext(UiContext);

export default UiContext;
