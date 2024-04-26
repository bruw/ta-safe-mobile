import React, { useContext } from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { stylesDeviceCardContent } from './_styles';
import { t } from 'i18next';
import { DeviceContext } from 'contexts/DeviceProvider';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function DeviceCardContent() {
    const styles = stylesDeviceCardContent();
    const device = useContext(DeviceContext);

    return (
        <View>
            <Text style={styles.textContainer}>
                <Text style={styles.span}>
                    {t("components.deviceCard.brand")}:{' '}
                </Text>
                {device.device_model.brand.name}
            </Text>

            <Text style={styles.textContainer}>
                <Text style={styles.span}>
                    {t("components.deviceCard.color")}:{' '}
                </Text>
                {device.color}
            </Text>

            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonTitle}>
                    {t("buttons.details")}
                </Text>
            </TouchableOpacity>

        </View>
    );
}