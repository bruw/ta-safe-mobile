import React from 'react';
import { FlatList, View } from 'react-native';
import { Transfer } from 'types/ApiTypes';
import TransferSummary from './TransferSummary';
import { stylesUserDeviceTranfers } from './_styles';

interface UserDeviceTransfersProps {
    transfers: Transfer[];
    refreshing: boolean;
    handleTranfers: () => void;
}

export default function UserDeviceTransfers({ transfers, refreshing, handleTranfers }: UserDeviceTransfersProps) {
    const styles = stylesUserDeviceTranfers();

    return (
        <View style={styles.flatListContainer}>
            <FlatList
                data={transfers}
                renderItem={({ item }) => <TransferSummary transfer={item} />}
                keyExtractor={item => item.id.toString()}
                refreshing={refreshing}
                onRefresh={handleTranfers}
            />
        </View>
    );
}