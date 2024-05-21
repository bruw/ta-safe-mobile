import React, { useContext } from 'react';
import { t } from 'i18next';
import LabeledText from 'components/UI/LabeledText';
import { ListItem } from '@rneui/themed';
import { TransferContext } from 'contexts/TransferProvider';
import moment from 'moment';

export default function TransferUserParticipants() {
    const { transfer } = useContext(TransferContext);

    return (
        <ListItem.Content style={{ marginLeft: -15 }}>
            <LabeledText
                label={t("labels.status")}
                text={t(`status.${transfer.status}`)}
            />

            <LabeledText
                label={t("labels.origin")}
                text={transfer.source_user.name}
            />

            <LabeledText
                label={t("labels.destination")}
                text={transfer.target_user.name}
            />

            <LabeledText
                label={t("labels.last_update")}
                text={moment(transfer.updated_at).format("DD/MM/YYYY HH:mm")}
            />
        </ListItem.Content>
    );
}