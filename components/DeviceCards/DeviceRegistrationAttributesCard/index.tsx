import { Card } from "@rneui/base";
import LabeledText from "components/UI/LabeledText";
import { DeviceContext } from "contexts/DeviceProvider";
import { t } from "i18next";
import { useContext } from "react";
import { stylesDeviceRegistrationAttributesCard } from "./_styles";

export default function DeviceRegitrationAttributesCard() {
    const styles = stylesDeviceRegistrationAttributesCard();
    const { device } = useContext(DeviceContext);

    return (
        <Card containerStyle={styles.container}>
            <Card.Title style={styles.title}>
                {t('cards.registrationAttributes.title')}
            </Card.Title>

            <Card.Divider />

            <LabeledText
                label={t("attributes.device.brand")}
                text={device.device_model.brand.name}
            />

            <LabeledText
                label={t("attributes.device.model")}
                text={device.device_model.name}
            />

            <LabeledText
                label={t("attributes.device.color")}
                text={device.color}
            />

            <LabeledText
                label={t("attributes.device.ram")}
                text={device.device_model.ram}
            />

            <LabeledText
                label={t("attributes.device.storage")}
                text={device.device_model.storage}
            />

            <LabeledText
                label={t("attributes.device.imei_1")}
                text={device.imei_1}
            />

            <LabeledText
                label={t("attributes.device.imei_2")}
                text={device.imei_2}
            />
        </Card>
    );
}