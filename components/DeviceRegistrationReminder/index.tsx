import { Text } from "@rneui/themed";
import { Link } from "expo-router";
import { t } from "i18next";
import { View } from "react-native";
import { stylesDeviceRegistrationReminder } from "./_styles";

export default function DeviceRegistrationReminder() {
    const styles = stylesDeviceRegistrationReminder();

    return (
        <View style={styles.container}>
            <View style={styles.contentMessage}>
                <Text style={styles.text}>
                    {t("components.deviceRegistrationReminder.message")}
                </Text>
                <Link href="/(auth)/(drawer)/device-registration/">
                    <Text style={styles.link}>{t("buttons.register_device")}</Text>
                </Link>
            </View>
        </View>
    );
}
