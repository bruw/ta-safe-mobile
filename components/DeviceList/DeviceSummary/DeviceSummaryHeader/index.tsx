import { Text } from "@rneui/themed";
import { stylesDeviceSummaryHeader } from "./_styles";
import { useContext } from "react";
import { DeviceContext } from "contexts/DeviceProvider";

export default function DeviceSummaryHeader() {
    const styles = stylesDeviceSummaryHeader();
    const { device } = useContext(DeviceContext);

    return (
        <Text style={styles.title}>
            {device.device_model.name}
        </Text>
    );
}