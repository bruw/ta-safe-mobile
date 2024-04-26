import { Text } from "@rneui/themed";
import { View } from "react-native";
import BadgeStatus from "./BadgeStatus";
import { DeviceValidationStatus } from "types/ApiTypes";
import { stylesDeviceCardHeader } from "./_styles";

interface DeviceCardHeaderProps {
    title: string;
    status: DeviceValidationStatus['validation_status'];
}

export default function DeviceCardHeader({ title, status }: DeviceCardHeaderProps) {
    const styles = stylesDeviceCardHeader();

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.textTitle}>{title}</Text>
            </View>
            <View style={styles.status}>
                <BadgeStatus status={status} />
            </View>
        </View>
    );
}