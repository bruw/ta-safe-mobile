import { Card } from "@rneui/base";
import LabeledText from "components/UI/LabeledText";
import { DeviceContext } from "contexts/DeviceProvider";
import { t } from "i18next";
import { useContext } from "react";
import { stylesValidDeviceAttributesCard } from "./_styles";
import { Text } from "@rneui/themed";

export default function ValidDeviceAttributesCard() {
    const styles = stylesValidDeviceAttributesCard();
    const { device } = useContext(DeviceContext);

    const hasValidAttributes = () => {
        const { validation_attributes } = device;
        if (!validation_attributes) return false;

        return Object.values(validation_attributes).some(attr => attr === true);
    };

    return (
        <Card>
            <Card.Title style={styles.title}>
                {t("cards.validDeviceAttributes.title")}
            </Card.Title>

            <Card.Divider />

            {!hasValidAttributes() && (
                <Text>{t("cards.validDeviceAttributes.nonAttributes")}</Text>
            )}

            {device.validation_attributes?.brand_name && (
                <LabeledText
                    label={t("attributes.device.brand")}
                    text={device.device_model.brand.name}
                />
            )}

            {device.validation_attributes?.model_name && (
                <LabeledText
                    label={t("attributes.device.model")}
                    text={device.device_model.name}
                />
            )}

            {device.validation_attributes?.color && (
                <LabeledText
                    label={t("attributes.device.color")}
                    text={device.color}
                />
            )}

            {device.validation_attributes?.ram && (
                <LabeledText
                    label={t("attributes.device.ram")}
                    text={device.device_model.ram}
                />
            )}

            {device.validation_attributes?.storage && (
                <LabeledText
                    label={t("attributes.device.storage")}
                    text={device.device_model.storage}
                />
            )}

            {device.validation_attributes?.imei_1 && (
                <LabeledText
                    label={t("attributes.device.imei_1")}
                    text={device.imei_1}
                />
            )}

            {device.validation_attributes?.imei_2 && (
                <LabeledText
                    label={t("attributes.device.imei_2")}
                    text={device.imei_2}
                />
            )}
        </Card>
    );
}