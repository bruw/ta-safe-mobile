import { Card } from "@rneui/base";
import TextWithSpan from "components/UI/TextWithSpan";
import { DeviceContext } from "contexts/DeviceProvider";
import { t } from "i18next";
import { useContext } from "react";

export default function DeviceInfoCard() {
    const device = useContext(DeviceContext);

    return (
        <Card>
            <Card.Title style={{ fontSize: 16 }}>
                {t('cards.deviceResourcesCard.title')}
            </Card.Title>

            <Card.Divider />

            <TextWithSpan
                span={t("cards.deviceResourcesCard.brand")}
                text={device.device_model.brand.name}
            />

            <TextWithSpan
                span={t("cards.deviceResourcesCard.model")}
                text={device.device_model.name}
            />

            <TextWithSpan
                span={t("cards.deviceResourcesCard.color")}
                text={device.color}
            />

            <TextWithSpan
                span={t("cards.deviceResourcesCard.ram")}
                text={device.device_model.ram}
            />

            <TextWithSpan
                span={t("cards.deviceResourcesCard.storage")}
                text={device.device_model.storage}
            />

            <TextWithSpan
                span={t("cards.deviceResourcesCard.imei_1")}
                text={device.imei_1}
            />

            <TextWithSpan
                span={t("cards.deviceResourcesCard.imei_2")}
                text={device.imei_2}
            />
        </Card>
    );
}