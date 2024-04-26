import { Divider } from '@rneui/themed';
import React from 'react';
import { Device } from 'types/ApiTypes';
import DeviceCardHeader from './DeviceCardHeader';
import DeviceCardContent from './DeviceCardContent';
import { stylesDeviceCard } from './_styles';
import DeviceProvider from 'contexts/DeviceProvider';
import { Card } from '@rneui/base';

interface DeviceCardProps {
    device: Device;
}

export default function DeviceCardInfo({ device }: DeviceCardProps) {
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