import React from 'react';
import { Device } from 'types/ApiTypes';
import DeviceCardHeader from './CardHeader';
import DeviceCardContent from './CardContent';
import DeviceProvider from 'contexts/DeviceProvider';
import { Card } from '@rneui/base';
import CustomDivider from 'components/UI/CustomDivider';

interface DeviceCardProps {
    device: Device;
}

export default function DeviceBasicInfoCard({ device }: DeviceCardProps) {
    return (
        <DeviceProvider device={device}>
            <Card>
                <DeviceCardHeader />
                <CustomDivider />
                <DeviceCardContent />
            </Card>
        </DeviceProvider>
    );
}