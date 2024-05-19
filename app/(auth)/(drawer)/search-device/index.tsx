import { Input, useTheme } from "@rneui/themed";
import DeviceWithValidatedStatus from "components/DeviceWithValidatedStatus";
import MainButton from "components/UI/MainButton";
import { useFocusEffect } from "expo-router/src/useFocusEffect";
import { maskOnlyNumbers } from "helpers/maskOnlyNumbers";
import notify from "helpers/notify";
import { t } from "i18next";
import React, { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import api from "services/api/api";
import { Device, SearchDevice } from "types/ApiTypes";

import { stylesSearchDevice } from "./_styles";

export default function _Screen() {
  const styles = stylesSearchDevice();
  const { theme } = useTheme();
  const [device, setDevice] = useState<Device | null>();

  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<SearchDevice>();

  const onSubmit = async ({ token }: SearchDevice) => {
    try {
      const response = await api.get<Device>(`/api/devices?token=${token}`);
      setDevice(response.data);
    } catch (error: any) {
      const data = error.response.data;

      notify({
        type: data.message.type,
        message: data.message.text,
      });

      for (const [fieldName, value] of Object.entries(data.errors)) {
        setError(fieldName as keyof SearchDevice, {
          message: value as string,
        });
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      setDevice(null);
      reset();
    }, [reset]),
  );

  if (device) {
    return <DeviceWithValidatedStatus device={device} publicMode />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Controller
          name="token"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              label={t("labels.token")}
              value={value}
              onChangeText={(text) => onChange(maskOnlyNumbers(text))}
              errorMessage={errors.token?.message}
              maxLength={8}
              keyboardType="numeric"
              rightIcon={{
                type: "material-community",
                name: "form-textbox-password",
                color: theme.colors.primary,
              }}
            />
          )}
        />

        <MainButton
          title={t("buttons.search")}
          color={theme.colors.primary}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
}
