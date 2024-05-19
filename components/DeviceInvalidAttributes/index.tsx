import { Card } from "@rneui/base";
import LabeledText from "components/UI/LabeledText";
import { DeviceContext } from "contexts/DeviceProvider";
import { t } from "i18next";
import { useContext } from "react";
import { stylesDeviceInvalidAttributes } from "./_styles";

export default function DeviceInvalidAttributes() {
    const styles = stylesDeviceInvalidAttributes();
    const { device } = useContext(DeviceContext);

    return (
        <Card containerStyle={styles.cardContainerStyle}>
            <Card.Title style={styles.title}>
                {t("cards.invalidDeviceAttributes.title")}
            </Card.Title>

            <Card.Divider />

            {!device.validation_attributes?.brand_name && (
                <LabeledText
                    label={t("attributes.device.brand")}
                    text={device.device_model.brand.name}
                />
            )}

            {!device.validation_attributes?.model_name && (
                <LabeledText
                    label={t("attributes.device.model")}
                    text={device.device_model.name}
                />
            )}

            {!device.validation_attributes?.color && (
                <LabeledText
                    label={t("attributes.device.color")}
                    text={device.color}
                />
            )}

            {!device.validation_attributes?.ram && (
                <LabeledText
                    label={t("attributes.device.ram")}
                    text={device.device_model.ram}
                />
            )}

            {!device.validation_attributes?.storage && (
                <LabeledText
                    label={t("attributes.device.storage")}
                    text={device.device_model.storage}
                />
            )}

            {!device.validation_attributes?.imei_1 && (
                <LabeledText
                    label={t("attributes.device.imei_1")}
                    text={device.imei_1}
                />
            )}

            {!device.validation_attributes?.imei_2 && (
                <LabeledText
                    label={t("attributes.device.imei_2")}
                    text={device.imei_2}
                />
            )}
        </Card>
    );
}