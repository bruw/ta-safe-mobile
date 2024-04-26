import { Button, Input, makeStyles, useTheme } from "@rneui/themed";
import { maskPhone } from "helpers/maskPhone";
import notify from "helpers/notify";
import { t } from "i18next";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import api from "services/api/api";
import useToken from "states/useToken";
import { UserUpdate } from "types/ApiTypes";

export default function _Screen() {
  const { user } = useToken();
  const { theme } = useTheme();
  const styles = useStyles();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<UserUpdate>({
    defaultValues: {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
    },
  });

  const onSubmit = async ({ name, email, phone }: UserUpdate) => {
    try {
      const response = await api.put<UserUpdate>("/api/user", {
        name,
        email,
        phone,
      });

      notify({
        type: response.data.message.type,
        message: response.data.message.text,
      });
    } catch (error: any) {
      const data = error.response.data;

      notify({
        type: data.message.type,
        message: data.message.text,
      });

      for (const [fieldName, value] of Object.entries(data.errors)) {
        setError(fieldName as keyof UserUpdate, {
          message: value as string,
        });
      }
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.updateUserContainer}>
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
            <Input
              disabled
              label={t("forms.userRegistration.cpf")}
              defaultValue={user?.cpf}
            />
          </View>

          <View>
            <Button
              title={t("buttons.save")}
              color={theme.colors.primary}
              onPress={handleSubmit(onSubmit)}
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
  updateUserContainer: {
    width: "90%",
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl,
  },
  defaultSpacing: {
    marginBottom: theme.spacing.lg,
  },
}));
