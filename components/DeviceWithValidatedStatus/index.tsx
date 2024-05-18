import DeviceInvalidAttributes from "components/DeviceInvalidAttributes";
import DeviceRegistrationInfo from "components/DeviceRegistrationInfo";
import DeviceTransfersHistory from "components/DeviceTransfersHistory";
import DeviceProvider from "contexts/DeviceProvider";
import { ScrollView } from "react-native-gesture-handler";
import { Device } from "types/ApiTypes";
import DeviceValidAttributes from "components/DeviceValidAttributes";

interface DeviceWithValidatedStatusProps {
    device: Device;
}

export default function DeviceWithValidatedStatus({ device }: DeviceWithValidatedStatusProps) {
    return (
        <DeviceProvider device={device} >
            <ScrollView>
                <DeviceRegistrationInfo />
                <DeviceValidAttributes />
                <DeviceInvalidAttributes />

                {device.transfers_history && (
                    <DeviceTransfersHistory />
                )}

            </ScrollView>
        </DeviceProvider>
    );
}