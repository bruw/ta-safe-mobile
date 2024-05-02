import { Card } from "@rneui/base";
import LabeledText from "components/UI/LabeledText";
import { DeviceContext } from "contexts/DeviceProvider";
import { t } from "i18next";
import { useContext } from "react";
import { stylesDeviceAttributesCard } from "./_styles";

export default function DeviceAttributesCard() {
    const styles = stylesDeviceAttributesCard();
    const { device } = useContext(DeviceContext);

    return (
        <Card containerStyle={styles.container}>
            <Card.Title style={styles.title}>
                {t('cards.deviceResourcesCard.title')}
            </Card.Title>

            <Card.Divider />

            <LabeledText
                label={t("cards.deviceResourcesCard.brand")}
                text={device.device_model.brand.name}
            />

            <LabeledText
                label={t("cards.deviceResourcesCard.model")}
                text={device.device_model.name}
            />

            <LabeledText
                label={t("cards.deviceResourcesCard.color")}
                text={device.color}
            />

            <LabeledText
                label={t("cards.deviceResourcesCard.ram")}
                text={device.device_model.ram}
            />

            <LabeledText
                label={t("cards.deviceResourcesCard.storage")}
                text={device.device_model.storage}
            />

            <LabeledText
                label={t("cards.deviceResourcesCard.imei_1")}
                text={device.imei_1}
            />

            <LabeledText
                label={t("cards.deviceResourcesCard.imei_2")}
                text={device.imei_2}
            />
        </Card>
    );
}