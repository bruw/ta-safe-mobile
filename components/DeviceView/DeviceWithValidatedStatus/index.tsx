import DeviceRegistrationStatusCard from "components/DeviceCards/DeviceRegistrationStatusCard";
import DeviceTransfersHistoryCard from "components/DeviceCards/DeviceTransfersHistoryCard";
import InvalidDeviceAttributesCard from "components/DeviceCards/InvalidDeviceAttributesCard";
import ValidDeviceAttributesCard from "components/DeviceCards/ValidDeviceAttributesCard";
import DeviceProvider from "contexts/DeviceProvider";
import { ScrollView } from "react-native-gesture-handler";
import { Device } from "types/ApiTypes";

interface DeviceWithValidatedStatusProps {
    device: Device;
}

export default function DeviceWithValidatedStatus({ device }: DeviceWithValidatedStatusProps) {
    return (
        <DeviceProvider device={device} >
            <ScrollView>
                <DeviceRegistrationStatusCard />
                <ValidDeviceAttributesCard />
                <InvalidDeviceAttributesCard />

                {device.transfers_history && (
                    <DeviceTransfersHistoryCard />
                )}

            </ScrollView>
        </DeviceProvider>
    );
}