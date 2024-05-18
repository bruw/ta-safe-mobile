import { Text } from "@rneui/themed";
import { View } from "react-native";
import { stylesDeviceSummaryHeader } from "./_styles";
import { useContext } from "react";
import { DeviceContext } from "contexts/DeviceProvider";
import BadgeStatus from "components/UI/BadgeStatus";

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
                <BadgeStatus status={device.validation_status} />
            </View>
        </View>
    );
}