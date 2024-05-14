import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Device } from 'types/ApiTypes';

interface DeviceProviderProps {
    device: Device;
    children: ReactNode;
}

interface DeviceContextType {
    device: Device;
    updateDevice: (updatedDevice: Device) => void;
}

export const DeviceContext = createContext<DeviceContextType>({
    device: {} as Device,
    updateDevice: () => { },
});

export default function DeviceProvider({ device, children }: DeviceProviderProps) {
    const [currentDevice, setCurrentDevice] = useState<Device>(device);

    useEffect(() => {
        setCurrentDevice(device);
    }, [device]);

    const updateDevice = (updatedDevice: Device) => {
        setCurrentDevice(updatedDevice);
    };

    return (
        <DeviceContext.Provider value={{ device: currentDevice, updateDevice }}>
            {children}
        </DeviceContext.Provider>
    );
}