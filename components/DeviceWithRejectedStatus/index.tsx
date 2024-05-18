import DeviceRegistrationInfo from "components/DeviceRegistrationInfo";
import DeviceSpecifications from "components/DeviceSpecifications";
import DeviceProvider from "contexts/DeviceProvider";
import { ScrollView } from "react-native-gesture-handler";
import { Device } from "types/ApiTypes";

interface DeviceWithRejectedStatusProps {
    device: Device;
}

export default function DeviceWithRejectedStatus({ device }: DeviceWithRejectedStatusProps) {
    return (
        <DeviceProvider device={device} >
            <ScrollView>
                <DeviceRegistrationInfo />
                <DeviceSpecifications />
            </ScrollView>
        </DeviceProvider>
    );
}