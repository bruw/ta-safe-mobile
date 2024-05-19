import { Text } from "@rneui/themed";
import LabeledText from "components/UI/LabeledText";
import { t } from "i18next";
import { View } from "react-native";
import { Device } from "types/ApiTypes";
import { stylesTransferDeviceBasicInfo } from "./_styles";

interface TransferDeviceBasicInfoProps {
    device?: Device;
}

export default function TransferDeviceBasicInfo({ device }: TransferDeviceBasicInfoProps) {
    const styles = stylesTransferDeviceBasicInfo();

    if (!device) return <></>;

    return (
        <View>
            <Text style={styles.title}>
                {t("components.transferDeviceBasicInfo.title")}
            </Text>
            <LabeledText
                label={t("attributes.device.identifier")}
                text={device.id.toString()}
            />

            <LabeledText
                label={t("attributes.device.brand")}
                text={device.device_model.brand.name}
            />

            <LabeledText
                label={t("attributes.device.model")}
                text={device.device_model.name}
            />
        </View>
    );
}