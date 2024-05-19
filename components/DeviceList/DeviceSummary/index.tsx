import React from 'react';
import { Device } from 'types/ApiTypes';
import DeviceProvider from 'contexts/DeviceProvider';
import { Card } from '@rneui/base';
import CustomDivider from 'components/UI/CustomDivider';
import DeviceSummaryHeader from './DeviceSummaryHeader';
import DeviceSummaryContent from './DeviceSummaryContent';
import { useTheme } from '@rneui/themed';

interface DeviceCardProps {
    device: Device;
}

export default function DeviceSummary({ device }: DeviceCardProps) {
    const {theme} = useTheme();

    return (
        <DeviceProvider device={device}>
            <Card containerStyle={{marginBottom: theme.spacing.xl}}>
                <DeviceSummaryHeader />
                <CustomDivider />
                <DeviceSummaryContent />
            </Card>
        </DeviceProvider>
    );
}