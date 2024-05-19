import { Divider, Text } from "@rneui/themed";
import LabeledText from "components/UI/LabeledText";
import { t } from "i18next";
import { View } from "react-native";
import { stylesTransferDeviceBasicInfo } from "./_styles";
import { useContext } from "react";
import { TransferContext } from "contexts/TransferProvider";
import DeviceSharingToken from "./DeviceSharingToken";
import { Device } from "types/ApiTypes";

export default function TransferDeviceBasicInfo() {
    const styles = stylesTransferDeviceBasicInfo();
    const { transfer } = useContext(TransferContext);
    const device: Device | undefined = transfer.device;

    if (!device) return <></>;

    return (
        <View>
            <Divider style={styles.dividerTop} />

            <Text style={styles.title}>{t("labels.device")}</Text>

            <LabeledText
                label={t("attributes.device.brand")}
                text={device.device_model.brand.name}
            />

            <LabeledText
                label={t("attributes.device.model")}
                text={device.device_model.name}
            />

            <DeviceSharingToken />

            {transfer.status == 'pending' && (
                <Divider style={styles.dividerBottom} />
            )}

        </View>
    );
}