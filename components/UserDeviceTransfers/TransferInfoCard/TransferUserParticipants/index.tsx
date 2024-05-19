import React, { useContext } from 'react';
import { t } from 'i18next';
import LabeledText from 'components/UI/LabeledText';
import { ListItem } from '@rneui/themed';
import { TransferContext } from 'contexts/TransferProvider';

export default function TransferUserParticipants() {
    const { transfer } = useContext(TransferContext);

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