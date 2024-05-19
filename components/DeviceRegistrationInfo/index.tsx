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

    const statusStyle = {
        pending: styles.pending,
        in_analysis: styles.inAnalysis,
        rejected: styles.rejected,
        validated: styles.validated
    };

    return (
        <Card containerStyle={styles.cardContainerStyle}>
            <DeviceRegistrationInfoHeader />

            <Card.Divider />

            <LabeledText
                label={t("cards.deviceRegistrationInfo.status")}
                text={t(`status.${device.validation_status}`)}
                textStyle={statusStyle[device.validation_status]}
            />

            <LabeledText
                label={t("attributes.device.identifier")}
                text={device.id.toString()}
            />

            <LabeledText
                label={t("cards.deviceRegistrationInfo.owner")}
                text={device.user.name}
            />

            <LabeledText
                label={t("attributes.user.cpf")}
                text={device.user.cpf}
            />

            <LabeledText
                label={t("attributes.user.phone")}
                text={device.user.phone}
            />

            {!publicMode && (
                <>
                    <LabeledText
                        label={t("cards.deviceRegistrationInfo.created_at")}
                        text={moment(device.created_at).format('DD/MM/YYYY HH:mm')}
                    />

                    <LabeledText
                        label={t("cards.deviceRegistrationInfo.updated_at")}
                        text={moment(device.updated_at).format('DD/MM/YYYY HH:mm')}
                    />
                </>
            )}

            <DeviceRegistrationInfoActions />
        </Card >
    );
}