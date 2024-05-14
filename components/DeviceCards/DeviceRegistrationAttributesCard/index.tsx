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
                label={t("cards.registrationAttributes.brand")}
                text={device.device_model.brand.name}
            />

            <LabeledText
                label={t("cards.registrationAttributes.model")}
                text={device.device_model.name}
            />

            <LabeledText
                label={t("cards.registrationAttributes.color")}
                text={device.color}
            />

            <LabeledText
                label={t("cards.registrationAttributes.ram")}
                text={device.device_model.ram}
            />

            <LabeledText
                label={t("cards.registrationAttributes.storage")}
                text={device.device_model.storage}
            />

            <LabeledText
                label={t("cards.registrationAttributes.imei_1")}
                text={device.imei_1}
            />

            <LabeledText
                label={t("cards.registrationAttributes.imei_2")}
                text={device.imei_2}
            />
        </Card>
    );
}