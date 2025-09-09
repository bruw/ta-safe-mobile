import DeviceInvalidAttributes from "components/DeviceInvalidAttributes";
import DeviceRegistrationInfo from "components/DeviceRegistrationInfo";
import DeviceProvider from "contexts/DeviceProvider";
import { ScrollView } from "react-native-gesture-handler";
import { Device } from "types/ApiTypes";
import DeviceValidAttributes from "components/DeviceValidAttributes";
import DeviceTransfers from "components/DeviceTransfers";

interface DeviceWithValidatedStatusProps {
    device: Device;
    publicMode?: boolean;
}

export default function DeviceWithValidatedStatus({ device, publicMode }: DeviceWithValidatedStatusProps) {
    return (
        <DeviceProvider device={device} initialPublicMode={publicMode}>
            <ScrollView>
                <DeviceRegistrationInfo />
                <DeviceValidAttributes />
                <DeviceInvalidAttributes />

                {device.transfers && (
                    <DeviceTransfers />
                )}

            </ScrollView>
        </DeviceProvider>
    );
}