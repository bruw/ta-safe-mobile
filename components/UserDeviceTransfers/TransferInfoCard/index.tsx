import React from 'react';
import { Transfer } from 'types/ApiTypes';
import { Card, ListItem } from '@rneui/base';
import TransferCardHeader from './TransferCardHeader';
import TransferUserParticipants from './TransferUserParticipants';
import TransferDeviceBasicInfo from './TransferDeviceBasicInfo';

interface TransferInfoCardProps {
    transfer: Transfer;
    expanded: boolean;
    setExpanded: (id?: number) => void;
}

export default function TransferInfoCard({ transfer, expanded, setExpanded }: TransferInfoCardProps) {
    const handlePress = () => {
        setExpanded(expanded ? undefined : transfer.id);
    };

    return (
        <Card>
            <TransferCardHeader transfer={transfer} />
            <ListItem.Accordion
                content={<TransferUserParticipants transfer={transfer} />}
                isExpanded={expanded}
                onPress={handlePress}
            >
                <TransferDeviceBasicInfo device={transfer.device} />
            </ListItem.Accordion>
        </Card>
    );
}