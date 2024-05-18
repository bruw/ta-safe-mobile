import { useContext } from "react";
import { DeviceContext } from "contexts/DeviceProvider";
import { Card } from "@rneui/base";
import LabeledText from "components/UI/LabeledText";
import { t } from "i18next";
import moment from "moment";
import DeviceValidation from "components/DeviceValidation";
import { stylesDeviceRegistrationInfo } from "./_styles";
import MainButton from "components/UI/MainButton";
import { router } from "expo-router";
import DeleteInvalidDevice from "components/DeleteInvalidDevice";
import { Text } from "@rneui/themed";
import { View } from "react-native";
import DeviceShareToken from "components/DeviceShareToken";

export default function DeviceRegistrationInfo() {
    const styles = stylesDeviceRegistrationInfo();
    const { device } = useContext(DeviceContext);

    const statusStyle = {
        pending: styles.pending,
        in_analysis: styles.inAnalysis,
        rejected: styles.rejected,
        validated: styles.validated
    };

    return (
        <Card>
            {device.validation_status == "validated" ? (
                <View style={styles.titleContainer}>
                    <Text style={styles.titleContent}>
                        {t("cards.deviceRegistrationInfo.title")}
                    </Text>

                    <DeviceShareToken />
                </View>
            ) : (
                <Card.Title style={{ fontSize: 16 }}>
                    {t("cards.deviceRegistrationInfo.title")}
                </Card.Title>
            )}

            <Card.Divider />

            <LabeledText
                label={t("cards.deviceRegistrationInfo.status")}
                text={t(`status.${device.validation_status}`)}
                textStyle={statusStyle[device.validation_status]}
            />

            <LabeledText
                label={t("cards.deviceRegistrationInfo.owner")}
                text={device.user.name}
            />

            <LabeledText
                label={t("attributes.user.cpf")}
                text={device.user.cpf}
            />

            <LabeledText
                label={t("attributes.user.phone")}
                text={device.user.phone}
            />

            <LabeledText
                label={t("cards.deviceRegistrationInfo.created_at")}
                text={moment(device.created_at).format('DD/MM/YYYY HH:mm')}
            />

            <LabeledText
                label={t("cards.deviceRegistrationInfo.updated_at")}
                text={moment(device.updated_at).format('DD/MM/YYYY HH:mm')}
            />

            {device.validation_status === 'validated' && (
                <MainButton
                    title={t("buttons.transfer")}
                    onPress={() => router.push('/(auth)/(drawer)/my-devices')}
                />
            )}

            {device.validation_status == 'pending' && (
                <DeviceValidation />
            )}

            {device.validation_status === 'rejected' && (
                <DeleteInvalidDevice />
            )}
        </Card >
    );
}