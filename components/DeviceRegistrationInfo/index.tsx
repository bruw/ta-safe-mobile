import { useContext } from "react";
import { DeviceContext } from "contexts/DeviceProvider";
import { Card } from "@rneui/base";
import LabeledText from "components/UI/LabeledText";
import { t } from "i18next";
import moment from "moment";
import { stylesDeviceRegistrationInfo } from "./_styles";
import DeviceRegistrationInfoHeader from "./DeviceRegistrationInfoTitle";
import DeviceRegistrationInfoActions from "./DeviceRegistrationInfoActions";

export default function DeviceRegistrationInfo() {
    const styles = stylesDeviceRegistrationInfo();
    const { device, publicMode } = useContext(DeviceContext);

    return (
        <Card containerStyle={styles.cardContainerStyle}>
            <DeviceRegistrationInfoHeader />

            <Card.Divider />

            <LabeledText
                label={t("labels.status")}
                text={t(`status.${device.validation_status}`)}
            />

            <LabeledText
                label={t("labels.identifier")}
                text={device.id.toString()}
            />

            <LabeledText
                label={t("labels.owner")}
                text={device.user.name}
            />

            <LabeledText
                label={t("labels.cpf")}
                text={device.user.cpf}
            />

            <LabeledText
                label={t("labels.phone")}
                text={device.user.phone}
            />

            {!publicMode && (
                <>
                    <LabeledText
                        label={t("cards.device_registration_info.created_at")}
                        text={moment(device.created_at).format('DD/MM/YYYY HH:mm')}
                    />

                    <LabeledText
                        label={t("cards.device_registration_info.updated_at")}
                        text={moment(device.updated_at).format('DD/MM/YYYY HH:mm')}
                    />
                </>
            )}

            <DeviceRegistrationInfoActions />
        </Card >
    );
}