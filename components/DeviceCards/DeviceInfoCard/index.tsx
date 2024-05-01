import { Card } from "@rneui/base";
import TextWithSpan from "components/UI/TextWithSpan";
import { DeviceContext } from "contexts/DeviceProvider";
import { t } from "i18next";
import { useContext } from "react";
import { stylesDeviceInfoCard } from "./_styles";

export default function DeviceInfoCard() {
    const styles = stylesDeviceInfoCard();
    const { device } = useContext(DeviceContext);

    return (
        <Card containerStyle={styles.container}>
            <Card.Title style={styles.title}>
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