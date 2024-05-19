import CopyToClipboardButton from "components/UI/CopyToClipboardButton";
import LabeledText from "components/UI/LabeledText";
import { TransferContext } from "contexts/TransferProvider";
import { isTokenExpired } from "helpers/isTokenExpired";
import { t } from "i18next";
import { useContext } from "react";
import { View } from "react-native";
import { Device } from "types/ApiTypes";
import { stylesDeviceSharingToken } from "./_styles";

export default function DeviceSharingToken() {
    const styles = stylesDeviceSharingToken();
    const { transfer } = useContext(TransferContext);
    const device: Device | undefined = transfer.device;

    if (!device) return null;

    if (isTokenExpired(device?.sharing_token?.expires_at) && transfer.status == 'pending') {
        return (
            <LabeledText
                label={t("components.deviceSharingToken.label")}
                text={t("components.deviceSharingToken.message")}
            />
        );
    }

    if (device.sharing_token && transfer.status == 'pending') {
        return (
            <View style={styles.clipBoardContainer}>
                <CopyToClipboardButton
                    label={t("components.deviceSharingToken.label")}
                    labeStyle={{ fontWeight: 'bold' }}
                    text={device.sharing_token.token.toString()}
                    iconSize={18}
                />
            </View>
        );
    }
}