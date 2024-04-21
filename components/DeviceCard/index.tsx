import { Divider } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { Device } from 'types/ApiTypes';
import DeviceCardHeader from './DeviceCardHeader';
import DeviceCardContent from './DeviceCardContent';
import { stylesDeviceCard } from './_styles';

interface DeviceCardProps {
    device: Device;
}

export default function DeviceCard({ device }: DeviceCardProps) {
    const styles = stylesDeviceCard();

    return (
        <View style={styles.container}>
            <DeviceCardHeader
                title={device.device_model.name}
                status={device.validation_status}
            />
            <Divider style={styles.divider} />
            <DeviceCardContent device={device} />
        </View>
    );
}