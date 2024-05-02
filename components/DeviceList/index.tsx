import React from 'react';
import { FlatList, View } from 'react-native';
import { Device } from 'types/ApiTypes';
import { stylesDeviceList } from './_styles';
import DeviceSummaryCard from 'components/DeviceCards/DeviceSummaryCard';

interface DeviceListProps {
    devices: Device[];
    refreshing: boolean;
    handleDevices: () => void;
}

export default function DeviceList({ devices, refreshing, handleDevices }: DeviceListProps) {
    const styles = stylesDeviceList();

    return (
        <View style={styles.container}>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={devices}
                    renderItem={({ item }) => <DeviceSummaryCard device={item} />}
                    keyExtractor={item => item.id.toString()}
                    refreshing={refreshing}
                    onRefresh={handleDevices}
                />
            </View>
        </View>
    );
}