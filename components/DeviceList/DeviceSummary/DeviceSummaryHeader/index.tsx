import { Text } from "@rneui/themed";
import { View } from "react-native";
import BadgeStatus from "./BadgeStatus";
import { stylesDeviceSummaryHeader } from "./_styles";
import { useContext } from "react";
import { DeviceContext } from "contexts/DeviceProvider";

export default function DeviceSummaryHeader() {
    const styles = stylesDeviceSummaryHeader();
    const { device } = useContext(DeviceContext);

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.textTitle}>
                    {device.device_model.name}
                </Text>
            </View>
            <View style={styles.status}>
                <BadgeStatus />
            </View>
        </View>
    );
}