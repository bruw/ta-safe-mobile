import { Text, useTheme } from "@rneui/themed";
import { ActivityIndicator, View } from "react-native";
import { stylesCustomActivityIndicator } from "./_styles";
import { t } from "i18next";

export default function CustomActivityIndicator() {
    const { theme } = useTheme();
    const styles = stylesCustomActivityIndicator();

    return (
        <View style={styles.container}>
            <ActivityIndicator
                size={60}
                color={theme.colors.primary}
            />
            <Text h4 h4Style={styles.text}>
                {t('components.customActivityIndicator.message')}
            </Text>
        </View>
    );
}