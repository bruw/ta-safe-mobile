import { Text } from "@rneui/themed";
import { Link } from "expo-router";
import { t } from "i18next";
import { View } from "react-native";
import { stylesDeviceRegistrationCallToAction } from "./_styles";

export default function DeviceRegistrationCallToAction() {
    const styles = stylesDeviceRegistrationCallToAction();

    return (
        <View style={styles.container}>
            <View style={styles.contentMessage}>
                <Text style={styles.text}>
                    Ainda não registrou seu celular? Clique no link abaixo e não perca mais tempo!
                </Text>
                <Link href="/(auth)/(drawer)/device-registration/">
                    <Text style={styles.link}>{t("buttons.registerDevice")}</Text>
                </Link>
            </View>
        </View>
    );
}
