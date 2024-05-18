import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Device } from 'types/ApiTypes';

interface DeviceProviderProps {
    device: Device;
    initialPublicMode?: boolean;
    children: ReactNode;
}

interface DeviceContextType {
    device: Device;
    publicMode: boolean;
    updateDevice: (updatedDevice: Device) => void;
    setPublicMode: (mode: boolean) => void;
}

export const DeviceContext = createContext<DeviceContextType>({
    device: {} as Device,
    publicMode: false,
    updateDevice: () => { },
    setPublicMode: () => { },
});

export default function DeviceProvider({ device, initialPublicMode = false, children }: DeviceProviderProps) {
    const [currentDevice, setCurrentDevice] = useState<Device>(device);
    const [publicMode, setPublicMode] = useState<boolean>(initialPublicMode);

    useEffect(() => {
        setCurrentDevice(device);
    }, [device]);

    const updateDevice = (updatedDevice: Device) => {
        setCurrentDevice(updatedDevice);
    };

    return (
        <DeviceContext.Provider value={{
            device: currentDevice,
            publicMode: publicMode,
            updateDevice,
            setPublicMode
        }}>
            {children}
        </DeviceContext.Provider>
    );
}