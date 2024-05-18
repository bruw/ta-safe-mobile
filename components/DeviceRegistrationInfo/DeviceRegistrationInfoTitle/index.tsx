import { Card, Text } from "@rneui/themed";
import DeviceShareToken from "components/DeviceShareToken";
import { DeviceContext } from "contexts/DeviceProvider";
import { t } from "i18next";
import { useContext } from "react";
import { View } from "react-native";
import { stylesDeviceRegistrationInfoHeader } from "./_styles";

export default function DeviceRegistrationInfoTitle() {
    const styles = stylesDeviceRegistrationInfoHeader();
    const { device, publicMode } = useContext(DeviceContext);

    if (publicMode) {
        return (
            <Card.Title style={{ fontSize: 16 }}>
                {t("cards.deviceRegistrationInfo.title")}
            </Card.Title >
        );
    }

    if (device.validation_status == "validated") {
        return (
            <View style={styles.titleContainer}>
                <Text style={styles.titleContent}>
                    {t("cards.deviceRegistrationInfo.title")}
                </Text>

                <DeviceShareToken />
            </View>
        );
    }
}