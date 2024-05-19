import React from 'react';
import { t } from 'i18next';
import LabeledText from 'components/UI/LabeledText';
import { Transfer } from 'types/ApiTypes';
import { ListItem } from '@rneui/themed';

interface TransferUserParticipantsProps {
    transfer: Transfer;
}

export default function TransferUserParticipants({ transfer }: TransferUserParticipantsProps) {
    return (
        <ListItem.Content style={{ marginLeft: -15 }}>
            <LabeledText
                label={t("components.userDeviceTransfers.origin")}
                text={transfer.source_user.name}
            />

            <LabeledText
                label={t("components.userDeviceTransfers.destination")}
                text={transfer.target_user.name}
            />
        </ListItem.Content>
    );
}