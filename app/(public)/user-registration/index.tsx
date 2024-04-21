import { Button, Input, makeStyles, useTheme } from "@rneui/themed";
import { Stack, useRouter } from "expo-router";
import { maskCpf } from "helpers/maskCpf";
import { maskPhone } from "helpers/maskPhone";
import notify from "helpers/notify";
import { t } from "i18next";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import api from "services/api/api";
import useToken from "states/useToken";
import { UserAuth, UserRegistration } from "types/ApiTypes";

export default function _Screen() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = useStyles();
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
  } = useForm<UserRegistration>();

  const onSubmit = async ({
    name,
    email,
    cpf,
    phone,
    password,
    password_confirmation,
  }: UserRegistration) => {
    try {
      const response = await api.post<UserAuth>("/api/register", {
        name,
        email,
        cpf,
        phone,
        password,
        password_confirmation,
      });

      setToken(response.data.user.token, response.data.user);
      router.replace("/(auth)/my-devices");
    } catch (error: any) {
      const data = error.response.data;

      notify({ type: data.message.type, message: data.message.text });

      for (const [fieldName, value] of Object.entries(data.errors)) {
        setError(fieldName as keyof UserRegistration, {
          message: value as string,
        });
      }
    }
  };

  return (
    <ScrollView>
      <Stack.Screen
        options={{ title: t("components.userRegistration.title") }}
      />
      <View style={styles.container}>
        <View style={styles.registerContainer}>
          <View style={styles.defaultSpacing}>
            <Controller
              name="name"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  label={t("forms.userRegistration.name")}
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.name?.message}
                  rightIcon={{
                    type: "material-community",
                    name: "account",
                    color: theme.colors.primary,
                  }}
                />
              )}
            />
          </View>

          <View style={styles.defaultSpacing}>
            <Controller
              name="email"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  label={t("forms.userRegistration.email")}
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.email?.message}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  rightIcon={{
                    type: "material-community",
                    name: "email",
                    color: theme.colors.primary,
                  }}
                />
              )}
            />
          </View>

          <View style={styles.defaultSpacing}>
            <Controller
              name="cpf"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  label={t("forms.userRegistration.cpf")}
                  value={value}
                  onChangeText={(text) => onChange(maskCpf(text))}
                  errorMessage={errors.cpf?.message}
                  keyboardType="numeric"
                  rightIcon={{
                    type: "material-community",
                    name: "card-account-details",
                    color: theme.colors.primary,
                  }}
                />
              )}
            />
          </View>

          <View style={styles.defaultSpacing}>
            <Controller
              name="phone"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  label={t("forms.userRegistration.phone")}
                  value={value}
                  onChangeText={(text) => onChange(maskPhone(text))}
                  errorMessage={errors.phone?.message}
                  keyboardType="numeric"
                  rightIcon={{
                    type: "material-community",
                    name: "cellphone",
                    color: theme.colors.primary,
                  }}
                />
              )}
            />
          </View>

          <View style={styles.defaultSpacing}>
            <Controller
              name="password"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  label={t("forms.login.password")}
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.password?.message}
                  secureTextEntry={hidePassword}
                  autoCapitalize="none"
                  rightIcon={{
                    type: "material-community",
                    name: hidePassword ? "eye" : "eye-off-outline",
                    color: theme.colors.primary,
                    onPress() {
                      togglePasswordVisibility();
                    },
                  }}
                />
              )}
            />
          </View>

          <View style={styles.defaultSpacing}>
            <Controller
              name="password_confirmation"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  label={t("forms.userRegistration.passwordConfirmation")}
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.password_confirmation?.message}
                  secureTextEntry={hidePassword}
                  autoCapitalize="none"
                  rightIcon={{
                    type: "material-community",
                    name: hidePassword ? "eye" : "eye-off-outline",
                    color: theme.colors.primary,
                    onPress() {
                      togglePasswordVisibility();
                    },
                  }}
                />
              )}
            />
          </View>

          <View>
            <Button
              title={t("buttons.register")}
              onPress={handleSubmit(onSubmit)}
              color={theme.colors.primary}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  registerContainer: {
    width: "90%",
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl,
  },
  defaultSpacing: {
    marginBottom: theme.spacing.lg,
  },
}));
