import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Transfer } from 'types/ApiTypes';

interface TransferProviderProps {
    transfer: Transfer;
    children: ReactNode;
}

interface TransferContextType {
    transfer: Transfer;
    updateTransfer: (updatedTransfer: Transfer) => void;
}

export const TransferContext = createContext<TransferContextType>({
    transfer: {} as Transfer,
    updateTransfer: () => { },
});

export default function TransferProvider({ transfer, children }: TransferProviderProps) {
    const [currentTransfer, setCurrentTransfer] = useState<Transfer>(transfer);

    useEffect(() => {
        setCurrentTransfer(transfer);
    }, [transfer]);

    const updateTransfer = (updatedTransfer: Transfer) => {
        setCurrentTransfer(updatedTransfer);
    };

    return (
        <TransferContext.Provider value={{
            transfer: currentTransfer,
            updateTransfer,
        }}>
            {children}
        </TransferContext.Provider>
    );
}
