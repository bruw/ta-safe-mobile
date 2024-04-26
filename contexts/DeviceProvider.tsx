import React, { createContext, ReactNode } from 'react';
import { Device } from 'types/ApiTypes';

interface DeviceProviderProps {
    device: Device;
    children: ReactNode;
}

export const DeviceContext = createContext({} as Device);

export default function DeviceProvider({ device, children }: DeviceProviderProps) {
    return (
        <DeviceContext.Provider value={device}>
            {children}
        </DeviceContext.Provider>
    );
}