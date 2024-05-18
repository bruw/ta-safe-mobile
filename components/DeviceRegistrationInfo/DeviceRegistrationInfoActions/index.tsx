import CreateDeviceTransfer from "components/CreateDeviceTransfer";
import DeleteInvalidDevice from "components/DeleteInvalidDevice";
import DeviceValidation from "components/DeviceValidation";
import { DeviceContext } from "contexts/DeviceProvider";
import { useContext } from "react";

export default function DeviceRegistrationInfoActions() {
    const { device, publicMode } = useContext(DeviceContext);

    if (publicMode) {
        return <></>;
    }

    if (device.validation_status == 'pending') {
        return <DeviceValidation />;
    }

    if (device.validation_status == 'rejected') {
        <DeleteInvalidDevice />
    }

    if (device.validation_status === 'validated') {
        return <CreateDeviceTransfer />
    }

}