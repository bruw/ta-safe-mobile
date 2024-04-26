import DeviceRegistrationStatusCard from "components/DeviceCards/DeviceRegistrationStatusCard";
import DeviceProvider from "contexts/DeviceProvider";
import { Device } from "types/ApiTypes";

interface DeviceWithPendingValidationProps {
    device: Device;
}

export default function DeviceWithPendingValidation({ device }: DeviceWithPendingValidationProps) {
    return (
        <DeviceProvider device={device} >
            <DeviceRegistrationStatusCard />
        </DeviceProvider>
    );
}