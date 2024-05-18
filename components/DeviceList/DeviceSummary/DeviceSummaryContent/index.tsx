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
                label={t("components.deviceCard.brand")}
                text={device.device_model.brand.name}
            />

            <LabeledText
                label={t("components.deviceCard.color")}
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