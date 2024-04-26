import { Card } from "@rneui/base";
import { Text } from "@rneui/themed";
import ValidationButton from "./ValidationButton";
import { useContext } from "react";
import { DeviceContext } from "contexts/DeviceProvider";
import moment from "moment";
import { t } from "i18next";
import { stylesDeviceRegistrationStatusCard } from "./_styles";

export default function DeviceRegistrationStatusCard() {
    const styles = stylesDeviceRegistrationStatusCard();
    const device = useContext(DeviceContext);

    return (
        <Card>
            <Card.Title>{t("cards.deviceRegistrationStatusCard.title")}</Card.Title>

            <Card.Divider />

            <Text style={styles.textContainer}>
                <Text style={styles.span}>
                    {t("cards.deviceRegistrationStatusCard.status")}{': '}
                </Text>
                {t(`status.${device.validation_status}`)}
            </Text>

            <Text style={styles.textContainer}>
                <Text style={styles.span}>
                    {t("cards.deviceRegistrationStatusCard.created_at")}{': '}
                </Text>
                {moment(device.created_at).format('DD/MM/YYYY HH:mm')}
            </Text>

            <Text style={styles.textContainer}>
                <Text style={styles.span}>
                    {t("cards.deviceRegistrationStatusCard.updated_at")}{': '}
                </Text>
                {moment(device.updated_at).format('DD/MM/YYYY HH:mm')}
            </Text>

            {device.validation_status == 'pending' && (
                <ValidationButton />
            )}

        </Card >
    )
}