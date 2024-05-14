import { Text, useTheme } from "@rneui/themed";
import { ActivityIndicator, View } from "react-native";
import { stylesCustomActivityIndicator } from "./_styles";
import { t } from "i18next";

interface CustomActivityIndicatorProps {
    message?: string;
}

export default function CustomActivityIndicator({ message }: CustomActivityIndicatorProps) {
    const { theme } = useTheme();
    const styles = stylesCustomActivityIndicator();

    return (
        <View style={styles.container}>
            <ActivityIndicator
                size="large"
                color={theme.colors.primary}
                style={styles.activityIndicator}
            />

            <Text h4 h4Style={styles.text}>
                {message || t('components.customActivityIndicator.default')}
            </Text>
        </View>
    );
}