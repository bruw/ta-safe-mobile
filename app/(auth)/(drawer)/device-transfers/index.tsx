import DefaultMessageForInactivity from "components/DefaultMessageForInactivity";
import CustomActivityIndicator from "components/UI/CustomActivityIndicator";
import UserDeviceTransfers from "components/UserDeviceTransfers";
import { useFocusEffect } from "expo-router/src/useFocusEffect";
import React, { useCallback, useState } from "react";
import api from "services/api/api";
import { Transfer } from "types/ApiTypes";

export default function _Screen() {
  const [userTransfers, setUserTransfers] = useState<Transfer[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleUserTransfers = useCallback(() => {
    api
      .get<Transfer[]>("api/user/devices-transfers")
      .then((response) => setUserTransfers(response.data))
      .catch((error) =>
        console.error(
          "Ocorreu um erro ao buscar as transferências do usuário",
          error.data,
        ),
      )
      .finally(() => {
        setRefreshing(false);
        setIsLoading(false);
      });
  }, []);

  useFocusEffect(handleUserTransfers);

  if (isLoading) return <CustomActivityIndicator />;

  if (userTransfers.length > 0) {
    return (
      <UserDeviceTransfers
        transfers={userTransfers}
        refreshing={refreshing}
        handleTranfers={handleUserTransfers}
      />
    );
  }

  return <DefaultMessageForInactivity />;
}
