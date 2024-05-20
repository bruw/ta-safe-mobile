import { useTheme } from "@rneui/themed";
import MainButton from "components/UI/MainButton";
import { DeviceContext } from "contexts/DeviceProvider";
import { router } from "expo-router";
import notify from "helpers/notify";
import { t } from "i18next";
import { useContext } from "react";
import api from "services/api/api";
import { FlashMessage } from "types/ApiTypes";

interface DeleteDevice {
    message: FlashMessage;
}

export default function DeleteInvalidDevice() {
    const { device } = useContext(DeviceContext);
    const { theme } = useTheme();

    const onSubmit = async () => {
        try {
            await api.delete<DeleteDevice>(`/api/devices/${device.id}`);
            router.replace("/(auth)/(drawer)/my-devices/");
        } catch (error: any) {
            const data = error.response.data;

            notify({
                type: data.message.type,
                message: data.message.text,
            });
        }
    };

    return (
        <MainButton
            title={t("buttons.delete")}
            onPress={onSubmit}
            color={theme.colors.error}
        />
    );
}