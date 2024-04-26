import CustomActivityIndicator from "components/UI/CustomActivityIndicator";
import DeviceWithPendingValidation from "components/Device/PendingStatus";
import { Stack, useFocusEffect, useLocalSearchParams } from "expo-router";
import { t } from "i18next";
import { useCallback, useState } from "react";
import api from "services/api/api";
import { Device } from "types/ApiTypes";

export default function _Screen() {
  const { id } = useLocalSearchParams();
  const [device, setDevice] = useState<Device>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleDevice = useCallback(() => {
    api
      .get<Device>(`api/devices/${id}`)
      .then((response) => setDevice(response.data))
      .catch((error) =>
        console.error("Ocorreu um erro ao buscar os dispositivo:", error.data),
      )
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useFocusEffect(handleDevice);

  if (isLoading) {
    return (
      <>
        <Stack.Screen options={{ title: t("components.device.title") }} />
        <CustomActivityIndicator />
      </>
    );
  }

  if (device) {
    return (
      <>
        <Stack.Screen options={{ title: t("components.device.title") }} />
        <DeviceWithPendingValidation device={device} />
      </>
    );
  }
}
