import { Divider } from '@rneui/themed';
import React from 'react';
import { Device } from 'types/ApiTypes';
import DeviceCardHeader from './CardHeader';
import DeviceCardContent from './CardContent';
import DeviceProvider from 'contexts/DeviceProvider';
import { Card } from '@rneui/base';
import { stylesDeviceCard } from './_styles';

interface DeviceCardProps {
    device: Device;
}

export default function DeviceBasicInfoCard({ device }: DeviceCardProps) {
    const styles = stylesDeviceCard();

    return (
        <DeviceProvider device={device}>
            <Card>
                <DeviceCardHeader />
                <Divider style={styles.divider} />
                <DeviceCardContent />
            </Card>
        </DeviceProvider>
    );
}