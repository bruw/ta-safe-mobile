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
                {t("cards.invalid_device_attributes.title")}
            </Card.Title>

            <Card.Divider />

            {!device.validated_attributes?.brand_name && (
                <LabeledText
                    label={t("labels.brand")}
                    text={device.device_model.brand.name}
                />
            )}

            {!device.validated_attributes?.model_name && (
                <LabeledText
                    label={t("labels.model")}
                    text={device.device_model.name}
                />
            )}

            {!device.validated_attributes?.color && (
                <LabeledText
                    label={t("labels.color")}
                    text={device.color}
                />
            )}

            {!device.validated_attributes?.ram && (
                <LabeledText
                    label={t("labels.ram")}
                    text={device.device_model.ram}
                />
            )}

            {!device.validated_attributes?.storage && (
                <LabeledText
                    label={t("labels.storage")}
                    text={device.device_model.storage}
                />
            )}

            {!device.validated_attributes?.imei_1 && (
                <LabeledText
                    label={t("labels.imei_1")}
                    text={device.imei_1}
                />
            )}

            {!device.validated_attributes?.imei_2 && (
                <LabeledText
                    label={t("labels.imei_2")}
                    text={device.imei_2}
                />
            )}
        </Card>
    );
}