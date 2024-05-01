import { Card, color } from "@rneui/base";
import { useContext } from "react";
import { DeviceContext } from "contexts/DeviceProvider";
import moment from "moment";
import { t } from "i18next";
import DeviceValidation from "components/DeviceValidation";
import LabeledText from "components/UI/LabeledText";

export default function DeviceRegistrationStatusCard() {
    const { device } = useContext(DeviceContext);

    return (
        <Card>
            <Card.Title style={{ fontSize: 16 }}>
                {t("cards.deviceRegistrationStatusCard.title")}
            </Card.Title>

            <Card.Divider />

            <LabeledText
                label={t("cards.deviceRegistrationStatusCard.status")}
                text={t(`status.${device.validation_status}`)}
                textStyle={{ color: "orange", fontWeight: "bold" }}
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
        </Card >
    )
}