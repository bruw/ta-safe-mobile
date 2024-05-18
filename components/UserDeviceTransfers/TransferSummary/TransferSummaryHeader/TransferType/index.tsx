import { Icon, Text, useTheme } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import useToken from 'states/useToken';
import { Transfer } from 'types/ApiTypes';
import { stylesTransferType } from './_styles';
import { t } from 'i18next';

interface TransferTypeProps {
    transfer: Transfer;
}

export default function TransferType({ transfer }: TransferTypeProps) {
    const styles = stylesTransferType();
    const { user } = useToken();

    if (transfer.source_user.id == user?.id) {
        return (
            <View style={styles.container}>
                <Icon
                    name="tray-arrow-up"
                    type="material-community"
                    style={styles.icon}
                    size={22}
                />
                <Text>{t("components.transferType.sent")}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Icon
                name="tray-arrow-down"
                type="material-community"
                style={styles.icon}
                size={22}
            />
            <Text>{t("components.transferType.received")}</Text>
        </View>
    );

}