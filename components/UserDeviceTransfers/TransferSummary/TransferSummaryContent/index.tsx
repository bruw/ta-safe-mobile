import React from 'react';
import { View } from 'react-native';
import { t } from 'i18next';
import MainButton from 'components/UI/MainButton';
import LabeledText from 'components/UI/LabeledText';
import { Transfer } from 'types/ApiTypes';

interface TransferSummaryContentProps {
    transfer: Transfer;
}

export default function TransferSummaryContent({ transfer }: TransferSummaryContentProps) {
    return (
        <View>
            <LabeledText
                label={t("components.userDeviceTransfers.origin")}
                text={transfer.source_user.name}
            />

            <LabeledText
                label={t("components.userDeviceTransfers.destination")}
                text={transfer.target_user.name}
            />

            <MainButton
                type='clear'
                title={t("buttons.details")}
            />
        </View>
    );
}