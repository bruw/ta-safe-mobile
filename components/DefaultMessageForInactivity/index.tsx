import { Text } from "@rneui/themed";
import { Link } from "expo-router";
import { t } from "i18next";
import { View } from "react-native";
import { stylesDefaultMessageForInactivity } from "./_styles";

export default function DefaultMessageForInactivity() {
    const styles = stylesDefaultMessageForInactivity();

    return (
        <View style={styles.container}>
            <View style={styles.contentMessage}>
                <Text style={styles.text}>
                    {t("components.default_message_for_inactivity.message")}
                </Text>
                <Link href="/(auth)/(drawer)/my-devices/">
                    <Text style={styles.link}>{t("components.default_message_for_inactivity.go_home")}</Text>
                </Link>
            </View>
        </View>
    );
}
