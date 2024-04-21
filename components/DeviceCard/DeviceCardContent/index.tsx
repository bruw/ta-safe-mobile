import React from 'react';
import { View } from 'react-native';
import { Device } from 'types/ApiTypes';
import { Text } from '@rneui/themed';
import { stylesDeviceCardContent } from './_styles';
import { t } from 'i18next';
import moment from 'moment';

interface DeviceCardContentProps {
    device: Device;
}

export default function DeviceCardContent({ device }: DeviceCardContentProps) {
    const styles = stylesDeviceCardContent();

    return (
        <View>
            <Text>
                <Text style={styles.span}>
                    {t("components.deviceCard.brand")}:{' '}
                </Text>
                {device.device_model.brand.name}
            </Text>

            <Text>
                <Text style={styles.span}>
                    {t("components.deviceCard.color")}:{' '}
                </Text>
                {device.color}
            </Text>

            <Text>
                <Text style={styles.span}>
                    {t("components.deviceCard.imei_1")}:{' '}
                </Text>
                {device.imei_1}
            </Text>

            <Text>
                <Text style={styles.span}>
                    {t("components.deviceCard.imei_2")}:{' '}
                </Text>
                {device.imei_2}
            </Text>

            <Text>
                <Text style={styles.span}>
                    {t("components.deviceCard.created_at")}:{' '}
                </Text>
                {moment(device.created_at).format('DD/MM/YYYY HH:mm')}
            </Text>

            <Text>
                <Text style={styles.span}>
                    {t("components.deviceCard.updated_at")}:{' '}
                </Text>
                {moment(device.updated_at).format('DD/MM/YYYY HH:mm')}
            </Text>
        </View>
    );
}