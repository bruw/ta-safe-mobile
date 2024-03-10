import { Button, Input, Text, makeStyles, useTheme } from "@rneui/themed";
import { Link, Stack, useRouter } from "expo-router";
import { t } from "i18next";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "services/api/api";
import useToken from "states/useToken";
import { UserAfterRegister, UserLogin } from "types/ApiTypes";

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
  } = useForm<UserLogin>();

  const onSubmit = async ({ email, password }: UserLogin) => {
    try {
      const response = await api.post<UserAfterRegister>("/api/login", {
        email,
        password,
      });

      setToken(response.data.token);
      router.replace("/(auth)/home");
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
          <View style={styles.defaultSpacing}>
            <Text h2>{t("components.login.title")}</Text>
            <Text h4 h4Style={{ fontWeight: "500" }}>
              {t("components.login.subtitle")}
            </Text>
          </View>

          <View style={styles.defaultSpacing}>
            <View style={styles.defaultSpacing}>
              <Controller
                name="email"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    placeholder={t("forms.login.email")}
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
                name="password"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    placeholder={t("forms.login.password")}
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
          </View>

          <View>
            <Button
              title={t("buttons.login")}
              onPress={handleSubmit(onSubmit)}
              color={theme.colors.primary}
              icon={{
                type: "material-community",
                name: "login",
                color: "#fff",
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <Link href="/user-registration/" style={styles.link}>
            {t("buttons.signUp")}
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    width: "90%",
  },
  defaultSpacing: {
    marginBottom: theme.spacing.lg,
  },
  link: {
    color: theme.colors.primary,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
}));
