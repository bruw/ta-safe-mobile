import React from 'react';
import { Device } from 'types/ApiTypes';
import DeviceProvider from 'contexts/DeviceProvider';
import { Card } from '@rneui/base';
import CustomDivider from 'components/UI/CustomDivider';
import DeviceSummaryHeader from './DeviceSummaryHeader';
import DeviceSummaryContent from './DeviceSummaryContent';

interface DeviceCardProps {
    device: Device;
}

export default function DeviceSummary({ device }: DeviceCardProps) {
    return (
        <DeviceProvider device={device}>
            <Card>
                <DeviceSummaryHeader />
                <CustomDivider />
                <DeviceSummaryContent />
            </Card>
        </DeviceProvider>
    );
}