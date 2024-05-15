import DeviceRegistrationStatusCard from "components/DeviceCards/DeviceRegistrationStatusCard";
import InvalidDeviceAttributesCard from "components/DeviceCards/InvalidDeviceAttributesCard";
import ValidDeviceAttributesCard from "components/DeviceCards/ValidDeviceAttributesCard";
import DeviceProvider from "contexts/DeviceProvider";
import { ScrollView } from "react-native-gesture-handler";
import { Device } from "types/ApiTypes";

interface DeviceWithValidatedStatusProps {
    device: Device;
}

export default function DeviceWithValidatedStatus({ device }: DeviceWithValidatedStatusProps) {
    console.log(device.validation_attributes)
    return (
        <DeviceProvider device={device} >
            <ScrollView>
                <DeviceRegistrationStatusCard />
                <ValidDeviceAttributesCard />
                <InvalidDeviceAttributesCard />
            </ScrollView>
        </DeviceProvider>
    );
}