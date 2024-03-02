import { Stack, useRouter } from "expo-router";
import { t } from "i18next";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { TextInput, Text, Button, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import api from "../services/api/api";
import useToken from "../states/useToken";
import { UserAfterRegister, UserLogin } from "../types/ApiTypes";

export default function _Screen() {
  const router = useRouter();
  const theme = useTheme();
  const { setToken } = useToken();
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<UserLogin>();

  const onSubmit = async ({ email, password }: UserLogin) => {
    try {
      const response = await api.post<UserAfterRegister>("/api/login", {
        email,
        password,
      });

      setToken(response.data.token);
      router.push("/(auth)/home");
    } catch (error: any) {
      const dataErrors = error.response?.data.errors;

      for (const [fieldName, value] of Object.entries(dataErrors)) {
        setError(fieldName as keyof UserLogin, { message: value as string });
      }
    }
  };

  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <View style={styles.textInput}>
            <Text variant="headlineLarge" style={styles.loginTitle}>
              {t("components.login.title")}
            </Text>
            <Text variant="titleLarge">{t("components.login.subtitle")}</Text>
          </View>

          <View style={styles.textInput}>
            <Controller
              name="email"
              control={control}
              render={({ field: { value, onChange } }) => (
                <>
                  <TextInput
                    label={t("forms.login.email")}
                    value={value}
                    onChangeText={onChange}
                    error={!!errors.email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    right={
                      <TextInput.Icon
                        icon="email"
                        color={theme.colors.primary}
                      />
                    }
                  />
                  {errors.email && (
                    <Text style={{ color: theme.colors.error }}>
                      {errors.email.message}
                    </Text>
                  )}
                </>
              )}
            />
          </View>

          <View style={styles.textInput}>
            <Controller
              name="password"
              control={control}
              render={({ field: { value, onChange } }) => (
                <>
                  <TextInput
                    label={t("forms.login.password")}
                    value={value}
                    onChangeText={onChange}
                    error={!!errors.password}
                    secureTextEntry={hidePassword}
                    autoCapitalize="none"
                    right={
                      <TextInput.Icon
                        icon={hidePassword ? "eye" : "eye-off-outline"}
                        color={theme.colors.primary}
                        onPress={togglePasswordVisibility}
                      />
                    }
                  />

                  {errors.password && (
                    <Text style={{ color: theme.colors.error }}>
                      {errors.password.message}
                    </Text>
                  )}
                </>
              )}
            />
          </View>

          <Button
            icon="login"
            mode="contained"
            onPress={handleSubmit(onSubmit)}
            style={{
              borderRadius: 6,
              backgroundColor: theme.colors.primary,
            }}
          >
            {t("buttons.login")}
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    width: "90%",
  },
  loginTitle: {
    fontWeight: "900",
  },
  textInput: {
    height: 95,
  },
});
