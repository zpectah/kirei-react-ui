import { createContext, useContext } from 'react';
import { KireiContextProps } from 'types';
import { defaultKireiContext } from './constants';

const KireiContext = createContext<KireiContextProps>(defaultKireiContext);
export const KireiContextProvider = KireiContext.Provider;
export const KireiContextConsumer = KireiContext.Consumer;

export const useKireiContext = (): KireiContextProps => useContext(KireiContext);

export default KireiContext;
