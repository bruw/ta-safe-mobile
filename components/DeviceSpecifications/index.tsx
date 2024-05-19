import { Card } from "@rneui/base";
import LabeledText from "components/UI/LabeledText";
import { DeviceContext } from "contexts/DeviceProvider";
import { t } from "i18next";
import { useContext } from "react";
import { stylesDeviceSpecifications } from "./_styles";

export default function DeviceSpecifications() {
    const styles = stylesDeviceSpecifications();
    const { device } = useContext(DeviceContext);

    return (
        <Card containerStyle={styles.container}>
            <Card.Title style={styles.title}>
                {t('cards.registration_attributes.title')}
            </Card.Title>

            <Card.Divider />

            <LabeledText
                label={t("labels.brand")}
                text={device.device_model.brand.name}
            />

            <LabeledText
                label={t("labels.model")}
                text={device.device_model.name}
            />

            <LabeledText
                label={t("labels.color")}
                text={device.color}
            />

            <LabeledText
                label={t("labels.ram")}
                text={device.device_model.ram}
            />

            <LabeledText
                label={t("labels.storage")}
                text={device.device_model.storage}
            />

            <LabeledText
                label={t("labels.imei_1")}
                text={device.imei_1}
            />

            <LabeledText
                label={t("labels.imei_2")}
                text={device.imei_2}
            />
        </Card>
    );
}