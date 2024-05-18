import DeviceWithPendingStatus from "components/DeviceWithPendingStatus";
import DeviceWithRejectedStatus from "components/DeviceWithRejectedStatus";
import DeviceWithValidatedStatus from "components/DeviceWithValidatedStatus";
import CustomActivityIndicator from "components/UI/CustomActivityIndicator";
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

  if (device?.validation_status === "pending") {
    return (
      <>
        <Stack.Screen options={{ title: t("components.device.title") }} />
        <DeviceWithPendingStatus device={device} />
      </>
    );
  }

  if (device?.validation_status === "validated") {
    return (
      <>
        <Stack.Screen options={{ title: t("components.device.title") }} />
        <DeviceWithValidatedStatus device={device} />
      </>
    );
  }

  if (device?.validation_status === "rejected") {
    return (
      <>
        <Stack.Screen options={{ title: t("components.device.title") }} />
        <DeviceWithRejectedStatus device={device} />
      </>
    );
  }
}
