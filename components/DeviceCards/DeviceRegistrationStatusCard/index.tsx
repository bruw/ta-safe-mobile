import { useContext } from "react";
import { DeviceContext } from "contexts/DeviceProvider";
import { Card } from "@rneui/base";
import LabeledText from "components/UI/LabeledText";
import { t } from "i18next";
import moment from "moment";
import DeviceValidation from "components/DeviceValidation";
import { stylesRegistrationStatusCard } from "./_styles";
import { Button, Text } from "@rneui/themed";
import MainButton from "components/UI/MainButton";
import { Link, router } from "expo-router";

export default function DeviceRegistrationStatusCard() {
    const styles = stylesRegistrationStatusCard();
    const { device } = useContext(DeviceContext);

    const statusStyle = {
        pending: styles.pending,
        in_analysis: styles.inAnalysis,
        rejected: styles.rejected,
        validated: styles.validated
    };

    return (
        <Card>
            <Card.Title style={{ fontSize: 16 }}>
                {t("cards.deviceRegistrationStatusCard.title")}
            </Card.Title>

            <Card.Divider />

            <LabeledText
                label={t("cards.deviceRegistrationStatusCard.status")}
                text={t(`status.${device.validation_status}`)}
                textStyle={statusStyle[device.validation_status]}
            />

            <LabeledText
                label={t("cards.deviceRegistrationStatusCard.owner")}
                text={device.user.name}
            />

            <LabeledText
                label={t("cards.deviceRegistrationStatusCard.cpf")}
                text={device.user.cpf}
            />

            <LabeledText
                label={t("cards.deviceRegistrationStatusCard.phone")}
                text={device.user.phone}
            />

            <LabeledText
                label={t("cards.deviceRegistrationStatusCard.created_at")}
                text={moment(device.created_at).format('DD/MM/YYYY HH:mm')}
            />

            <LabeledText
                label={t("cards.deviceRegistrationStatusCard.updated_at")}
                text={moment(device.updated_at).format('DD/MM/YYYY HH:mm')}
            />

            {device.validation_status == 'pending' && (
                <DeviceValidation />
            )}

            {device.validation_status === 'validated' && (
                <MainButton
                    title={t("buttons.transfer")}
                    onPress={() => router.push('/(auth)/(drawer)/my-devices')}
                />
            )}
        </Card >
    );
}