import { Card } from "@rneui/base";
import LabeledText from "components/UI/LabeledText";
import { DeviceContext } from "contexts/DeviceProvider";
import { t } from "i18next";
import { useContext } from "react";
import { stylesDeviceValidAttributes } from "./_styles";
import { Text } from "@rneui/themed";

export default function DeviceValidAttributes() {
    const styles = stylesDeviceValidAttributes();
    const { device } = useContext(DeviceContext);

    const hasValidAttributes = () => {
        const { validation_attributes } = device;
        if (!validation_attributes) return false;

        return Object.values(validation_attributes).some(attr => attr === true);
    };

    return (
        <Card containerStyle={styles.cardContainerStyle}>
            <Card.Title style={styles.title}>
                {t("cards.valid_device_attributes.title")}
            </Card.Title>

            <Card.Divider />

            {!hasValidAttributes() && (
                <Text>{t("cards.valid_device_attributes.non_attributes")}</Text>
            )}

            {device.validation_attributes?.brand_name && (
                <LabeledText
                    label={t("labels.brand")}
                    text={device.device_model.brand.name}
                />
            )}

            {device.validation_attributes?.model_name && (
                <LabeledText
                    label={t("labels.model")}
                    text={device.device_model.name}
                />
            )}

            {device.validation_attributes?.color && (
                <LabeledText
                    label={t("labels.color")}
                    text={device.color}
                />
            )}

            {device.validation_attributes?.ram && (
                <LabeledText
                    label={t("labels.ram")}
                    text={device.device_model.ram}
                />
            )}

            {device.validation_attributes?.storage && (
                <LabeledText
                    label={t("labels.storage")}
                    text={device.device_model.storage}
                />
            )}

            {device.validation_attributes?.imei_1 && (
                <LabeledText
                    label={t("labels.imei_1")}
                    text={device.imei_1}
                />
            )}

            {device.validation_attributes?.imei_2 && (
                <LabeledText
                    label={t("labels.imei_2")}
                    text={device.imei_2}
                />
            )}
        </Card>
    );
}