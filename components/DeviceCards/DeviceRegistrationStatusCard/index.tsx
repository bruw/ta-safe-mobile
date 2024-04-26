import { Card } from "@rneui/base";
import { useContext } from "react";
import { DeviceContext } from "contexts/DeviceProvider";
import moment from "moment";
import { t } from "i18next";
import TextWithSpan from "components/UI/TextWithSpan";
import MainButton from "components/UI/MainButton";

export default function DeviceRegistrationStatusCard() {
    const device = useContext(DeviceContext);

    return (
        <Card>
            <Card.Title style={{ fontSize: 16 }}>
                {t("cards.deviceRegistrationStatusCard.title")}
            </Card.Title>

            <Card.Divider />

            <TextWithSpan
                span={t("cards.deviceRegistrationStatusCard.status")}
                text={t(`status.${device.validation_status}`)}
                textColor={"orange"}
            />

            <TextWithSpan
                span={t("cards.deviceRegistrationStatusCard.created_at")}
                text={moment(device.created_at).format('DD/MM/YYYY HH:mm')}
            />

            <TextWithSpan
                span={t("cards.deviceRegistrationStatusCard.updated_at")}
                text={moment(device.updated_at).format('DD/MM/YYYY HH:mm')}
            />

            {device.validation_status == 'pending' && (
                <MainButton title={t("buttons.validation")} />
            )}

        </Card >
    )
}