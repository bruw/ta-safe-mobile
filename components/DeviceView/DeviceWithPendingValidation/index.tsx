
import DeviceAttributesCard from "components/DeviceCards/DeviceAttributesCard";
import DeviceRegistrationStatusCard from "components/DeviceCards/DeviceRegistrationStatusCard";
import DeviceProvider from "contexts/DeviceProvider";
import { ScrollView } from "react-native-gesture-handler";
import { Device } from "types/ApiTypes";

interface DeviceWithPendingValidationProps {
    device: Device;
}

export default function DeviceWithPendingValidation({ device }: DeviceWithPendingValidationProps) {
    return (
        <DeviceProvider device={device} >
            <ScrollView>
                <DeviceRegistrationStatusCard />
                <DeviceAttributesCard />
            </ScrollView>
        </DeviceProvider>
    );
}