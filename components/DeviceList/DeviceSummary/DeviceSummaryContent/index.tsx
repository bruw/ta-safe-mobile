import React, { useContext } from 'react';
import { View } from 'react-native';
import { t } from 'i18next';
import { DeviceContext } from 'contexts/DeviceProvider';
import { useRouter } from 'expo-router';
import MainButton from 'components/UI/MainButton';
import LabeledText from 'components/UI/LabeledText';

export default function DeviceSummaryContent() {
    const { device } = useContext(DeviceContext);
    const router = useRouter();

    return (
        <View>
            <LabeledText
                label={t("labels.status")}
                text={t(`status.${device.validation_status}`)}
            />

            <LabeledText
                label={t("labels.brand")}
                text={device.device_model.brand.name}
            />

            <LabeledText
                label={t("labels.color")}
                text={device.color}
            />

            <MainButton
                type='clear'
                title={t("buttons.details")}
                onPress={() => router.push(`/(auth)/(stack)/device/${device.id}`)}
            />
        </View>
    );
}