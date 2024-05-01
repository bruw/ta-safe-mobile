import React, { useContext } from 'react';
import { View } from 'react-native';
import { t } from 'i18next';
import { DeviceContext } from 'contexts/DeviceProvider';
import { useRouter } from 'expo-router';
import TextWithSpan from 'components/UI/TextWithSpan';
import MainButton from 'components/UI/MainButton';

export default function CardContent() {
    const { device } = useContext(DeviceContext);
    const router = useRouter();

    return (
        <View>
            <TextWithSpan
                span={t("components.deviceCard.brand")}
                text={device.device_model.brand.name}
            />

            <TextWithSpan
                span={t("components.deviceCard.color")}
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