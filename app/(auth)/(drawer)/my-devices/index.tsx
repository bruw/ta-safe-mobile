import DeviceList from "components/DeviceList";
import CustomActivityIndicator from "components/UI/CustomActivityIndicator";
import { useFocusEffect } from "expo-router/src/useFocusEffect";
import React, { useCallback, useState } from "react";
import api from "services/api/api";
import { Device } from "types/ApiTypes";

export default function _Screen() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleDevices = useCallback(() => {
    api
      .get<Device[]>("api/user/devices")
      .then((response) => setDevices(response.data))
      .catch((error) =>
        console.error("Ocorreu um erro ao buscar os dispositivos:", error.data),
      )
      .finally(() => {
        setRefreshing(false);
        setIsLoading(false);
      });
  }, []);

  useFocusEffect(handleDevices);

  if (isLoading) {
    return <CustomActivityIndicator />;
  }

  return (
    <DeviceList
      devices={devices}
      refreshing={refreshing}
      handleDevices={handleDevices}
    />
  );
}
