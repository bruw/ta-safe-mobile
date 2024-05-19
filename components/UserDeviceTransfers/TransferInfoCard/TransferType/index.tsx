import { Icon, Text } from '@rneui/themed';
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

    return (
        <View style={styles.container}>
            <Icon
                name={transfer.source_user.id == user?.id
                    ? "tray-arrow-up"
                    : "tray-arrow-down"
                }
                type="material-community"
                style={styles.icon}
                size={22}
            />
            <Text>
                {transfer.source_user.id == user?.id
                    ? t("components.transferType.sent")
                    : t("components.transferType.received")
                }
            </Text>
        </View>
    );
}