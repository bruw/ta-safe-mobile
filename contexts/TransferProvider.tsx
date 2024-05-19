import React, { createContext, ReactNode } from 'react';
import { Transfer } from 'types/ApiTypes';

interface TransferProviderProps {
    transfer: Transfer;
    children: ReactNode;
}

interface TransferContextType {
    transfer: Transfer;
}

export const TransferContext = createContext<TransferContextType>({
    transfer: {} as Transfer,
});

export default function TransferProvider({ transfer, children }: TransferProviderProps) {
    return (
        <TransferContext.Provider value={{
            transfer: transfer
        }}>
            {children}
        </TransferContext.Provider>
    );
}
