import { Icon, Text } from '@rneui/themed';
import React, { useContext } from 'react';
import { View } from 'react-native';
import useToken from 'states/useToken';
import { stylesTransferType } from './_styles';
import { t } from 'i18next';
import { TransferContext } from 'contexts/TransferProvider';

export default function TransferType() {
    const styles = stylesTransferType();
    const { transfer } = useContext(TransferContext);
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