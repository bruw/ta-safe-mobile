import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Transfer } from 'types/ApiTypes';
import { stylesUserDeviceTranfers } from './_styles';
import TransferInfoCard from './TransferInfoCard';

interface UserDeviceTransfersProps {
    transfers: Transfer[];
    refreshing: boolean;
    handleTranfers: () => void;
}

export default function UserDeviceTransfers({ transfers, refreshing, handleTranfers }: UserDeviceTransfersProps) {
    const styles = stylesUserDeviceTranfers();
    const [expandedId, setExpandedId] = useState<number>();

    return (
        <View style={styles.flatListContainer}>
            <FlatList
                data={transfers}
                renderItem={({ item }) => (
                    <TransferInfoCard
                        transfer={item}
                        expanded={expandedId == item.id}
                        setExpanded={setExpandedId}
                    />
                )}
                keyExtractor={item => item.id.toString()}
                refreshing={refreshing}
                onRefresh={handleTranfers}
            />
        </View>
    );
}