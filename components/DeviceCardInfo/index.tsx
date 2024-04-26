import { Divider } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { Device } from 'types/ApiTypes';
import DeviceCardHeader from './DeviceCardHeader';
import DeviceCardContent from './DeviceCardContent';
import { stylesDeviceCard } from './_styles';
import DeviceProvider from 'contexts/DeviceProvider';

interface DeviceCardProps {
    device: Device;
}

export default function DeviceCardInfo({ device }: DeviceCardProps) {
    const styles = stylesDeviceCard();

    return (
        <DeviceProvider device={device}>
            <View style={styles.container}>
                <DeviceCardHeader />
                <Divider style={styles.divider} />
                <DeviceCardContent />
            </View>
        </DeviceProvider>
    );
}