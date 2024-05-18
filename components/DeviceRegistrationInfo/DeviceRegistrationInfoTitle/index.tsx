import { Card, Text } from "@rneui/themed";
import DeviceShareToken from "components/DeviceShareToken";
import { DeviceContext } from "contexts/DeviceProvider";
import { t } from "i18next";
import { useContext } from "react";
import { View } from "react-native";
import useToken from "states/useToken";
import { stylesDeviceRegistrationInfoHeader } from "./_styles";

export default function () {
    const styles = stylesDeviceRegistrationInfoHeader();
    const { user } = useToken();
    const { device } = useContext(DeviceContext);

    if (device.user.id == user?.id) {
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

    return (
        <Card.Title style={{ fontSize: 16 }}>
            {t("cards.deviceRegistrationInfo.title")}
        </Card.Title >
    );
}