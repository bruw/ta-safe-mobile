import React from 'react';
import { Transfer } from 'types/ApiTypes';
import { Card, ListItem } from '@rneui/base';
import TransferCardHeader from './TransferCardHeader';
import TransferUserParticipants from './TransferUserParticipants';
import TransferDeviceBasicInfo from './TransferDeviceBasicInfo';
import TransferProvider from 'contexts/TransferProvider';
import TransferActions from './TransferActions';
import { useTheme } from '@rneui/themed';

interface TransferInfoCardProps {
    transfer: Transfer;
    expanded: boolean;
    setExpanded: (id?: number) => void;
}

export default function TransferInfoCard({ transfer, expanded, setExpanded }: TransferInfoCardProps) {
    const { theme } = useTheme();

    const handlePress = () => {
        setExpanded(expanded ? undefined : transfer.id);
    };

    return (
        <TransferProvider transfer={transfer}>
            <Card containerStyle={{ marginBottom: theme.spacing.xl }}>
                <TransferCardHeader />
                <ListItem.Accordion
                    content={<TransferUserParticipants />}
                    isExpanded={expanded}
                    onPress={handlePress}
                >
                    <TransferDeviceBasicInfo device={transfer.device} />
                    <TransferActions />
                </ListItem.Accordion>
            </Card>
        </TransferProvider>
    );
}