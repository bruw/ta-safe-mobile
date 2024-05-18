import DeleteInvalidDevice from "components/DeleteInvalidDevice";
import DeviceValidation from "components/DeviceValidation";
import MainButton from "components/UI/MainButton";
import { DeviceContext } from "contexts/DeviceProvider";
import { router } from "expo-router";
import { t } from "i18next";
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
        return <MainButton
            title={t("buttons.transfer")}
            onPress={() => router.push('/(auth)/(drawer)/my-devices')}
        />
    }

}